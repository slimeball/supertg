<template>
  <main class="main">
    <section class="beacon">
      <div class="logo"></div>
    </section>
    <h1 class="page-title">{{resdata.title}}</h1>
    <section class="name-container clearfix">
      <div class="info">
        <i class="avatar fl-l"><img :src="resdata.user_profile_pic"></i>
        <div class="name-sendtime fl-l">
          <p class="name">{{resdata.user_nickname}}</p>
          <p class="sendtime">{{resdata.update_time | formatDate}}</p>
        </div>
      </div>
      <div class="btn fl-r" @click="toGroup()">小菲机群链接</div>
    </section>
    <section class="share-content clearfix">
      <div class="article" v-html="resdata.content"></div>
      <figure class="albums">
        <img v-for="(item, index) in resdata.images" :key="index" :src="item">
      </figure>
      <p class="shareto fl-r" @click="copyUrl()"><a href="javascript:void(0)">分享链接到其他群</a></p>
    </section>
    <section class="downloadtext">
      <h2 class="dlt-title">专为菲律宾华人定制的最牛逼的社区工具小菲机下载</h2>
      <article class="dlt-content">优化telegram；旅游、中餐、钱庄汇率；匿名晒图；各种telegram群...</article>
    </section>
    <div class="dl-btn" @click="toDownload()">立即下载</div>
  </main>
</template>

<script>
/**
* 分享页
*/
import { getShare } from '../service/ajax'
export default {
  name: 'sharepage',
  data () {
    return {
      resdata:{}
    }
  },
  filters: {
    formatDate: function (timestamp) {
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - timestamp;
      if(diffValue < 0){return;}
      var monthC =diffValue/month;
      var weekC =diffValue/(7*day);
      var dayC =diffValue/day;
      var hourC =diffValue/hour;
      var minC =diffValue/minute;
      let result = "";
      if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
      }
      else if(weekC>=1){
        result="" + parseInt(weekC) + "周前";
      }
      else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
      }
      else if(hourC>=1){
        result=""+ parseInt(hourC) +"小时前";
      }
      else if(minC>=1){
        result=""+ parseInt(minC) +"分钟前";
      }else
      result="刚刚";
      return result;
    }
  },
  mounted () {
    this.init();
  },
  methods:{
    init(){
      document.title = '分享小菲机，让小伙伴一起嗨起来。';
      this.getContent();
    },
    async getContent(){
      let sendData = {id: this.$route.params.id};
      let res = await getShare(sendData);
      if(res.code === 0) {
        this.resdata = res.data;
      }
    },
    toDownload(){
      this.$router.push({path: '/download'})
    },
    toGroup(){
      window.location.href= this.resdata.xfj_group;
    },
    copyUrl() {
      let url = window.location.href;
      const input = document.createElement('input');
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', url);
      document.body.appendChild(input);
      input.setSelectionRange(0, 9999);
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        alert('复制链接成功');
      }
      document.body.removeChild(input);
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
  padding: 0 4.3%;
  padding-bottom: 20px;
  .beacon{
    margin-top: 7px;
    .logo{
      width: 107px;
      height: 41px;
      background-image: url(../assets/share-logo.png);
      background-size: cover;
    }
  }
  .page-title{
    font-size: 20px;
    color: #111;
    line-height: 22px;
    margin: 17px 0;
  }
  .name-container{
    .info{
      .avatar{
        width: 35px;
        height: 35px;
        border-radius: 50px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .name-sendtime{
        margin-left: 10px;
        .name{
          font-size: 16px;
          color: #1e1e1e;
          line-height: 15px;
        }
        .sendtime{
          font-size: 12px;
          color: #999;
          line-height: 27px;
        }
      }
    }
    .btn{
      padding: 5px 10px;
      background-color: #5a8ff7;
      border-radius: 5px;
      color: #fff;
      font-size: 15px;
      &:active{
        opacity: .9;
      }
    }
  }
  .share-content{
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 22px;
    .article{
      white-space: pre-wrap;
      color: #111;
      font-size: 17px;
      line-height: 22px;
      margin: 13px 0;
    }
    .albums{
      img{
        width: 32%;
      }
    }
    .shareto{
      font-size: 14px;
      margin-top: 10px;
      a{
        color: #4184df;
        text-decoration: underline;
        &:active{
          color: #2c60c6;
        }
      }
    }
  }
  .downloadtext{
    margin-top: 22px;
    margin-bottom: 15px;
    .dlt-title{
      font-size: 16px;
      color: #606060;
      line-height: 20px;
      margin-bottom: 5px;
    }
    .dlt-content{
      font-size: 14px;
      color: #b8b8b8;
    }
  }
  .dl-btn{
    padding: 5px 0;
    text-align: center;
    background-color: #5a8ff7;
    border-radius: 5px;
    color: #fff;
    &:active{
      opacity: .9;
    }
  }
}
</style>
