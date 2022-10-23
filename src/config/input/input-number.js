/*
 * @Author: 2197192973@qq.com yangrui
 * @Date: 2022-10-07 11:39:30
 * @LastEditors: 2197192973@qq.com yangrui
 * @LastEditTime: 2022-10-07 17:12:26
 * @FilePath: \vue-schema-form\src\config\input\input-number.js
 * @Description: 
 */
import schemaConfig from '../common'

const numberConfig= () => {
  return {
    option: {
      title: '选项',
      type: 'object',
      properties: {
        step: {
          title: '步长',
          type: 'number',
        }
      },
      rules: {
        title: '数据校验',
        type: 'object',
        properties: {
          minimum: {
            title: '最小值',
            type: 'number'
          },
          maximum: {
            title: '最大值',
            type: 'number'
          }
        }
      }
    }
  }
}

const viewSchema= {
  title: '计数器',
  type: 'number',
  widget: 'InputNumberWidget'
}

export default {
  viewSchema,
  propsSchema: schemaConfig(numberConfig, viewSchema.type)
}