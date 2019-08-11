import Vue from "vue";
import Vuex from "vuex";
import {
  fetchIdsByType,
  fetchItems
} from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      activeType: null,
      perPageNum: 20,
      items: {},
      ids:{
          top:[],
          new:[]
      }
  },
  getters: {
    activeIds: (state) => {
      const {activeType, perPageNum, ids} = state

      if (!activeType) {
        return []
      }

      const pageNow = Number(state.route.params.page) || 1;
      return ids[activeType].slice((pageNow - 1)*perPageNum, pageNow*perPageNum)
    },
    activeItems: (state, getters) => {
      return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    }
  },
  mutations: {
    SET_ACTIVE_TYPE: (state, {type}) => {
      state.activeType = type
    },
    SET_IDS: (state, {type, ids}) => {
      state.ids[type] = ids
    },
    SET_ITEMS: (state, { items }) => {
        items.forEach(item => {
            if (item) {
                Vue.set(state.items, item.id, item)
            }
        })
    }
  },
  actions: {
    FETCH_IDS: ({commit, dispatch}, {type}) => {
      commit('SET_ACTIVE_TYPE', { type })
      return fetchIdsByType(type).then(ids => {
          commit('SET_IDS', {type, ids})
      }).then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
    },
    FETCH_ITEMS: ({commit, state}, {ids}) => {
      // 过滤已获取到的item
        ids = ids.filter(id => {
          const item = state.items[id]
          if (!item) {
            return true
          }
          return false
        }) 
        if (ids.length) {
            return fetchItems(ids).then(items => 
                commit('SET_ITEMS', {items})
            )
        } else {
            return Promise.resolve()
        }
    },
    ENSURE_ACTIVE_ITEMS: ({dispatch, getters}) => {
      // console.log(getters.activeIds)
      return dispatch('FETCH_ITEMS', {ids: getters.activeIds})
    }
  },
});
