// 定义绘制echarts图表的基数配置
const options = {
  singleBar: {
    color: '#801620',//commenStyle.commentBar.color,
    title: {
      text: '',
      show: true,
      textStyle: {
        fontSize: 16,
        color: '#000',
        align: 'center'
      },
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{b} : {c}人',
    },
    grid: { // 控制标整体距离
      top: 40,
      bottom: 20,
      left: 20,
      right: 20,
      containLabel: true
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['物业管理费', '其它业务收入', '停车场收入']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '收入',
        type: 'bar',
        barGap: 0, // 柱间距离
        label: {
          normal: {
            show: true,
            color: '#152f38',
            fontSize: 14,
            position: 'top',
            formatter: function  (data) {
              return options.formatFilter(Number(data.value), '')
            }
          },
        },
        data: [0, 0, 0]
      }
    ]
  },
  formatFilter (number, unit, places, thousand, decimal) {
    // number为空 返回'/'
    if (number == null) return '/'
    let re = '';
    // 保证number是数字
    number = Number(number) || 0;
    unit = unit || '';
    // 默认不保留小数点
    // places绝对值是否是数字: y => places , n => 0
    places = !isNaN(places = Math.abs(places)) ? places : 0; 
    // 千位分隔符,默认是','
    thousand = thousand || ",";
    // 小数点,默认是'.'
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "",
        // number保留places位小数,并转化为10进制,最后转为字符串
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    re = negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
    // 万 m²特殊处理
    re += unit == '万 m²'? unit : (' ' + unit);
    return re
  }
}

export default options