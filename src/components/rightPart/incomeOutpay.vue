<template>
  <section class="right-top">
    <section class="right-top-top">
      <header :class="['right-top-title', {'danger': state.currentData.profit < 0}]"
        v-text="'利润: ' + state.currentData.profit">
      </header>
      
      <section class="right-top-chart">
        <box class="right-chart">
          <my-title 
            :title="'收入分析(总收入: ' + state.currentData.income.total + ')'" 
            hasMore=true>

          </my-title>

          <section class="chart">
            <section class="full-container" id="income"></section>
          </section>
        </box>

        <box class="right-chart">
          <my-title 
            :title="'支出分析(总支出: ' + state.currentData.outpay.total + ')'" 
            hasMore=true>
          </my-title>

          <section class="chart">
            <section class="full-container" id="outpay"></section>
          </section>
        </box>
      </section>
    </section>

    <footer class="right-top-bottom">
      <el-radio-group v-model="time" size="mediumn" @change="changeTime">
        <el-radio-button label="月度"></el-radio-button>
        <el-radio-button label="季度"></el-radio-button>
        <el-radio-button label="年度"></el-radio-button>
      </el-radio-group>

      <el-button type="info">
        对比
        <i class="el-icon-search el-icon--right"></i>
      </el-button>
    </footer>
  </section>
</template>

<script>

export default {
  name: 'incomeOutpay',
  data () {
    return {
      state: this.$store.state,
      time: '月度'
    }
  },
  mounted () {
    this.$.changeTimeType('月度')
  },
  methods: {
    changeTime () {
      return this.$.changeTimeType(this.time)
    },

  }
}
</script>
