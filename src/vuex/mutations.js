const mutations = {
  getTheme (currentTheme) {
    let theme = localStorage.getItem('theme')
    // localstorage中不存在theme就不做任何事
    if (!theme) return
    currentTheme = theme
  },
  changeTheme (currentTheme, theme) {
    currentTheme = theme
    localStorage.setItem('theme', theme)
  }
}

export default mutations