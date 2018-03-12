import echarts from 'echarts'
import options from './options' // 导入图表配置信息
import api from '../api/index'

const $com = {
  options,
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

    api.getMainIncomeOutpay({
      id: 'all',
      areaType: 'area',
      timeType: type,
      projectType: ''
    }, (income, outpay) => {
      console.log(income, outpay)
    })
  },

  /*
   * @description 收/支柱状图
   */
}

// $com.labelFormatt()

export default $com