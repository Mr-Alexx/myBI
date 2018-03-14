<template>
  <section class="zhuGuangRed full-page container">
    <!-- 左边部分 -->
    <left-part></left-part>

    <!-- 中间部分 -->
    <middle-part></middle-part>

    <!-- 右边部分 -->
    <right-part></right-part>
  </section>
</template>

<script>
import leftPart from '@/components/leftPart'
import middlePart from '@/components/middlePart'
import rightPart from '@/components/rightPart'

export default {
  name: 'index',
  components: {
    'left-part': leftPart,
    'middle-part':middlePart,
    'right-part': rightPart
  },
  data () {
    return {
      
    }
  },
  mounted () {
    
  },
  methods: {
  }
}
</script>
