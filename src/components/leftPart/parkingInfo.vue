<template>
  <section class="parking-info">
    <my-title :title="'停车场: ' + $.formatFilter(parkingInfo[0].Value, '个')" 
      class="left-top-header"></my-title>
    
    <section class="left-top-content">
      <table>
        <tr class="special">
          <td></td>
          <td 
            v-for="(item, i) in parkingInfo[0].Children[0].Children"
            :key="i">
            {{item.Name}}
          </td>
        </tr>

        <tr 
          v-for="(items, index) in parkingInfo[0].Children" 
          :key="index" 
          v-if="index < 2">
          <td>{{items.Name}}</td>
          <td 
            v-for="(item, i) in items.Children"
            :key="i">
            {{$.formatFilter(item.Value, '个')}}
          </td>
        </tr>

        <tr>
          <td>停车位总数</td>
          <td colspan="3">
            {{$.formatFilter(parkingInfo[0].Value, '个')}}
          </td>
        </tr>

        <tr>
          <td colspan="4" class="special"> 
            <span>当天收入 : /</span>
            <span v-if="parkingInfo[1]">
              收费口 : {{$.formatFilter(parkingInfo[1].Value, '个')}}
            </span>
            <span class="special" v-if="parkingInfo[0].Children[2]">
              机械车位 : {{$.formatFilter(parkingInfo[0].Children[2].Value, '个')}}
            </span>
          </td>      
        </tr>
      </table>
    </section>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex' // mapState可以将$store.state映射成this

export default {
  name: 'parkingInfo',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['parkingInfo'])
  },
}
</script>
