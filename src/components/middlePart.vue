<template>
  <section class="middle-part">
    <!-- 中上部分 -->
    <section class="middle-top">
      <box class="middle-top-top">区域选择</box>
      <box class="middle-top-bottom">项目选择</box>
    </section>

    <!-- 中下部分 -->
    <section class="middle-bottom">
      <header class="middle-bottom-top">地图等tab选择</header>
      <section class="middle-bottom-bottom">
        <ul class="box tab-control-content">
          <li>
            <bmap></bmap>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
import bmap from '@/components/map'

export default {
  name: 'middlePart',
  components: {
    bmap
  }
}
</script>