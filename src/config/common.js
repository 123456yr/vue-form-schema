/*
 * @Author: 2197192973@qq.com yangrui
 * @Date: 2022-10-06 17:18:11
 * @LastEditors: 2197192973@qq.com yangrui
 * @LastEditTime: 2022-10-07 17:03:19
 * @FilePath: \vue-schema-form\src\config\common.js
 * @Description: 
 */
const baseValue= (type) => {
  return {
    title: '基础配置',
    type: 'object',
    properties: {
      label: {
        title: '标题',
        type: 'string'
      },
      placeholder: {
        title: '描述',
        type: 'string',
      },
      default: {
        title: '默认值',
        type
      },
      width: {
        title: '组件宽度',
        type: 'string',
        placeholder: '请输入组件宽度，可以是px和%'
      },
      labelWidth: {
        title: '标签宽度',
        type: 'number',
        widget: 'SliderWidget'
      },
      required: {
        title: '必填',
        type: 'boolean',
      },
      disabled: {
        title: '禁用',
        type: 'boolean'
      }
    }
  }
}


export default (schema, type) => {
  return {
    properties:   {
      prop: {
        title: '属性名',
        type: 'string',
        placeholder: '请输入属性名',
        'err:required': '属性名为必填'
      },
      baseValue: baseValue(type),
      ...schema
    },
    required: ['prop']
  }
}