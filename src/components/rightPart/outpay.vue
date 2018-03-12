<template>
  <section class="right-middle">
    <box class="right-middle-top">
      <my-title title="支出分析" hasMore=true></my-title>

      <section class="chart">
        <section class="full-container" id="outpay"></section>
      </section>
    </box>
    <footer class="right-middle-bottom">
      <el-radio-group v-model="time" size="mediumn">
        <el-radio-button label="月度"></el-radio-button>
        <el-radio-button label="季度"></el-radio-button>
        <el-radio-button label="年度"></el-radio-button>
      </el-radio-group>

      <el-button type="info">
        支出对比
        <i class="el-icon-search el-icon--right"></i>
      </el-button>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'outpay',
  data () {
    return {
      time: '月度'
    }
  },
  mounted () {
    this.$.$echarts('outpay', this.$.options.singleBar)
  }
}
</script>
