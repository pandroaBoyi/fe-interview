<template>
  <div class="itemview">
    <div class="pageSep">
      <router-link to="/top"> &lt; prev </router-link>
      <span> 1/25 </span>
      <router-link to="/top">more &gt;</router-link>
    </div>
    <ul v-for="item in $store.state.items" :key="item.id">
      <Item :item="item"></Item>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue';

export default {
  name: "home",
  components: {
    Item
  },
  beforeMount() {
    this.$store.dispatch('FETCH_IDS', {type: 'new'}).then(() => {
      this.$store.dispatch('FETCH_ITEMS', {ids: this.$store.state.ids['new']})
    })
    // this.$store.dispatch('FETCH_IDS', {type: 'new'})
  },
  methods: {
    
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
  }
}
</style>
