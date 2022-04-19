<template>
  <div class="filter_block">
    <li v-for="brand of brands" :key="brand.id">
      <a href="javascript:void(0);" @click="chooseBrand(brand.id)">{{ brand.title }}</a>
    </li>
  </div>
</template>

<script>
export default {
  name: "AFilter",
  props: {
    brands: {
      type: Array,
      default: null
    }
  },
  methods: {
    chooseBrand(id) {
      this.$emit('filterBrand', {
        brand: id,
      })
    }
  }
}
</script>

<style scoped>
.filter_block {
  width: 100px;
  background-color: #fff;
}

li {
  padding: 5px;
  list-style-type: none;
}

a{
  text-decoration: none;
  color: #333131;
  font-size: 20px;
}
</style>