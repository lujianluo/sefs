<template>
<div>
    <div v-for="post in posts" :key="post">
        <div v-if="post.postOwner == uid">
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
</template>

<script>
 //import * as firebase from "firebase/app";
 import {db,fb} from '../firebase'
import "firebase/auth";
export default {
firestore(){
      return {
        posts: db.collection('posts'),
        userdata: db.collection('userdata')
      }
},
data(){
    return{
        uid: fb.auth().currentUser.uid
    }
},
methods: {
    detailpage(postName){
        this.$router.push({name:'ProductPage', params:{postName: postName}})
    }
}
}
</script>