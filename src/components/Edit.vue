<template>
  <ItemForm :name="item.name" :description="item.description" :imgUrl="item.imgUrl" :ingredients="item.ingredients"/>
</template>
<script>
import { mapGetters } from 'vuex'
import ItemForm from './ItemForm.vue'
export default {
  name: 'Edit',
  components: {
    ItemForm
  },
  data () {
    return {
      item: {}
    }
  },
  computed: mapGetters(['allItems']),
  created () {
    this.item = this.allItems[this.$route.params.index]
  }
}
</script>
