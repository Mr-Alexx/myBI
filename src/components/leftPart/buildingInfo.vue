<template>
  <section class="building-info">
    <my-title 
      :title="'建筑物栋数: ' + $.valFilter(buildingInfo[0].Value) + ' 栋'" 
      class="left-top-header"></my-title>

    <section class="left-top-content">
      <table>
        <tbody>
          <tr rowspan="2">
            <td>
              {{buildingInfo[3].Name || '行人出入口'}} <br>
              {{formatFilter(buildingInfo[3].Value, '个')}}
            </td>
            <td>
              {{buildingInfo[4].Name || '停车场出入口'}} <br>
              {{formatFilter(buildingInfo[4].Value, '个')}}
            </td>
            <td>
              {{buildingInfo[2].Name || '会所'}} <br>
              {{formatFilter(buildingInfo[2].Value, '个')}}
            </td>
          </tr>

          <tr>
            <td>
              <p>电梯总数</p>
              <p>{{formatFilter(buildingInfo[1].Value, '部')}}</p>
            </td>
            <td colspan="2" class="special">
              <em 
                v-for="(item, i) in buildingInfo[1].Children"
                :key="i">
                <span>
                  {{item.Name}} <br>
                  {{formatFilter(item.Value, '部')}}
                </span>
              </em>
            </td>
          </tr>

          <!-- <tr>
            <td>建筑物栋数</td>
            <td colspan="3">
              {{formatFilter(buildingInfo[0].Value, '栋')}}
            </td>
          </tr> -->
        </tbody>
      </table>
    </section>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex' // mapState可以将$store.state映射成this

export default {
  name: 'buildingInfo',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['buildingInfo'])
  },
  methods: {
    formatFilter (value, unit, decemial) {
      return this.$.formatFilter(value, unit, decemial)
    }
  }
}
</script>
