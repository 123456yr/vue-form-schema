<template lang="pug">
el-form-item(v-bind='$attrs', v-on='$listeners')
  component(:is='currentCom')
</template>
<script>
import InputWidget from './input.vue'
import InputNumberWidget from './inputNumber.vue'
const widgetMap= {
  'string': InputWidget,
  'number': InputNumberWidget,
}
export default {
  components: {InputWidget, InputNumberWidget},
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      currentCom: null
    };
  },
  methods: {
    getCurrentCom(){
      this.currentCom= this.config.widget ? parseInt(this.config.widget) : widgetMap[this.config.type]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>