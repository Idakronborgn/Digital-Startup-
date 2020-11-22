<template>
  <div class="create">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <form>
      <h1>Create a new post!!</h1>
      <input type="text" v-model="post.description" placeholder="Type a description here" required>
      <input class="vælgfilknap" type="file" ref="fileInput" accept="image/*" v-on:change="previewImage">
      <div>
        <img :src="post.image" class="image-preview">
      </div>
      <button type="button" v-on:click="createPost" class="createpostbutton">Post it man!</button>
    </form>
  </div>
</template>

<script>
import { postRef} from '../firebase-db'
export default {
  name: 'Create',
  data (){
    return {
      post: {
        description: '',
        image: null
      }
    }
  },
  methods: {
    triggerChooseImg () {
      this.$$refs.fileInput.click ()
    },
    previewImage () {
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.post.image = event.target.result
      }
      fileReader.readAsDataURL(imageFile)
    },
    createPost () {
      postRef.add(this.post)
      this.$router.push('/')
    }
  }
}
</script>

