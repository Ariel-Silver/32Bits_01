<template>
  <div>
    <Navbar/>
    <section class="mt-5 p-3">
      <h3 class="pt-3">Cantidad de juegos con stock: {{ $store.getters.totalJuegosConStock }}</h3>
      <Listajuegos :juegos="$store.getters.juegosConStock" />
    </section>

    <section>
      <h3 class="text-center">Venta de juegos</h3>
      <ListaJuegos :juegos="$store.state.productos"
        modo="vender"
        @vender="$store.dispatch('venderJuego', $event)">
      </ListaJuegos>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ListaJuegos from "../components/ListaJuegos.vue";

export default {
  components: { ListaJuegos, Navbar },
};
</script>

<style>

</style>
