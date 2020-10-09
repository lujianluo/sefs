<template>
    <div>
    <el-form ref="upload" label-width="100px" class="register" style="padding-top: 100px; width: 500px">
    <el-form-item label="Name" prop="postName">
    <el-input type="postName" v-model="postName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Fund needed" prop="postFund">
    <el-input type="postFund" v-model="postFund" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Description" prop="postDescription">
    <el-input type="postDescription" v-model="postDescription" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-select v-model="value" placeholder="Select A Category">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
    </el-form-item>
    <el-form-item>
     <p style="font-size: 20px">Choose a image here!</p>
    <input type="file" @change="previewImage" accept="image/*" >
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="Upload">Upload</el-button>
    </el-form-item>
    </el-form>
    </div>   
</template>

<script>
 import {fb,db} from '../firebase'
 import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: 'Upload',
  data(){
	return{
    options: [{
          value: 'Computer Science',
          label: 'Computer Science'
        }, {
          value: 'ART',
          label: 'ART'
        }, {
          value: 'TECH',
          label: 'TECH'
        }, {
          value: 'History',
          label: 'History'
        }, {
          value: 'Geography',
          label: 'Geography'
        }],
      value: '',
      imageData: null,
      postName: '',
      postDescription: '',
      postFund: 0,
      picture: null,
	}
  },
  methods:{
    previewImage(event) {
      this.imageData = event.target.files[0];
    },  
    
     Upload(){
      const storageRef=fb.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
            db.collection("posts").doc().set({
            postName: this.postName,
            postFund: this.postFund,
            postDescription: this.postDescription,
            postOwner: firebase.auth().currentUser.uid,
            postGategory: this.value,
            postUrl: this.picture
        });
        });
      }
      );
      this.$router.replace({ name: "Home" });
      this.$message('uploaded successfully');
    }

  }
}
</script>





<style scoped>

</style>