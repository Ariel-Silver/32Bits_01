<template>
  <div>
    <table class="mt-4 text-center justify-content-center table ">
      <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
      </tr>
      <tr
        v-for="(producto, $index) in $store.state.productos"
        :key="$index"
      >
        <td>{{ producto.codigo }}</td>
        <td>{{ producto.nombre }}</td>
        <td>{{ producto.stock }}</td>
        <td>{{ producto.precio }}</td>
        
        <button
        v-if="modo === 'vender'"
        class="btn btn-info btn-sm m-2"
        @click="$emit('vender', producto)"
        :disabled="producto.stock <= 0"
      >
        Vender
      </button>
      </tr>
      
    </table>
  </div>
</template>
<script>
export default {
  name: "ListaJuegos",
  props: {
    juegos: { type: Array, require: true },
    modo: { type: String, default: "mirar" },
  },
};
</script>
