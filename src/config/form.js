
// 滑块格式化
const labelFormatTooltip= (val) => {
  return val ? (val * 4) + 'px' : null
}

// 表单配置
// inline布局 标签宽度可以是自适应的，可以设置
// ui:options中是可以直接放在组件上的配置
export default () => {
  return {
    title: '表单配置',
    type: 'object',
    required: ['prop'],
    properties: {
      prop: {
        title: '属性名',
        type: 'string',
        'err:required': '属性名为必填'
      },
      inline: {
        title: 'inline布局',
        type: 'boolean',
        default: false,      
      },
      layout: {
        title: '布局',
        type: 'number',
        widget: 'SelectWidget',
        enumList: [
          {label: '一行一列', value: 1},
          {label: '一行两列', value: 2},
          {label: '一行三列', value: 3},
        ]
      },
      labelPosition: {
        title: '标签对齐方式',
        type: 'string',
        widget: 'RadioWidget',
        enumList: ['left', 'top', 'right']
      },
      labelWidth: {
        title: '标签宽度',
        type: 'number',
        widget: 'SliderWidget',
        'ui:options': {
          formatTooltip: labelFormatTooltip
        }
      }
    }
  }
}