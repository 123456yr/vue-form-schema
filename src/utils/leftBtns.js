/*
 * @Author: 2197192973@qq.com yangrui
 * @Date: 2022-10-07 12:06:02
 * @LastEditors: 2197192973@qq.com yangrui
 * @LastEditTime: 2022-10-07 12:35:56
 * @FilePath: \vue-schema-form\src\utils\leftBtns.js
 * @Description: 
 */

let inputFiles = require.context('@/config/input/', false, /\.js$/)
let selectFiles = require.context('@/config/select/', false, /\.js$/)

const leftBtns = [
  {
    type: '输入',
    modules: getModules(inputFiles)
  },
  {
    type: '选择',
    modules: getModules(selectFiles)
  }
]

function getModules(files) {
  return files.keys().reduce((preval, key) => {
    // 这里是files(key) 不是files[key] files是函数
    preval.push(files(key).default)
    return preval
  }, [])
}

export default leftBtns

