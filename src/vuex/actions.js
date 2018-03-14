// 方法调度, 执行actions内的方法是去调度mutations内的方法
const actions = {
  get_theme ({commit}) {
    commit("GET_THEME")
  },
  change_theme ({commit}) {
    commit("CHANGE_THEME")
  }
}

export default actions