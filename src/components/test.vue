<template>
<form>
    <el-input v-model="email" placeholder="email"></el-input>
    <el-input v-model="name" placeholder="name"></el-input>
    <el-input v-model="company" placeholder="company"></el-input>
    <button @click="submit">Submit</button>
</form>


</template>

<script>

export default {
  data() {
    return {
      input: ''
    } 
  },
  methods:{
async function setDocument(db) {
  // [START set_document]
  const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

  // Add a new document in collection "cities" with ID 'LA'
  const res = await db.collection('cities').doc('LA').set(data);
  // [END set_document]

  console.log('Set: ', res);
}
}
</script>