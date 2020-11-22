import  firebase  from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
.initializeApp ({
    apiKey: "AIzaSyDspDHUbd452W-4Ybh8-ETVwj19UZqsiQM",
    authDomain: "vue-cli-fire-posts-954f2.firebaseapp.com",
    databaseURL: "https://vue-cli-fire-posts-954f2.firebaseio.com",
    projectId: "vue-cli-fire-posts-954f2",
    storageBucket: "vue-cli-fire-posts-954f2.appspot.com",
    messagingSenderId: "620974855087",
    appId: "1:620974855087:web:2b3ce8f21a00744c3b555a",
    measurementId: "G-MKXQC2PH1Z"
  })
  .firestore()

  export const postRef = db.collection('posts')