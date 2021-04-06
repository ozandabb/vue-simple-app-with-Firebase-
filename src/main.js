import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from 'firebase/app';


var firebaseConfig = {
    apiKey: "AIzaSyBohxcWBUJtnKDpk3gVkkWmTzIS7d_bO2Q",
    authDomain: "testjadon.firebaseapp.com",
    projectId: "testjadon",
    storageBucket: "testjadon.appspot.com",
    messagingSenderId: "145570071684",
    appId: "1:145570071684:web:f3da7fc756bc583522eed1",
    measurementId: "G-J6K6XFT9PK",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
createApp(App).use(store).use(router).mount("#app");

