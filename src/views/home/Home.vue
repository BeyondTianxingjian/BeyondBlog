<template>
  <div>
    <Content></Content>
    <Menu></Menu>
  </div>
</template>

<script>
import Content from '@/views/content/Content.vue'
import Menu from '@/views/menu/Menu.vue'

export default {
  name: 'home',
  components: {
    Content, Menu
  }
}
</script>
