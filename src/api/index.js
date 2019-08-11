import firebase from 'firebase/app';
import 'firebase/database';

const hackerNews = {
    version: '/v0',
    config: {
        databaseURL: 'https://hacker-news.firebaseio.com'
    }
}
const app = firebase.initializeApp(hackerNews.config);
const api = app.database().ref(hackerNews.version);

const logRequests = !!process.env.DEBUG_API

function fetch(child) {
    logRequests || console.log(`fetching ${child} ...`)
    return new Promise((resolve, reject) => {
        api.child(child).once('value', snapshot => {
            const val = snapshot.val()
            logRequests || console.log(`fetched ${child}.`)
            resolve(val)
        }, reject)
    })
}

// 获取topstories 和 newstories 的id

const ids = {}
;['top', 'new'].forEach(type => {
    api.child(`${type}stories`).on('value', snapshot => {
        ids[type] = snapshot.val()
      })
})

export function fetchIdsByType(type) {
    return ids && ids[type] ? Promise.resolve(ids[type]): fetch(`${type}stories`)
}

// export function fetchIdsByType(type) {
//     return fetch(`${type}stories`)
// }

export function fetchItemById(id) {
    return fetch(`item/${id}`)
}

export function fetchItems(ids) {
    return Promise.all(ids.map(id => fetchItemById(id)))
}

export function watchList (type, cb) {
    let first = true
    const ref = api.child(`${type}stories`)
    const handler = snapshot => {
        if (first) {
            first = false
        } else {
            cb(snapshot.val())
        }
    }
    ref.on('value', handler)
    return () => {
        ref.off('value', handler)
    }
}







