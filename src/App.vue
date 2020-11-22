<template>
  <div id="app">
    <div id="nav">
      
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>

.updatesite {
 display: block;
  margin: 10%;
  background-color: #CFCFCF;
  padding: 5%;
   border-radius: 5px 20px 5px;
}

form {
  display: block;
  margin: 10%;
  background-color:  #42b983;;
  padding: 15%;
   border-radius: 5px 20px 5px;
  
}

input[type=text] {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #35495E;
  border-radius: 4px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px;
  margin: 5%;
}

input {
  margin: 7%;
}

.updateknapiupdate {
   background-color: #000000;
  border: none;
  color: white;
  padding: 10px 22px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}


.createpostbutton {
  background-color: #35495E;
  border: none;
  color: white;
  padding: 10px 22px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

h1 {
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-weight: 900;
margin-top: 0%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 100%;
}

.logo {
  width: 20%;
  margin: none;
}

button {
   border: 0;
  border-radius: 10px;
  background: #42b983;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  outline: none;
  position: relative;
  transition: border-radius 3s;
  -webkit-transition: border-radius 3s;
  margin: 5%;
}

.buttonupdate:hover {
   border-bottom-right-radius: 50px;
   border-top-left-radius: 50px;
   border-bottom-left-radius: 10px;
   border-top-right-radius: 10px;
}

.deletebutton {
  border: 0;
  border-radius: 10px;
  background: #AD2111;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  outline: none;
  position: relative;
  transition: border-radius 3s;
  -webkit-transition: border-radius 3s;
  margin: 5%;
}

</style>
