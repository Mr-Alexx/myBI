<template>
  <section class="gaikuang-info">
    <my-title 
      title="概况"
      type="generalInfo"
      prjManager="梁经理"
      phoneNum="17688877891"
      class="left-top-header">
    </my-title>

    <section class="left-top-content">
      <ul :class="{'prj-gaikuang-list': generalInfo.length <= 1}">
        <li></li>
        <!--概况列表标题--根据项目类型动态显示住宅/商写/前期户数-->
        <li 
          v-for="(item, index) in generalInfo[0].AttrData"
          :key="index">
          {{index == 7? !isArea? generalInfo[0].ProjectType + '户数' : '住宅/商写户数' : item.Name}}
        </li>
      </ul>
      <!--概况数据-->
      <ul 
        v-for="(items, i) in generalInfo"
        :key="i"
        :class="{'prj-gaikuang-list': generalInfo.length <= 1}">
        <li>
          {{items.ProjectType}}
          {{isArea? ('(' + items.ProjectCount + '个)') : ''}}
        </li>
        <!-- 区域是km² -->
        <li v-for="(item, index) in items.AttrData"
            :key="index"
            v-if="isArea">
          {{formatter(item.Value, item.Unit)}}
        </li>
        <!-- 项目是m² -->
        <li v-else>
          {{formatter(item.Value, item.Unit)}}
        </li>
      </ul>
    </section>
  </section>

</template>

<script>
import {mapState, mapMutations} from 'vuex' // mapState可以将$store.state映射成this

export default {
  name: 'generalInfo',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['generalInfo', 'isArea'])
  },
  methods: {
    formatter (value, unit) {
      // 如果单位是面积的
      if (unit.match(/m/)) {
        return this.$.areaFilter(value)
      } else {
        return this.$.formatFilter(value, unit)
      }
    }
  }
}
</script>
