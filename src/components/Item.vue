<template>
    <li class="item">
        <span class="score">{{item.score}}</span>
        <div class="info">
            <span class="title">{{item.title}}</span>
            <span class="attch" v-if="item.url">({{item.url | host}})</span>
        </div>
        <div class="info">
            <span class="attch">by {{item.by}} </span>
            <span class="attch">{{item.time | parseTime}} | </span>
            <span class="attch">{{item.descendants}} comments</span>
        </div>
        
    </li>
</template>

<script>
export default {
    props: {
        item: Object
    },
    filters: {
        parseTime(timestamp) {
            const date = new Date(timestamp*1000 + 3600*6*1000)
            return date.toJSON().substr(0, 19).replace('T', ' ')
        },
        host(url) {
            const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
            const parts = host.split('.').slice(-3)
            if (parts[0] === 'www') parts.shift()
            return parts.join('.')
        }
    }
}
</script>

<style lang="scss" scoped>
    .item {
        height: 80px;
        box-sizing: border-box;
        list-style: none;
        padding: 20px;
        background: #fff;
        margin-top: 10px;
        box-shadow: rgba(0, 0, 0, 0.12) 0 2px 6px, rgba(0, 0, 0, 0.24) 0 1px 2px;
        text-align: left;
        position: relative;
        .score{
            color: #318bec;
            font-size: 24px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        .info{
            margin-left: 60px;
            span.title{
                color: #4b4a4a;
                font-weight: 600;
            }
            span.attch{
                font-size: 12px;
                color: #8f8e8e;
            }
        }
    }
</style>
