// import vue from 'vue'
import store from '../vuex/index'
import echarts from 'echarts'
import options from './options' // 导入图表配置信息
import api from '../api/index'

const $com = {
  options,

  charts: {},

  /* 
    * @description 挂载并初始化echarts实例,返回实例
    * @param {string} el 元素id名,不带#
    * @param {object} option 图表配置
    */
  $echarts: function (el, option) {
    let dom = document.getElementById(el);
    let chart = echarts.init(dom); // 第二个参数是主题(先script引进主题)
    chart.setOption(option, true);
    // window.addEventListener('resize', function () {
    //   chart.resize();
    // });
    return chart
  },

  formatFilter: options.formatFilter,

  areaFilter (value) {
    if (value == null) return '/'
    value = Number(value);
    if (value >= 10000) {
      value = value / 10000;
      let decimal = 0;
      decimal = value.toString().indexOf('.') != -1? 1 : 0;

      value = this.formatFilter(value, '万 m²', decimal);
    }else {
      // value = Math.round(value);
      // value += 'm²'
      value = this.formatFilter(value, 'm²');
    }
    return value
  },

  valFilter (value) {
    return value = value === null? '/' : value
  },

  /*
   * @description 首页的本年/本季/本月的选择
   * @param {string} type 'income' / 'outpay'
   */
  changeTimeType (type) {
    // return console.log(type)
    let _this = this

    // 绘制/更新首页收/支柱状图
    api.getMainIncomeOutpay({
      id: 'all',
      areaType: 'area',
      timeType: type,
      projectType: ''
    }, (income, outpay) => {
      // 如果已经存在两图，则只需要更新
      if (_this.charts.income && _this.charts.outpay) {

      } else {
        _this.drawMoneyBar('income', income)
        _this.drawMoneyBar('outpay', outpay)
        log(store.state)
      }
    })
  },

  /*
   * @description 收/支柱状图
   */
  drawMoneyBar (id, data) {
    let 
      seriesData = [],
      xAxis = [],
      opt = this.options.singleBar,
      _this = this

    data.Data.forEach((v, i) => {
      seriesData.push(_this.toTenThousand(v.Value))
      xAxis.push(v.Name)
    })

    opt.title.text = data.Time // title
    opt.xAxis[0].data = xAxis // 横坐标
    opt.series[0].data = seriesData // 柱子数据
    opt.series[0].name = id === 'income'? '收入分析' : '支出分析'

    this.charts[id] = this.$echarts(id, opt) // 绘制柱状图
  },

  // 转化为万元
  toTenThousand: function (value, type) {
    let rmb = 0, divisor = 0
    type = type || 'money'
    value = value? Number(value) : 0
    divisor = type == 'area'? 1000 : 10000 // 转km²/万元
    rmb = value / divisor
    if (rmb == 0) {
      return 0
    }
    // 特别注意,toFixed()返回的是字符串
    rmb = rmb.toFixed(2);
    let dot = rmb.substring(rmb.indexOf('.'))
    rmb = dot == '.00'? Math.floor(rmb) : Number(rmb)
    return rmb
  },

  // 判断是否有小数点,以转化
  isDot: function (value) {
    value = value || 0
    value = Number(value) // 防止value是字符串
    if (value == 0) {
      return 0
    }
    let result = (value.toString()).indexOf(".")
    if(result != -1) {
      return Number(value.toFixed(2))
    } else {
      return value
    }
  },
}

// $com.labelFormatt()

export default $com