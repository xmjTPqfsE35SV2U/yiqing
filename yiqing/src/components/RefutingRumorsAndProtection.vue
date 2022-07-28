<template>
    <div class="RefutingRumorsAndProtection">
        <div>
            <p class="h-32 ln-h-32 padding-l-10 fn-16 fn-w-900 tx-l flex-row align-items-c"><span class="w-4 h-16 bg-col-4169E2 inline-block margin-r-8"></span>辟谣与防护</p>
        </div>
        <!-- List -->
        <div class="padding-l-10 padding-r-10 padding-b-10">
            <div class="bg-col-2834B9 margin-t-10 tx-l border-r-5 padding-t-10 padding-b-10 padding-l-10 padding-r-10" v-for="item in RefutingRumorsObj" v-bind:key="item.id">
                <div>
                    <p class="fn-16 col-FFFFFF">{{item.title}}</p>
                </div>
                <div class="bg-col-FFFFFF border-r-5 margin-t-10 padding-5">
                    <p class="fn-12 text-indent-2">{{item.body}}</p>
                </div>
            </div>
        </div>
        <!-- 按钮 -->
        <ButtonQxVue></ButtonQxVue>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Request from '@/assets/js/Request'
import ButtonQxVue from './ButtonQx.vue'

export default defineComponent({
  name: 'RefutingRumorsAndProtection',
  components: {
    ButtonQxVue
  },
  data () {
    return {
      RefutingRumorsObj: [] as any
    }
  },
  methods: {
    getIndexRumorList () {
      Request.get('data/getIndexRumorList').then((res:any) => {
        this.RefutingRumorsObj.push(res.data[0])
        this.RefutingRumorsObj.push(res.data[1])
        this.RefutingRumorsObj.push(res.data[2])
        this.RefutingRumorsObj.push(res.data[3])
        // console.log(res)
      })
    }
    // Request.get()
  },
  created () {
    this.getIndexRumorList()
  }
})
</script>
<style scoped>
  .padding-5{
      padding: 0.1rem;
  }
</style>
