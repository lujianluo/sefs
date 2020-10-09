<template>
  <el-container class="small">
    <el-aside width="300px">
        <div class ="filter">
        <span style="font-size: 50px">Filter</span>
        </div>
        <div class="option">
        <div style="margin-top: 30px">
    <el-radio v-model="radio1" label="200" border>less than $200</el-radio>
  </div>
  <div style="margin-top: 30px">
    <el-radio v-model="radio1" label="500" border >less than $500</el-radio>
  </div>
  <div style="margin-top: 30px">
    <el-radio v-model="radio1" label="1000" border >less than $1000</el-radio>
  </div>
      
  </div>
    </el-aside>
    <el-main>
    <div class="items">
    <el-row>
    <div class="box">
    <el-col :span="6" v-for="post in posts" :key="post" :offset="2" >
    <div v-if="newC == 'All'" >
         <div v-if="post.postFund < radio1">
      <el-card :body-style="{ padding: '0px'}" :key="post.postUrl">
      <img :src="post.postUrl" class="image">
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button"  @click="detailpage(post.postName)">{{post.postName}}</el-button>
        </div>
      </div>  
    </el-card>
      </div>
    </div>
    <div v-else>
      <div v-if="post.postCategory == newC">
        <div v-if="post.postFund < radio1">
    <el-card :body-style="{ padding: '0px'}" :key="post.postUrl">
      <img :src="post.postUrl" class="image">
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button"  @click="detailpage(post.postName)">{{post.postName}}</el-button>
        </div>
      </div>
    </el-card>
      </div>
    </div>
    </div>
  </el-col>
    </div>
    </el-row>
    </div>
    </el-main>
  </el-container>
</template>

<script>
import { db,} from '../firebase';
export default {
  data(){
    return{
      posts:[],
      newC: this.$route.params.newCategory,
      radio1: 99999
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
    },

},

}

</script>
<style scoped>
.el-aside{
    background-color: coral;
    text-align: center
}
.filter{
    margin-top: 100px;
}
.el-main{
    height: 720px;
    background-color: darkcyan;
    position: relative
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
  .box{
      padding-left: 100px;
      padding-top: 80px;
  }
  .option{
    border: 3px solid #73AD21;
  }
</style>