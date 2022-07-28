<template>
    <div class="DiseaseKnowledge">
        <!-- 疾病知识 -->
        <div>
            <p class="h-32 ln-h-32 padding-l-10 fn-16 fn-w-900 tx-l flex-row align-items-c"><span class="w-4 h-16 bg-col-4169E2 inline-block margin-r-8"></span>疾病知识</p>
        </div>
        <!-- content -->
        <div class="padding-l-10 padding-r-10">
            <div class="tx-l">
                <div class="border-1 padding-t-10 padding-b-10 padding-l-5 padding-r-5">
                    <div>
                        <p class="fn-16">{{ title==null ? '0': title.title}}</p>
                    </div>
                    <div>
                        <p class="fn-12">{{title.description}}</p>
                    </div>
                    <div class="fn-0 flex-row justify-content-end"><span class="fn-12 col-4169E2">查看详情</span></div>
                </div>
                <!-- List -->
                <div class="">
                    <div class="flex-row margin-t-10 padding-t-10 padding-b-10 padding-l-5 padding-r-5 border-1" v-for="item in wikiListObj" v-bind:key="item.id">
                        <div class="flex-1">
                            <img class="w-100-100" :src=item.imgUrl />
                        </div>
                        <div class="flex-3 margin-l-10">
                            <div>
                                <p class="fn-16">{{item.title}}</p>
                            </div>
                            <div>
                                <p class="fn-12">{{item.description}}</p>
                            </div>
                            <div class="fn-0 flex-row justify-content-end">
                                <span class="fn-12 col-4169E2">查看详情</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Request from '@/assets/js/Request'

export default defineComponent({
  name: 'DiseaseKnowledge',
  data () {
    return {
      title: {} as any,
      wikiListObj: [] as any
    }
  },
  methods: {
    getWikiList () {
      Request.get('data/getWikiList').then((res:any) => {
        this.title = res.data.result[0]
        // console.log(res.data.result[0])
        this.wikiListObj.push(res.data.result[1])
        this.wikiListObj.push(res.data.result[2])
        this.wikiListObj.push(res.data.result[3])
        this.wikiListObj.push(res.data.result[4])
        console.log(this.wikiListObj)
        // res.data.result.forEach((e:any) => {
        //   this.title = this.title + e.title
        // })
        // console.log(this.title)
        // console.log(res.data.result)
      })
    }
  },
  created () {
    this.getWikiList()
  }
  // setup() {
  // },
})
</script>
<style scoped>
    .border-1{
        border: 0.02rem solid #F3F3F3;
        box-shadow: 0 0 0.02rem #F3F3F3;
    }
</style>
