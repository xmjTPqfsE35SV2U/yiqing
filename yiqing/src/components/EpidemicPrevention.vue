<template>
    <div class="EpidemicPrevention">
        <!-- 防疫知识合集 -->
        <div>
            <p class="h-32 ln-h-32 padding-l-10 fn-16 fn-w-900 tx-l flex-row align-items-c"><span class="w-4 h-16 bg-col-4169E2 inline-block margin-r-8"></span>防疫知识合集</p>
        </div>
        <!-- List -->
        <div class="padding-l-10 padding-r-10">
            <div class="flex-row tx-l" v-for="item in RecommendListObj" v-bind:key="item.id">
                <div class="flex-3">
                    <div>
                        <p class="fn-14">{{item.title}}</p>
                    </div>
                    <div>
                        <p class="fn-12">{{getIndexRecommendTime(item.createTime)}}</p>
                    </div>
                </div>
                <div class="flex-1 padding-l-10 padding-r-10">
                    <img class="w-100-100 border-r-10" :src='item.imgUrl' />
                </div>
            </div>
        </div>
        <!-- 按钮 -->
        <ButtonQxVue></ButtonQxVue>
        <!-- <div class="flex-row justify-content-around bg-col-F3F3F3">
            <div class="fn-16 tx-c btn-120">查看更多</div>
        </div> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Request from '@/assets/js/Request'
import ButtonQxVue from './ButtonQx.vue'

export default defineComponent({
  name: 'EpidemicPrevention',
  components: {
    ButtonQxVue
  },
  data () {
    return {
      RecommendListObj: [] as any
    }
  },
  methods: {
    getIndexRecommendList () {
      Request.get('data/getIndexRecommendList').then((res:any) => {
        this.RecommendListObj.push(res.data[0])
        this.RecommendListObj.push(res.data[1])
        this.RecommendListObj.push(res.data[2])
        this.RecommendListObj.push(res.data[3])
        this.getIndexRecommendTime(res.data[3].createTime)
        // console.log(res.data)
      })
    },
    getIndexRecommendTime (time: number):string {
      const data = new Date(time)
      // console.log(data)
      const y = data.getFullYear()
      const m = (data.getMonth() + 1 + '').padStart(2, '0')
      const d = (data.getDate() + '').padStart(2, '0')
      return y + '-' + m + '-' + d
      //   console.log(y + '-' + m + '-' + d)
    }
  },
  created () {
    this.getIndexRecommendList()
  }
//   setup () {
//   }
})
</script>
