<template>
  <section class="management-charge">
    <my-title title="管理费" class="left-top-header"></my-title>
    
    <section class="left-top-content">
      <section class="management-charge-container">
        <!--表头，滚动时固定-->
        <ul class="charge-standard-table-head">
          <li>费用(元/m²)</li>
          <li>建筑类型</li>
          <li>收费面积(m²)</li>
          <li>入伙户数</li>
          <li>空置户数</li>
        </ul>

        <ul :class="['scroll-content', 'charge-standard-list', {'is-edge': isEdge}]" >
          <li 
            v-for="(items, index) in managementCharge"
            :key="index"
            v-if="managementCharge.length > 0 && !isArea">
            <span 
              v-for="(item, i) in items" 
              :key="i"
              v-if="i == 2">
              {{areaFilter(item.Value)}}
            </span>
            <span v-else>{{item.Value != null? item.Value : '/'}}</span>
          </li>

          <!-- 少于3条信息的补偿方案 -->
          <li 
            v-for="(item, i) in (managementCharge.length < 1? [1, 2, 3] : managementCharge.length < 2? [1, 2] : [1])"
            v-show="!isArea && managementCharge.length < 3"
            :key="i + 'o'">
            <span v-for="(it, id) in [1, 2, 3, 4, 5]" :key="id + 'o'"></span>
          </li>

          <!-- 区域时的信息补偿 -->
          <li 
            v-for="(item, i) in [1, 2, 3]"
            v-show="isArea"
            :key="i">
            <span v-for="(it, id) in [1, 2, 3, 4, 5]" :key="id"></span>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'managementCharge',
  data () {
    return {
      isEdge: false
    }
  },
  computed: {
    ...mapState(['managementCharge', 'isArea'])
  }
}
</script>
