<template>
  <div class="m-4 align-items-center text-center">
    <Navbar></Navbar>
      <section>
      <h3>Filtro</h3>
      <input
        type="text"
        placeholder="¿Que buscas?"
        :value="$store.state.busqueda"
        @input="
          $store.dispatch('setBusqueda', $event.target.value)
        "
      />
      <ListaJuegos
        v-if="$store.getters.juegosSegunBusqueda.length > 0"
        :productos="$store.getters.juegosSegunBusqueda"
      />
      <ul>
        <li class="pe-4">Escribe el nombre del producto</li>
      </ul>
    </section>
    <section class="pt-3 pb-3">
      <hr />
      <h2>Cantidad de juegos totales y de stock total</h2>
      <p>Juegos totales: {{ $store.state.productos.length }}</p>
      <p>Stock total: {{ $store.getters.stockTotal }}</p> 
      <hr />
    </section>
    <section class="pt-3 pb-3 container">
     <h2>Listado de juegos</h2>
    <table class="text-center justify-content-center table ">
      <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </tr>
      <tr
        v-for="(producto, $index) in $store.state.productos"
        :key="$index"
        :style="{ 'background-color': producto.color }"
      >
        <td>{{ producto.codigo }}</td>
        <td>{{ producto.nombre }}</td>
        <td>{{ producto.stock }}</td>
        <td>{{ producto.precio }}</td>
      </tr>
      
    </table>
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