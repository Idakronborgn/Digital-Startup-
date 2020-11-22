<template>
    <div class="update">
        <h1>Update</h1>
        <form class="updatesite">
            <h3>Give the post a description</h3>
            <input 
            type="text"
            v-model="post.description"
            placeholder="Type a description here" 
            required
            >
            <input 
            type="file"
            ref="fileInput"
            accept="image/*"
            v-on:change="previewImage">
            <div> 
                <img :src="post.image" class="image-preview">
            </div>
            <button type="button" v-on:click="updatePost" class="updateknapiupdate">Update Post</button>
        </form>
    </div>
</template>

<script>
import {postRef} from "../firebase-db";
export default {
    name: "Update",
    props: {
        post: Object
    },
    methods: {
        triggerChooseImg (){
            this.$refs.fileInput.click ();
        },
        previewImage (){
            const imageFile = this.$refs.fileInput.files[0];
            const fileReader = new FileReader();
            fileReader.onload = event => {
                this.post.image = event.target.result;
            };
            fileReader.readAsDataURL(imageFile);
        },
        updatePost(){
            console.log(this.post);

            postRef.doc(this.post.id).set({
                description: this.post.description,
                image: this.post.image
            });
            this.$router.push("/");
        }
    }
}
</script>