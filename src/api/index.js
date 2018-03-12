import axios from 'axios'

const api = {
  // url: 'http://192.168.199.32:9002/api/BI/', // 测试
  // url: 'http://192.168.199.32:8002/api/BI/', // 正试
  url: 'http://139.199.63.89:8050/api/BI/', // 外网

  baseConfig: {
    method: 'POST',
    url: ''
  },

  // 首页年度/季度/月度
  getIncome_NewestMonth: 'GetIncome_NewestMonth_AllItem', // 月度收入
  getIncome_NewestQuarter: 'GetIncome_NewestQuarter_AllItem', // 季度收入
  getIncome_NewestYear: 'GetIncome_NewestYear_AllItem', // 年度收入
  getOutlay_NewestMonth: 'GetOutlay_NewestMonth_AllItem', // 月度支出
  getOutlay_NewestQuarter: 'GetOutlay_NewestQuarter_AllItem', // 季度支出
  getOutlay_NewestYear: 'GetOutlay_NewestYear_AllItem', // 年度支出

  // 首页获取收入/支出数据
  getMainIncomeOutpay (obj, callback) {
    let postData = this.makeUpPostData(obj)
    let url1 = this.url, url2 = this.url, _this = this
    // 月/季/年分开处理
    if (obj.timeType === '月度') {
      url1 += this.getIncome_NewestMonth
      url2 += this.getOutlay_NewestMonth
    } else if (obj.timeType === '季度') {
      url1 += this.getIncome_NewestQuarter
      url2 += this.getOutlay_NewestQuarter
    } else {
      url1 += this.getIncome_NewestYear
      url2 += this.getOutlay_NewestYear
    }

    axios.all([_this.getData(url1, postData), _this.getData(url2, postData)])
      .then(axios.spread(function (incomeData, outpayData) {
        // 两个请求现在都执行完成
        callback(incomeData.data.Data, outpayData.data.Data)
      }))
  },

  getData (url, postData) {
    return axios.post(url, postData)
  },
  
  // 构造post数据
  makeUpPostData (obj) {
    let re = {}, data = {}
    // 构造id
    let areaType = obj.areaType === 'area'? 'AreaId' : 'ProjectId'
    data[areaType] = obj.id
    // 构造起始时间
    if (obj.startDate && obj.endDate) {
      data.StartDate = obj.startDate
      data.EndDate = obj.endDate
    }
    // 构造区域类型
    if (obj.projectType) {
      data.ProjectTypes = obj.projectType
    }
    // 构造在管/代管类型
    if (obj.aloneType) {
      data.AloneType = obj.aloneType
    }
    re.Data = JSON.stringify(data)
    return re
  }
}

export default api