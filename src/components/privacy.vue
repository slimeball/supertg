<template>
  <main class="main">
    <b class="title">{{resdata.title}}</b>
    <pre class="content">{{resdata.content}}</pre>
  </main>
</template>

<script>
/**
* 安全协议页
*/
import { getPrivacy } from '../service/ajax'
export default {
  name: 'privacy',
  data () {
    return {
      resdata:{}
    }
  },
  mounted () {
    this.init();
  },
  methods:{
    init(){
      document.title = '安全协议';
      this.getContent();
    },
    async getContent(){
      let res = await getPrivacy();
      if(res.code === 0) {
        this.resdata = res.data;
      }
    }
  }
}
</script>
<style type="text/css">
  body{
    background-color: #fff;
  }
</style>
<style lang="scss" scoped>
.main{
  padding: 50px 16px 30px;
  .title{
    text-align: center;
    font-size: 18px;
    display: block;
    margin-bottom: 20px;
  }
  .content{
    font-size:16px;
    white-space: pre-wrap;
  }
}
</style>
