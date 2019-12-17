<template>
  <div>
    <Content></Content>
    <Menu></Menu>
  </div>
</template>

<script lang="ts">
import Content from '@v/home/Content'
import Menu from '@v/menu/Menu'

export default {
  name: 'home',
  components: {
    Content, Menu
  }
}
</script>
