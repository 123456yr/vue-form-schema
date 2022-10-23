// inputconfig分2部分
// viewSchema 说明是哪种类型的组件
// propsSchema分4部分，
// 1.prop属性默认随机值，2.baseValue基础配置，3.option组件特有配置，4.rules规则
import schemaConfig from '../common'

const inputConfig = () => {
  return {
    option: {
      title: '选项',
      type: 'object',
      properties: {
        placeholder: {
          title: '输入占位文字',
          type: 'string',
          placeholder: '请输入'
        },
        clearable: {
          title: '显示清空按钮',
          type: 'boolean',
        },
        showWordLimit: {
          title: '显示字数统计',
          type: 'boolean'
        },
        showPassword: {
          title: '显示密码图标',
          type: 'boolean'
        }
      }
    },
    rules: {
      title: '数据校验',
      type: 'object',
      properties: {
        maxLength: {
          title: '最大长度',
          type: 'number'
        },
        mixLength: {
          title: '最小长度',
          type: 'number'
        }
      }
    }
  }
}

const viewSchema = {
  title: '输入框',
  type: 'string'
}
export default {
  viewSchema,
  propsSchema: schemaConfig(inputConfig, viewSchema.type)
}