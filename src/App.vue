<template>
  <div id="app">
    <header class="header">
      <nav>
        <router-link to="/" exact>
          <img alt="Vue logo" src="./assets/logo.png" />
        </router-link>
        <router-link to="/top">TOP</router-link>
        <router-link to="/new">NEW</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"/>
    </transition>
  </div>
</template>

<style lang="scss" >
body{
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  background: #f7f7f7;
  .header{
    position: fixed;
    z-index: 3;
    top: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #318bec;
    nav{
      max-width: 800px;
      margin: 0 auto;
      img{
        vertical-align: -10px;
        max-width: 40px;
      }
      a{
        vertical-align: middle;
        text-decoration: none;
        color: #c5c2c2;
        font-size: 20px;
        margin-left: 16px;
        &:hover{
          color: #fff;
        }
      }
    }
  }
  .view{
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
