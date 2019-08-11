<template>
  <div class="itemview">
    <div class="pageSep">
      <router-link to="/top"> &lt; prev </router-link>
      <!-- <span> {{page}}/{{maxPage}} </span> -->
      <router-link to="/top">more &gt;</router-link>
    </div>
    <transition-group tag="ul" name="item">
      <Item v-for="item in displayItems" :key="item.id" :item="item"></Item>
    </transition-group>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue';
import {watchList} from '../api'

export default {
  name: "home",
  components: {
    Item
  },
  data() {
    return {
      displayItems: this.$store.getters.activeItems
    }
  },
  computed: {
    page () {
      return Number(this.$route.params.page) || 1
    },
    maxPage () {
      const {ids, perPageNum} = this.$store.state
      return Math.ceil(ids['top'].length/perPageNum)
    },
    hasMore () {
      return this.page < this.maxPage
    }
  },
  beforeMount() {
    // if (this.$root._isMounted) {
    //   this.loadItem(this.page)
    // }
    

    this.unwatchList = watchList('top', ids => {
      this.$store.commit('SET_IDS', {type: 'top', ids: ids})
      this.$store.dispatch('ENSURE_ACTIVE_ITEMS').then(() => {
        this.displayItems = this.$store.getters.activeItems
      })
    })
    // this.$store.dispatch('FETCH_IDS', {type: 'top'}).then(() => {
    //   this.$store.dispatch('FETCH_ITEMS', {ids: this.$store.state.ids['top']})
    // })
    // this.$store.dispatch('FETCH_IDS', {type: 'new'})
  },
  mounted() {
    this.loadItem(this.page)
  },
  beforeDestroy() {
    this.unwatchList()
  },
  methods: {
    loadItem(to = this.page, from = -1) {
      this.$store.dispatch('FETCH_IDS', {type: 'top'}).then(() => {
        if (this.page < 0 || this.page > this.maxPage) {
          this.$route.replace(`/top/1`)
        }
        this.displayItems = this.$store.getters.activeItems
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.itemview{
  margin-top: 160px;
  .pageSep{
    position: fixed;
    top: 80px;left: 0;
    height: 60px;width: 100%;
    background: #fff;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.12) 0 2px 6px, rgba(0, 0, 0, 0.24) 0 1px 2px;
    text-align: center;line-height: 60px;
    a {
      text-decoration: none;
      padding: 0 10px;
    }
  }
}
</style>

<style lang="scss">
.item-move, .item-enter-active, .item-leave-active{
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.item-enter{
  opacity: 0;
  transform: translate(30px, 0);
}

.item-leave-active{
  position: absolute;
  opacity:0;
  transform:translate(30px, 0);
}
</style>
