<template>
  <div class="body">
    <div class="header">
      <h1>Weblogs</h1>
    </div>
    <hr/>
    <div class="front">
      <section>
        <article>
          <header>
            <h2><a href="//pvdz.ee/weblog/428">Pack token types in 32bit</a></h2>
            <div class="time front">2019-09-29</div>
          </header>
          <section>
            <p class="front">
              I've been writing a JS parser for over two years now. In this particular post I want to
              highlight a bit packing trick I'm applying to a core data structure of the parser as a
              whole: the token type. In general, the way a parser works is that it doe...
            </p>
          </section>
          <br/>
        </article>
        <MavonEditor></MavonEditor>
        OOOOOOOOOOO{{token}}OOOOOOOOO1111
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import MavonEditor from '@c/MavonEditor'
import { mapGetters } from 'vuex'

export default {
  name: 'Content',
  components: { MavonEditor },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    toWrite () {
      this.$router.push({ path: '/write' })
    },
    toWrite1: () => {
      let a = this
      a.$router.push({ path: '/write' })
    },
    toRead () {

    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>

<style lang="less">
  @import "content.less";
</style>
