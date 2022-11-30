import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import InicioView from "../views/InicioView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Início",
            meta: { title: "Início - Aplicação" },
            component: InicioView
        },
        {
            path: "/about",
            name: "about",
            meta: { title: "Sobre - Aplicação" },
            component: () => import("../views/AboutView.vue")
        },
        {
            path: "/CadastroMotoristas",
            name: "Cadastro de Motoristas",
            meta: { title: "Cadastro de Motoristas - Aplicação" },
            component: () => import("../views/CadastroMotoristas.vue")
        },
        {
            path: "/EditarMotorista/:cpf",
            name: "Edição de Motoristas",
            meta: { title: "Edição de Motoristas - Aplicação" },
            component: () => import("../views/CadastroMotoristas.vue")
        },
        {
            path: "/ListagemMotoristas",
            name: "Listagem de Motoristas",
            meta: { title: "Listagem de Motoristas - Aplicação" },
            component: () => import("../views/ListagemMotoristas.vue")
        }
    ]
});

router.beforeEach((to, from, next) => {

    document.title = to.meta.title;
    next();

});

export default router
