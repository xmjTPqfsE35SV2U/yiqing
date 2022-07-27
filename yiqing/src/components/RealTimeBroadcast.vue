<template>
    <div class="RealTimeBroadcast">
        <!-- 实时播报 -->
        <div>
        <p class="padding-l-10 fn-16 fn-w-900 tx-l flex-row align-items-c"><span class="w-4 h-16 bg-col-4169E2 inline-block margin-r-8"></span>实时播报</p>
        </div>
        <div>
        <div class="flex-row">
            <div>
                <p></p>
            </div>
            <div></div>
        </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Request from '@/assets/js/Request'

export default defineComponent({
  name: 'RealTimeBroadcast',
  methods: {
    getTimelineService () {
      Request.get('data/getTimelineService').then((res:any) => {
        console.log(res)
      })
    }
  },
  created () {
    this.getTimelineService()
  }
})
</script>
