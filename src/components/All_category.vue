<template>
<el-container>
  <el-header><div class = "tech">
            <img recommend src="../assets/TECHS.png" >
            </div>
  </el-header>
  <el-container class="small">
    <el-aside width="300px">
        <div class ="filter">
        <span style="font-size: 50px">Filter</span>
        <div style="margin-top: 30px">
    <el-radio v-model="radio1" label="1" border>less than $500</el-radio>
  </div>
  <div style="margin-top: 30px">
    <el-radio v-model="radio2" label="1" border >$500-$1000</el-radio>
  </div>
  <div style="margin-top: 30px">
    <el-radio v-model="radio2" label="1" border >more than $1000</el-radio>
  </div>
        </div>
    </el-aside>
    <el-main>
    <div class="items">
    <el-row>
    <div class="box">
    <el-col :span="6" v-for="post in posts" :key="post" :offset="2" >
    <el-card :body-style="{ padding: '0px'}" :key="post.postUrl">
      <img :src="post.postUrl" class="image">
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button" :key="post.postName" @click="detailpage(post.postName)">{{post.postName}}</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
    </div>
    </el-row>
    </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import { db,} from '../firebase';

export default {
data(){
    return{
        posts:[],
 
    }
},
 firestore(){
      return {
        posts: db.collection('posts'),
      }
},
methods: {
    detailpage(postName){
        this.$router.push({name:'ProductPage', params:{postName: postName}})
    }
}
}
</script>

<style scoped>
.tech{
    display: flex;
    justify-content:center;
}
.el-header{
    min-height: 150px;
}
.el-aside{
    min-height: 520px;
    background-color: coral;
    text-align: center
}
.pages{
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom:50px;
    margin-left:580px
}
.filter{
    margin-top: 100px;
}
.el-main{
    min-height: 520px;
    background-color: darkcyan;
    position: relative
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    font-size: 15px;
    padding: 0;
    float: right;
  }

  .image {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
  }
.small{
    height: 500px
}
</style>