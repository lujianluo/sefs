<template>
<div>
    <div v-for="post in posts" :key="post">
        <div v-if="post.postOwner == uid">
       <a @click="detailpage(post.postName)">{{post.postName}}</a><br><br><br>
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