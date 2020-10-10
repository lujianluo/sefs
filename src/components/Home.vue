<template>
        <el-main>
            <div class = "recommend">
            <img recommend src="../assets/recommend.png" >
            </div>
            <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="post in posts" :key="post">
            <h3><img :src="post.postUrl" alt=""></h3>
            </el-carousel-item>
            </el-carousel>
        </el-main>
</template>


<script>
import { db,} from '../firebase';
export default {
 firestore(){
      return {
        posts: db.collection('posts'),
      }
},
data(){
return {
imgList: [

    ]
}
},

}
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content:center;
  height:15%
}

  .el-carousel__item h3 {
    color: #d60e0e;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>