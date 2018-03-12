<template>
  <section class="right-top">
    <box class="right-top-top">
      <my-title title="收入分析" hasMore=true></my-title>

      <section class="chart">
        <section class="full-container" id="income"></section>
      </section>
    </box>
  </section>
</template>

<script>
export default {
  name: 'income',
  data () {
    return {
      time: '月度'
    }
  },
  mounted () {
    this.$.$echarts('income', this.$.options.singleBar)
  },
  methods: {
    changeTime (type) {
      return this.$.changeTimeType(type)
    }
  }
}
</script>
