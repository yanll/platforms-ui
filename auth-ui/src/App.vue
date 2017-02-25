<!--<template>
  <div>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>-->

<!--<script>
export default {
  components: {}
}
</script>-->

<!--<style lang="scss">
  @import "./style/style";
</style>-->
	
	
	<template>
  <div id="app">
    <NavMenu></NavMenu>
    <Container></Container>
  </div>
</template>

<script>
import './components/common/style.scss'
import NavMenu from './components/common/NavMenu.vue'
import Container from './components/common/Container.vue'

export default {
  name: 'app',
  components: {
    NavMenu,
    Container
  }
}
</script>

