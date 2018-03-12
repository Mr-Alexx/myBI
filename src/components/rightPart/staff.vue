<template>
  <box class="right-bottom">
    <my-title title="人员结构" hasMore=true></my-title>

    <section class="staff-chart" id="staff"></section>
  </box>
</template>

<script>
  export default {
    name: 'staff',
    mounted () {
      this.$.$echarts('staff', this.$.options.singleBar)
    }
  }
</script>