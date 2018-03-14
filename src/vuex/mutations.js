// 相当于事件注册
const mutations = {
  GET_THEME (state) {
    let theme = localStorage.getItem('theme')
    // localstorage中不存在theme就不做任何事
    if (!theme) return
    state.currentTheme = theme
  },
  CHANGE_THEME (state, theme) {
    state.currentTheme = theme
    localStorage.setItem('theme', theme)
  },
  set_current_data (state, obj) {
    // state.currentData.totalIncome = val
    // 获取对象属性,设置state内对应对象属性的值
    Object.keys(obj).forEach((v, i) => {
      state.currentData[v] = obj[v]
    })
  },
  set_charts (state, obj) {
    Object.keys(obj).forEach((v, i) => {
      state.charts[v] = obj[v]
    })
  },
}

export default mutations