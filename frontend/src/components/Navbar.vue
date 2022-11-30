<template>
    <b-navbar variant="dark" id="navbar">
        <b-navbar-nav>
            <b-nav-item active><RouterLink to="/">Início</RouterLink></b-nav-item>
            <b-nav-item-dropdown class="nav-dropdown" text="Cadastro">
                <b-dropdown-item><RouterLink to="/cadastroMotoristas">Cadastro de Motoristas</RouterLink></b-dropdown-item>
                <b-dropdown-divider/>
                <b-dropdown-item>Outro</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="nav-dropdown" text="Listagem">
                <b-dropdown-item><RouterLink to="/ListagemMotoristas">Lista de Motoristas</RouterLink></b-dropdown-item>
                <b-dropdown-item>Agendamentos</b-dropdown-item>
                <b-dropdown-divider/>
                <b-dropdown-item>Outro</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>

<script setup>

    import { RouterLink, RouterView } from "vue-router";

</script>

<style>

    a {
        color: #42b983 !important;
    }

    #navbar .nav-link a, .nav-dropdown .btn-content {

        color: white !important;

    }

    #navbar a.router-link-active {

        color: #42b983 !important;

    }

</style>
