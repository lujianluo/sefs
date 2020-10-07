<template>
<div>
  <div v-for="post in posts" :key="post">
      <div v-if="post.postName == newID">
        <img :src = "post.postUrl"><br><br>
        <span>Post Name:<br>{{post.postName}}</span><br><br>
        <span>Fund Needed:<br>{{post.postFund}}</span><br><br>
        <span>Post Description:<br>{{post.postDescription}}</span><br><br>
        <div v-for="user in userdata" :key="user">
          <div v-for="data in user" :key="data">
            <div v-if="data == post.postOwner">
              <span>Author Name:<br>{{user.name}}</span><br><br>
              <span>Author Email:<br>{{user.email}}</span><br><br>
        </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { db,} from '../firebase';

export default{
firestore(){
      return {
        posts: db.collection('posts'),
        userdata: db.collection('userdata')

      }
},
  data(){
    return{
      newID: this.$route.params.postName,
    }
  }
}
</script>

<style scoped>

</style>