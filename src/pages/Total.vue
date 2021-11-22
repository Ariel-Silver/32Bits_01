<template>
  <div>
    <Navbar/>
    <section class="mt-5">
      <h3 class="pt-3 text-center">Carrito de compras</h3>
      <ListaJuegos :productos="$store.state.ventas" />
    </section>
    <section>
      <h3 class="m-2">Monto total de ventas</h3>
      <p class="m-2">Total: ${{ $store.getters.montoTotalDeVentas }}</p>
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