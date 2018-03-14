// 方法调度, 执行actions内的方法是去调度mutations内的方法
import api from '../api/index'
import $ from '../utils/comment'

const actions = {
  get_theme ({commit}) {
    commit("GET_THEME")
  },
  change_theme ({commit}) {
    commit("CHANGE_THEME")
  },
  set_current_data ({commit}) {
    commit("set_current_data")
  },
  /*
   * @description 首页收支数据更新方法
   */
  changeIncomeOutpay ({commit, state, dispatch}) {
    let curData = state.currentData

    // 绘制/更新首页收/支柱状图
    api.getMainIncomeOutpay({
      id: curData.ajaxId,
      areaType: curData.areaType,
      timeType: curData.mainTimeType,
      projectType: curData.projectType
    }, (income, outpay) => {
      // 更新收入/支出总数， 利润
      commit('set_current_data', {
        totalIncome: $.formatFilter($.toTenThousand(income.TotalFact), '万元'),
        totalOutpay: $.formatFilter($.toTenThousand(outpay.TotalFact), '万元'),
        profit: $.formatFilter($.toTenThousand(income.TotalFact - outpay.TotalFact), '万元')
      })
      // 如果已经存在两图，则只需要更新
      if (state.charts.income && state.charts.outpay) {
        dispatch("drawSingleBar", {id: 'income', data: income, isUpdate: true})
        dispatch("drawSingleBar", {id: 'outpay', data: income, isUpdate: true})
        // _this.drawSingleBar('income', income, true)
        // _this.drawSingleBar('outpay', outpay, true)
      } else {
        dispatch("drawSingleBar", {id: 'income', data: income})
        dispatch("drawSingleBar", {id: 'outpay', data: income})
        // _this.drawSingleBar('income', income)
        // _this.drawSingleBar('outpay', outpay)
      }
    })
  },

  /*
   * @description 收/支柱状图
   * @params {String} id echarts图对应的元素id
   * @params {Object} data 收入/支出数据
   * @params {Bollean} isUpdate 若已存在该图表，则传入true，直接更新数据
   */
  drawSingleBar ({commit, state}, {id, data, isUpdate}) {
    let 
      seriesData = [], // 柱子高度数据
      xAxis = [], // x轴坐标数据
      opt = isUpdate? state.charts[id].getOption() : $.options.singleBar, //根据是否更新获取所需的option
      theme = state.currentTheme // 当前主题

    // 构造x轴和柱子高度数据
    data.Data.forEach((v, i) => {
      seriesData.push($.toTenThousand(v.Value))
      xAxis.push(v.Name)
    })

    opt.title[0].text = data.Time // title
    opt.series[0].data = seriesData // 柱子数据

    // 不是更新才更改的数据,并且绘制图表
    // 否则只更新图表
    if (!isUpdate) {
      opt.title[0].textStyle.color = state.themes[theme].singleBar // 标题色
      opt.color = state.themes[theme].singleBar // 柱子色
      opt.xAxis[0].data = xAxis // 横坐标
      opt.series[0].name = id === 'income'? '收入分析' : '支出分析'
      let _obj = {}
      _obj[id] = $.$echarts(id, opt)
      commit("set_charts", _obj)
      _obj = null
      // state.charts[id] = this.$.$echarts(id, opt) // 绘制柱状图
      
    } else {
      state.charts[id].setOption(opt, true)
    }
  }
}

export default actions