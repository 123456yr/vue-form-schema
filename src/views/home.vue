
<template lang="pug">
.container
  .left 
    .leftDiv(v-for='(item, index) in leftBtns', :key='index') 
      .leftType {{ item.type }}
      draggable.leftBtn(
        :list='leftBtns',
        group='component',
        @change='handleChange'
      )
        el-button(v-for='(btn, index) in item.modules', :key='index') {{ btn.viewSchema.title }}
  .middle
    .middleDiv 
      draggable.middleCom(
        :list='componentList',
        group='component',
        @change='handleChangeCom'
      )
        //- 组件
        form-com(:formConfig='formConfig')
          template
            formItem(v-for='item of componentList', :key='item.prop')
  .right
    el-tabs(v-model='activeName', @tab-click='handleClick')
      el-tab-pane(label='组件配置', name='1')
      el-tab-pane(label='表单配置', name='2')
    com-config(:currentCom='currentCom') 
</template>
<script>
import leftBtns from '@/utils/leftBtns'
import draggable from 'vuedraggable'
import formConfig from '@/config/form'
import FormCom from '@/components/form.vue' 
import FormItem from '@/components/formItem.vue'
import ComConfig from './components/comConfig.vue'
export default {
  components: {draggable, FormCom, FormItem, ComConfig},
  data () {
    return {
      leftBtns: [],
      formConfig: {},
      componentList: [],
      currentCom: {}
    };
  },
  created(){
    this.leftBtns= leftBtns
    this.formConfg= formConfig
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  .right,
  .left,
  .middle {
    height: 100%;
    border: 1px solid #ccc;
  }
  .left {
    flex: 0 0 250px;
  }
  .middle {
    flex: 1 1 auto;
  }
  .right {
    flex: 0 0 350px;
  }
}
</style>