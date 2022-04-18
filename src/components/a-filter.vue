<template>
  <div class="filter_block">
    <ul>
      <li v-for="brand of brands" :key="brand.id">
        <a  href="javascript:void(0);" @click="chooseBrand(brand.id)">{{brand.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AFilter",
  props: {
    brands: {
      type:  Array,
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

</style>