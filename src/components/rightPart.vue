<template>
  <aside class="right-part">
    <!-- 右上部分 -->
    <!-- <income></income> -->

    <!-- 右中部分 -->
    <!-- <outpay></outpay> -->

    <!-- 收支部分 -->
    <income-outpay></income-outpay>

    <!-- 右下部分 -->
    <staff></staff>
  </aside>
</template>

<script>
// import income from '@/components/rightPart/income'
// import outpay from '@/components/rightPart/outpay'
import incomeOutpay from '@/components/rightPart/incomeOutpay'
import staff from '@/components/rightPart/staff'

export default {
  name: 'rightPart',
  components: {
    // income,
    // outpay,
    staff,
    'income-outpay': incomeOutpay
  }
}
</script>