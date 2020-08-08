<template>
  <main class="main">
    <div class="dl-contianer">
      <div class="logo"></div>
      <div class="title"><b>专为菲律宾华人定制的最牛X</b><br><b>的社区工具小菲机下载</b></div>
      <div class="btns">
        <b class="btn purebg" @click="linkTo('android')">Android</b>
        <b class="btn" @click="linkTo('ios')">iOS</b>
      </div>
      <div class="intro">
        <p>完美优化telegram</p>
        <p>旅游、中餐、钱庄汇率</p>
        <p>匿名晒图</p>
        <p class="divline"></p>
        <p>各种telegram群</p>
        <p>...</p>
      </div>
      <div class="linkto">
        <a href="/#/privacy">小菲机信息安全说明</a>
      </div>
    </div>
  </main>
</template>

<script>
/**
* 下载页
*/
import { getdownloadLink } from '../service/ajax'
export default {
  name: 'download',
  data () {
    return {
      linkdata:{}
    }
  },
  mounted () {
    this.init();
  },
  methods:{
    init(){
      document.title = '下载小菲机，享受美好生活。';
      this.getLink();
    },
    async getLink(){
      let res = await getdownloadLink();
      if(res.code === 0) {
        this.linkdata = res.data;
      }
    },
    linkTo(type){
      if(type === 'android') {
        window.location.href = this.linkdata.android_download_url;
      } else {
        window.location.href = this.linkdata.ios_download_url;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(../assets/bg.png);
  background-size: cover;
  .dl-contianer{
    position: relative;
    padding-top: 40px;
    width: 100%;
    height: 100%;
    .logo{
      width: 90px;
      height: 90px;
      background-image: url(../assets/logo.png);
      background-size: cover;
      margin: 0 auto;
    }
    .title{
      margin:0 6%;
      margin-top: 30px;
      padding-bottom: 23px;
      border-bottom: 1px solid #f4f4f4;
      font-size: 20px;
      text-align: center;
    }
    .btns{
      text-align: center;
      margin: 29px 0;
      .btn{
        width: 38.7%;
        height: 45px;
        line-height: 45px;
        display: inline-block;
        text-align: center;
        color: #5a8ff7;
        border:1px solid #5a8ff7;
        border-radius: 5px;
        &:active{
          background-color: #5a8ff7;
          color: #fff;
        }
        &.purebg{
          color: #fff;
          background-color: #5a8ff7;
          margin-right: 30px;
          &:active{
            background-color: #fff;
            color: #5a8ff7;
          }
        }
      }
    }
    .intro{
      text-align: center;
      color: #b8b8b8;
      font-size: 18px;
      line-height: 40px;
      .divline{
        border:1px solid #f4f4f4;
        margin:0 6%;
      }
    }
    .linkto{
      position: absolute;
      right: 6%;
      bottom: 10px;
      font-size: 14px;
      a{
        color: #2c60c6;
        text-decoration: underline;
        &:active{
          color: #4184df;
        }
      }
    }
  }
}
</style>
