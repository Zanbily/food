<template>
  <div>
      <ItemForm :name="name" :description="description" :imgUrl="imgUrl" :ingredients="ingredients"/>
  </div>
</template>
<script>
import ItemForm from './ItemForm.vue'
export default {
  name: 'NewItem',
  components: {
    ItemForm
  },
  data () {
    return {
      name: '',
      description: '',
      imgUrl: '',
      ingredients: []
    }
  }
}
</script>
