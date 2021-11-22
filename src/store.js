import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const store = new Vuex.Store({
  state: {
    busqueda: "",
    productos: [
      {
        codigo: "1",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "2",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "3",
        nombre: "Gears Of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "4",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "5",
        nombre: "Bloodborne",
        stock: 100,
        precio: 30000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "6",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
    ventas: [],
  },
  getters: {
    stockTotal(state) {
      return state.productos.reduce((accumulator, producto) => {
        accumulator = accumulator + producto.stock;
        return accumulator;
      }, 0);
    },
    juegosSegunBusqueda(state) {
      if (state.busqueda === "") {
        return [];
      } else {
        return state.productos.filter((producto) =>
          producto.nombre.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
    juegosConStock(state) {
      return state.productos.filter((producto) => producto.stock > 0);
    },
    totalJuegosConStock(state) {
      return state.productos.filter((producto) => producto.stock > 0).length;
    },
    montoTotalDeVentas(state) {
      return state.ventas.reduce((accumulator, venta) => {
        accumulator += venta.precio;
        return accumulator;
      }, 0);
    },
  },
  mutations: {
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda;
    },
    RESTAR_STOCK(state, indiceJuego) {
      state.productos[indiceJuego].stock -= 1;
    },
    AGREGAR_STOCK(state, indiceJuego) {
      state.productos[indiceJuego].stock += 1;
    },
    AGREGAR_VENTA(state, venta) {
      state.ventas.push(venta);
    },
  },

  actions: {
    setBusqueda(context, nuevaBusqueda) {
      if (typeof nuevaBusqueda === "string") {
        context.commit("SET_BUSQUEDA", nuevaBusqueda);
      } else {
        console.warn(
          `nuevaBusqueda debiese de ser de tipo string y recibir un tipo ${typeof nuevaBusqueda}`
        );
      }
    },
    async venderJuego(context, producto) {
      await context.dispatch("procesarLaVenta", producto);
      await context.dispatch("registrarLaVenta", producto);
    },
    async procesarLaVenta(context, juegoAVender) {
      await delay(2000);
      const indiceJuego = context.state.productos.findIndex(
        (producto) => producto.codigo === juegoAVender.codigo
      );
      if (context.state.productos[indiceJuego].stock > 0) {
        context.commit("RESTAR_STOCK", indiceJuego);
      }
    },
    async registrarLaVenta(context, producto) {
      await delay(1000);
      // eslint-disable-next-line no-unused-vars
      const { stock, ...datosJuego } = producto;
      context.commit("AGREGAR_VENTA", datosJuego);
    },
  },
});

export default store;
