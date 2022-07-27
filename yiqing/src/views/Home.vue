<template>
  <div class="home">
    <div>
      <img class="w-100-100 h-100-100" src="https://assets.dxycdn.com/gitrepo/bbs-mobile/dist/static/kv.5d3a3a1d.png" />
    </div>
    <!-- title -->
    <div>
      <p class="col-FF0000 fn-18">武汉2019-nCoV疫情实时情况</p>
      <p class="fn-16">武汉加油！中国加油！</p>
    </div>
    <!-- navTop -->
    <div>
      <ul class="fn-16 flex-row fn-w-900 justify-content-around">
        <li>疫情地图</li>
        <li>实时播报</li>
        <li>辟谣与防护</li>
        <li>疾病知识</li>
      </ul>
    </div>
    <!--  -->
    <div>
      <p class="fn-12 tx-l padding-l-10">截至2022-10-10 19:00:00 全国数据统计：</p>
    </div>
    <div class="flex-row justify-content-around">
      <div>
        <p class="fn-16">{{count_yq.tx1}}</p>
        <p class="fn-12">确诊病例</p>
      </div>
      <div>
        <p class="fn-16">{{count_yq.tx2}}</p>
        <p class="fn-12">疑似病例</p>
      </div>
      <div>
        <p class="fn-16">{{count_yq.tx3}}</p>
        <p class="fn-12">死亡人数</p>
      </div>
      <div>
        <p class="fn-16">{{count_yq.tx4}}</p>
        <p class="fn-12">治愈人数</p>
      </div>
    </div>
    <!-- 疫情信息 -->
    <div class="fn-12 tx-l padding-l-10">
      <p>{{information_bindu.note1}}</p>
      <p>{{information_bindu.note2}}</p>
      <p>{{information_bindu.note3}}</p>
      <p>{{information_bindu.remark1}}</p>
      <p>{{information_bindu.remark2}}</p>
    </div>
    <!-- 疫情地图 -->
    <div>
      <div class="fn-16">疫情地图</div>
      <div>
        <img class="w-100-100 h-100-100" src="http://49.232.173.220:3001/images/distribution-nationale.png?time=1658825991077"/>
      </div>
    </div>
    <!-- 实时播报 -->
    <RealTimeBroadcastVue></RealTimeBroadcastVue>
  </div>
</template>

<script lang='ts'>
// 项目使用别名进行模块导入
import Request from '@/assets/js/Request'
import RealTimeBroadcastVue from '@/components/RealTimeBroadcast.vue'
import { defineComponent } from 'vue'

// const url =
export default defineComponent({
  name: 'Home',
  data () {
    return {
      count_yq: {
        tx1: null,
        tx2: null,
        tx3: null,
        tx4: null
      },
      information_bindu: {
        note1: '',
        note2: '',
        note3: '',
        remark1: '',
        remark2: ''
      }
    }
  },
  components: {
    RealTimeBroadcastVue
  },
  methods: {
    getStatisticsService () {
      Request.get('data/getStatisticsService').then((res:any) => {
        // console.log(res.data)
        this.count_yq.tx1 = res.data.curedCount
        this.count_yq.tx2 = res.data.curedIncr
        this.count_yq.tx3 = res.data.deadCount
        this.count_yq.tx4 = res.data.deadIncr
        // 信息
        this.information_bindu.note1 = res.data.note1
        this.information_bindu.note2 = res.data.note2
        this.information_bindu.note3 = res.data.note3
        this.information_bindu.remark1 = res.data.remark1
        this.information_bindu.remark2 = res.data.remark2
      })
    }
  },
  setup () {
    // this.getStatisticsService()
  },
  created () {
    this.getStatisticsService()
  }
})

</script>
