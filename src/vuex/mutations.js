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
  }
}

export default mutations