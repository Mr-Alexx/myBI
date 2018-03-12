<template>
  <section class="operation-condition">
    <my-title title="经营状况" class="left-top-header"></my-title>

    <section class="left-top-content">
      <table>
        <tr>
          <td>收费率</td>
          <td>应收管理费</td>
          <td>人均管理面积</td>
        </tr>
        <tr>
          <td 
            v-for="(item, index) in operationCondition" 
            :key="index" 
            v-if="operationCondition.length > 0 && index != 1">
            {{$.formatFilter(item.Value, item.Unit)}}
          </td>
          <td v-else-if="operationCondition.length > 0 && index == 1" >
            {{$.formatFilter(item.Value, item.Unit, 2)}}
          </td>
        </tr>
      </table>
    </section>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex' // mapState可以将$store.state映射成this

export default {
  name: 'operationCondition',
  computed: {
    ...mapState(['operationCondition'])
  },
}
</script>