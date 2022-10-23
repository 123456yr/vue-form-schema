<template lang="pug">
el-form(:model='formData')
  form-item
</template>
<script>
import FormItem from '@/components/formItem.vue'
export default {
  components: {FormItem},
  props: {
    currentCom: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    };
  },
  methods: {
    getFormItem(){
      
    }
  }
}
</script>
<style lang="scss" scoped>
</style>