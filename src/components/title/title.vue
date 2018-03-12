<template>
  <h5 class="my-title">
    <span v-text="title" class="title-content"></span>
    <span v-if="type === 'generalInfo'" class="project-contact">
      项目负责人: {{prjManager}}
      &nbsp;
      联系电话: {{phoneNum}}
    </span>
    <span v-if="hasMore" class="check-detail">查看详情</span>
    <!-- <el-button 
      type="warning" size="small" 
      v-if="hasMore" round 
      class="check-detail">
      查看详情
    </el-button> -->
  </h5>
</template>

<script>
export default {
  name: 'myTitle',
  // 接收来自调用组件的值
  props: ['title', 'prjManager', 'phoneNum', 'type', 'hasMore']
}
</script>
