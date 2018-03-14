<template>
  <section class="right-top">
    <section class="right-top-top">
      <header :class="['right-top-title', {'danger': $store.state.currentData.profit < 0}]"
        v-text="'利润: ' + $store.state.currentData.profit">
      </header>
      
      <section class="right-top-chart">
        <box class="right-chart">
          <my-title 
            :title="'收入分析(总收入: ' + $store.state.currentData.totalIncome + ')'" 
            hasMore=true>

          </my-title>

          <section class="chart">
            <section class="full-container" id="income"></section>
          </section>
        </box>

        <box class="right-chart">
          <my-title 
            :title="'支出分析(总支出: ' + $store.state.currentData.totalOutpay + ')'" 
            hasMore=true>
          </my-title>

          <section class="chart">
            <section class="full-container" id="outpay"></section>
          </section>
        </box>
      </section>
    </section>

    <footer class="right-top-bottom">
      <el-radio-group v-model="$store.state.currentData.mainTimeType" size="mediumn" @change="changeIncomeOutpay">
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
import { mapActions } from 'vuex'

export default {
  name: 'incomeOutpay',
  data () {
    return {
    }
  },
  mounted () {
    // this.$.changeTimeType()
    this.changeIncomeOutpay()
  },
  methods: {
    changeTime () {
      return this.changeTimeType()
    },
    ...mapActions([
      'changeIncomeOutpay'
    ])
  }
}
</script>
