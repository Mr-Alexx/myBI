<template>
  <aside class="left-part">
    <section class="left-top">    
      <box class="left-top-1">
        <general-info></general-info>        
      </box>

      <box class="left-top-2">
        <building-info></building-info>
      </box>

      <box class="left-top-3">
        <parking-info></parking-info>
      </box>

      <box class="left-top-4">
        <operation-condition></operation-condition>
      </box>
    </section>

    <box class="left-bottom">
      <management-charge></management-charge>
    </box>
  </aside>
</template>

<script>
import generalInfo from '@/components/leftPart/generalInfo'
import buildingInfo from '@/components/leftPart/buildingInfo'
import parkingInfo from '@/components/leftPart/parkingInfo'
import managementCharge from '@/components/leftPart/managementCharge'
import operationCondition from '@/components/leftPart/operationCondition'

export default {
  name: 'leftPart',
  components: {
    'general-info': generalInfo,
    'building-info': buildingInfo,
    'management-charge': managementCharge,
    'parking-info': parkingInfo,
    'operation-condition': operationCondition
  }
}
</script>