<template>
    <b-table-simple hover small striped caption-top borderless responsive>
        <b-thead>
            <b-tr>
                <b-th>CPF</b-th>
                <b-th>Nome</b-th>
                <b-th>Senha</b-th>
                <b-th>Endereco</b-th>
                <b-th>Telefone</b-th>
                <b-th>Email</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="usuario in motoristas">
                <b-td>{{usuario.cpf}}</b-td>
                <b-td>{{usuario.nome}}</b-td>
                <b-td>{{usuario.senha}}</b-td>
                <b-td>{{usuario.endereco}}</b-td>
                <b-td>{{usuario.telefone}}</b-td>
                <b-td>{{usuario.email}}</b-td>
                <b-td>
                    <b-button-group>
                        <b-button variant="primary"><RouterLink :to="`/EditarMotorista/${usuario.cpf}`">Editar ✏️</RouterLink></b-button>
                        <b-button variant="danger" @click="deletarMotorista($event)" :cpf="`${usuario.cpf}`">Excluir ❌</b-button>
                    </b-button-group>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>

<script>

    import API from "../api";

    export default {

        data() {

            return {

                motoristas: null

            }

        },

        methods: {

            deletarMotorista(event) {

                console.log(event);

            }

        },

        created() {

            API.listarUsuarios().then(response => (this.motoristas = response.data))
            console.log(this.motoristas)

        }

    }

</script>