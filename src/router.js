import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./pages/Inicio')
const Busquedas = () => import('./pages/Busquedas')
const Ventas = () => import('./pages/Ventas')
const Total = () => import('./pages/Total')
const notFound = () => import('./pages/notFound.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busquedas',
            name: 'busquedas',
            component: Busquedas
        },
        {
            path: '/ventas',
            name: 'ventas',
            component: Ventas
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        },
        {
            path: '/*',
            component: notFound
        }
    ]
})