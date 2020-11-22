<template>
    <div class="gird-container">
        <article v-for="post in posts" :key="post.id">
            <h3>{{post.description}}</h3>
            <img :src="post.image" alt="">

            <router-link :to="{ name: 'Update', params: {post: post} }">
                <button class="buttonupdate">Update</button>
            </router-link>

            <button type="button" v-on:click="deletePost(post.id)" class="deletebutton">Delete</button>
            </article> 
    </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
    data (){
        return {
            posts: []
        };
    },
    methods:{
        deletePost(id){
        console.log(id);
        postRef.doc(id).delete();
        }
    },

    firestore: {
         posts: postRef 
    }
}
</script>

