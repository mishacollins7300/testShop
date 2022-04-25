<template>
<p>{{shopCart}}</p>
</template>

<script>
export default {
  name: "ShopCartList",
  props: {
    shopCart: {
      type: Array,
    }
  }
}
</script>

<style scoped>

</style>