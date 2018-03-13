const state = {
  showContextmenu: false, // 控制右键菜单显示隐藏
  isArea: true, // 判断当前是区域还是项目
  generalInfo: [ // 概况信息
    {
      ProjectType: '住宅',
      EarlyStageCount: 0,
      ProjectCount: 0,
      AttrData: [
        {Name: '总建筑面积', Value: 0, Unit: 'm²'},
        {Name: '新增面积', Value: 0, Unit: 'm²'},
        {Name: '收费面积', Value: 0, Unit: 'm²'},
        {Name: '绿化面积', Value: 0, Unit: 'm²'},
        {Name: '清洁面积', Value: 0, Unit: 'm²'},
        {Name: '总户数', Value: 0, Unit: '户'},
        {Name: '商铺户数', Value: 0, Unit: '户'},
        {Name: '住宅/商写户数', Value: 0, Unit: '户'},
        {Name: '常住户数', Value: 0, Unit: '户'},
      ]
    },
    {
      ProjectType: '商写',
      EarlyStageCount: 0,
      ProjectCount: 0,
      AttrData: [
        {Name: '总建筑面积', Value: 0, Unit: 'm²'},
        {Name: '新增面积', Value: 0, Unit: 'm²'},
        {Name: '收费面积', Value: 0, Unit: 'm²'},
        {Name: '绿化面积', Value: 0, Unit: 'm²'},
        {Name: '清洁面积', Value: 0, Unit: 'm²'},
        {Name: '总户数', Value: 0, Unit: '户'},
        {Name: '商铺户数', Value: 0, Unit: '户'},
        {Name: '住宅/商写户数', Value: 0, Unit: '户'},
        {Name: '常住户数', Value: 0, Unit: '户'},
      ]
    },
    {
      ProjectType: '前期项目',
      EarlyStageCount: 0,
      ProjectCount: 0,
      AttrData: [
        {Name: '总建筑面积', Value: 0, Unit: 'm²'},
        {Name: '新增面积', Value: 0, Unit: 'm²'},
        {Name: '收费面积', Value: 0, Unit: 'm²'},
        {Name: '绿化面积', Value: 0, Unit: 'm²'},
        {Name: '清洁面积', Value: 0, Unit: 'm²'},
        {Name: '总户数', Value: 0, Unit: '户'},
        {Name: '商铺户数', Value: 0, Unit: '户'},
        {Name: '住宅/商写户数', Value: 0, Unit: '户'},
        {Name: '常住户数', Value: 0, Unit: '户'},
      ]
    }
  ],
  buildingInfo: [ // 建筑物信息
    {Name: '建筑栋数', Value: 0, Unit: '栋'},
    {Name: '电梯', Value: 0, Unit: '个', Children: [
      {Name: '客梯', Value: 0, Unit: '个'},
      {Name: '货梯', Value: 0, Unit: '个'},
      {Name: '自动扶梯', Value: 0, Unit: '个'},
    ]},
    {Name: '会所', Value: 0, Unit: '个'},
    {Name: '行人出入口', Value: 0, Unit: '个', Children: [
      {Name: '前后正门出入口', Value: 0, Unit: '个'},
      {Name: '侧门正门出入口', Value: 0, Unit: '个'},
    ]},
    {Name: '停车场出入口', Value: 0, Unit: '个'},
    {Name: '临时停车场出入口', Value: 0, Unit: '个'},
  ],
  parkingInfo: [ // 总停车位
    {
      Name: '总停车车位',
      Unit: '个',
      Value: '0',
      Children: [{
        Name: '地下车位',
        Children: [{Value: 0, Name: '产权车位'}, {Value: 0, Name: '自划线车位  '}, {Value: 0, Name: '专有车位'}]
        },
        {
          Name: '地面车位',
          Children: [{Value: 0, Name: '产权车位'}, {Value: 0, Name: '自划线车位'}, {Value: 0, Name: '专有车位'}]
        },
        {
          Name: '机械车位',
          Value: 0
        }
      ]
    },
    {
      Name: '收费口',
      Value: 0
    }
  ],
  operationCondition: [
    {Name: "收费率", Unit: "%", Value: null},
    {Name: "应收管理费", Unit: "万元/年", Value: null},
    {Name: "人均管理面积", Unit: "㎡", Value: null}
  ],
  managementCharge: [], // 管理费
  currentData: { // 用于保存当前共用的数据
    ajaxId: '',
    profit: 0, // 利润
    income: {
      startDate: '',
      endDate: '',
      title: '',
      total: 0 // 总收入
    },
    outpay: {
      startDate: '',
      endDate: '',
      title: '',
      total: 0 // 总支出
    },
    startDate: '',
    endDate: '',
    Time: '', // xx年xx月 / xx年 / xx年xx季度
  },
  mainTimeType: '月度', // 首页的支出/收入 时间类型
  themes: { // 主题
    zhuguangRed: {
      singleBar: ['#801620'],
      doubleBar: ['#E7BB70', '#801620']
    }
  },
  currentTheme: 'zhuguangRed'
}

export default state