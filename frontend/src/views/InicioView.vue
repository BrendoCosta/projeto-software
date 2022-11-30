<template>
    <b-card-group deck>
        <b-card header-tag="header" footer-tag="footer" v-for="value in card">
            <template #header>
                <h6 class="mb-0">{{ value.head }}</h6>
            </template>
            <h4>{{ value.title }}</h4>
            <b-card-text>{{ value.description }}</b-card-text>
            <b-button href="#" variant="primary">Check-in</b-button>
            <template #footer><b-button-group>
                        <b-button variant="success">Success</b-button>
                        <b-button variant="info">Info</b-button>
                        <b-button variant="warning">Warning</b-button>
                    </b-button-group></template>
        </b-card>
    </b-card-group>

</template>

<script setup>
    import { ref, reactive } from "vue";
    import HelloWorld from "../components/HelloWorld.vue";

    const card = [
        {
            head: "Agendamento",
            title: "#1",
            description: "Exemplo.",
            footer: "30 de nov. 2022",
        },
        {
            head: "Agendamento",
            title: "#2",
            description: "Exemplo.",
            footer: "30 de nov. 2022",
        }
    ];


</script>

<style>

    @media (max-width: 1024px) {

        .card-deck {

            display: grid;

        }
    
    }

</style>
