<template>
    <div class="ButtonQx bg-col-FFFFFF">
        <!-- 按钮 -->
        <div class="flex-row justify-content-around">
            <div class="fn-16 tx-c btn-120">查看更多></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonQx'
  // setup() {
  // },
})
</script>
<style scoped>
    .btn-120{
        width: 2.4rem;
        height: 0.8rem;
        line-height: 0.8rem;
        color:blue;
        /* border: 0.02rem solid blue; */
        border-radius: 0.4rem;
    }
</style>
