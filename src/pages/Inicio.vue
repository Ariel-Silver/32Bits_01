<template>
  <div class="contains d-flex my-5 flex-column align-items-center">
    <Navbar/>
    <h1 class="text1 my-5">32Bits</h1>
    <h2 class="text2">Juegos de PC y consolas</h2>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components:{ Navbar },
};
</script>

<style>
body {
  margin-top: 100px;
}
.contains {
  height: 250px;
  width: 500px;
  background-color: #ffc107;
  margin: auto;
  border: 12px solid black;
  border-radius: 10px;
}
.text1 {
  font-weight: bolder;
}

.text2 {
  font-size: large;
}

</style>