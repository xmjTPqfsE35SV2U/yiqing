<template>
    <div class="RealTimeBroadcast">
      <!-- 实时播报 -->
      <div class="">
        <p class="h-32 ln-h-32 padding-l-10 fn-16 fn-w-900 tx-l flex-row align-items-c"><span class="w-4 h-16 bg-col-4169E2 inline-block margin-r-8"></span>实时播报</p>
      </div>
      <div class="padding-t-10 bg-col-F3F3F3">
        <div class="flex-row" v-for="item in infoObj" v-bind:key="item.id">
          <div class="flex-1 relative">
            <p class="fn-12">{{item.pubDateStr}}</p>
            <div class="w-10 h-10 fn-0 yuan">
              <img class="w-100-100 h-100-100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABMRJREFUaAXVWs9rXVUQnjnvPdKmECtoaG0lIVCKG7sQXGlboa3YKuifoRA3unKVP0A3FvTPUNAq1kJ/uSp00W6kFEJCiy2xYC00bXjvnXG+SW56G9+Zc1/euw33bN7NmTkz33d+z5wwjaEcX5A23V86GAK/Jkx7A4UpijIhQTowz5G7FHgtUnzEQg9jlL9o3+zdSwvcG9U9b9fAB/O3J572WrPM7RkFfVABt4eyFbinZO6K9JZ3tftLv549tDZU+w3loQksaG9f+Xv5TYrhiNB6D2/HcbkNE0Yo3jj66szNhSFHpTIBBR7+WFk+LNJ6S6fCZBnAuL516q0y96+/Mz1zS4nEKnYrETj15f093dWn75PwK1WMjqzD8qAzueu381/ve5yzlSWg4Kf7j7un6ur1FECMRmtP57ySWEnpoN4lcPLzO4dij45GiS3PSF2ywKEf2nTl929fv53ykSQA8L1ufC/V8EXWtzvhYorEQAI2bVa7Hw3T8xy4RSKHo4QjanQ/sezVNfOSEWX5V78fCtG9wPEGMd+SKP2qnYCRaE12fho0nf5HAAtW5/wnVec8M0+J0Ic6Gd8mod2VQDE9Ud1rzPSziDyq0mZjTfywdWE/RwBb5eWV5Y8r7TaR23q6nmaSE9qzE1VAbNVR52tCfEEPwV8oSP5U1t3p2PTMj+UtNpSNYp+vAh69ToG+IJIz2wUPv+tt5Qxsmc0ymEHfuo0bxpJskwBOWBxSJVnq80AU+kqFcymFbdTPbdg8kGsLjMBa6G0SwPUgN+9tvhPP69C/XBgY1y9s6nSaz40EMNpVZsOxEcDFDHcbF4zOeV2sn9YBvvBrJNQHYX15RbEaZtUxArhVZi9mumBVf5zTJgVxDptDSoh6YAVmfBsBXInxR6pgWLHbpOTjroev3FQqMIfjWLy4zzsF+/wou41jeqAIvuxsGShdrwRmYA+IpLxgxE5YHFIvuqhP853yiwDKokANA1M6Vq/XA5101U5Y19CQQviEb6cghA2IYR0dHZzM7uQ1HlGW8w3sQe8YU54f3dr2e/I6ZTnfwB60i/17DG6VO1VyvhV7KFIfSYzFlTipUKMg4xvY7RyoEcKIpnVDzRSNLzSl4RUEIztVmFzfwK7rgP2EkkZSO4UfUZzrW7EHvd25EZEO4j3XSI3CnG9gD8hVehgshvUUapTlfAN7sESrB0IDcI13n3gqtcjgE76dAuwBWWJdB8l41LIHGoA7duoRqU83cwHMij0gxY0ssYcC2QM9Ff3F7hkYUgZf8Ok1A2Zgt3MAKW5PGakPyx54SmOUwVcu3VJgNgLIz1uK2wOB1AfRoqcyJtmipVkcY8AKzFAxAva4oPl5p41qSk+H9Xvd2v5x9UYQwjZ8ZHNEirV4ENm8SuBxQU+1Vc8/hlXDvbN1kDDwsJ3J1AEjsBY4db08Kyc+W3qjL/zus5rBX5ZeQfZgfEH+oo1uBjzQtFiuXvhu9s8C2eYIoAIvI5qUfVAIU7/WS5G+0ez8uVF2p/W2fI7UVq7nDYtiM4wlYM+NAOobndwtiDU6vV6QaPQDR5lEY5+YChI2nZr6yFci0dxn1oKE5uSb+9BdkMAvHhca+a8GZRL4buw/e2wlgr+RJd6pf7f5D2ekfj9S76oCAAAAAElFTkSuQmCC" />
            </div>
            <div class="w-1 h-100-100 bg-col-EBEBEB soli"></div>
          </div>
          <div class="flex-3 margin-r-10 margin-b-10">
            <div class="bg-col-FFFFFF tx-l padding-l-10 padding-r-10">
              <div class="fn-16 fn-w-900 padding-t-10 padding-b-10 border-1">{{item.title}}</div>
              <div class="fn-12 tx-l"><p class="ln-h-p">{{item.summary}}</p></div>
              <div class="fn-12 tx-r padding-t-10 padding-b-10">来源：{{item.infoSource}}</div>
            </div>
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
  name: 'RealTimeBroadcast',
  components: {
    ButtonQxVue
  },
  data () {
    return {
      // as 断言处理 该类型已知，无需对其进行判断
      infoObj: [] as any
    }
  },
  methods: {
    getTimelineService () {
      Request.get('data/getTimelineService').then((res:any) => {
        // console.log(res.data)
        this.infoObj.push(res.data[0])
        this.infoObj.push(res.data[1])
        this.infoObj.push(res.data[2])
        this.infoObj.push(res.data[3])
      })
    }
  },
  created () {
    this.getTimelineService()
  }
})
</script>

<style scoped>
  .yuan{
    position: absolute;
    top:0;
    right: 0.1rem;
  }
  .soli{
    position: absolute;
    right: 0.2rem;
  }
  .ln-h-p{
    line-height: 1.5;
  }
  .border-1{
    border-top: 0.02rem solid #F3F3F3;
    border-bottom: 0.02rem solid #F3F3F3;
  }
</style>
