<template>
  <div id="app">
    <naviation></naviation>
    <keep-alive><router-view/></keep-alive>
    <bottom></bottom>
  </div>
</template>

<script>
  import naviation from '@/components/naviation'
  import bottom from '@/components/bottom'
  export default {
    name: 'app',
    components: {
      naviation,
      bottom
    }
  }
</script>