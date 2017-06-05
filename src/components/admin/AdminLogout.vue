<template>

</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('adminLogout');
      this.$router.push({name: 'adminLogin'})
    }
  }
</script>

<style>

</style>
