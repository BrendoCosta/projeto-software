<template>
    <b-card>
        <div>
            <b-form @submit="enviarDados" @reset="resetar">
                <b-form-group id="input-group-1" label="CPF:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.cpf" type="text" placeholder="Digite o CPF..." required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.nome" type="text" placeholder="Digite o nome..." required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Senha:" label-for="input-3">
                    <b-form-input id="input-3" v-model="form.senha" type="password" placeholder="Digite a senha..." required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4" label="Endereço:" label-for="input-4">
                    <b-form-input id="input-4" v-model="form.endereco" type="text" placeholder="Digite o endereço..." required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-5" label="Telefone:" label-for="input-5">
                    <b-form-input id="input-5" v-model="form.telefone" type="text" placeholder="Digite o telefone..." required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-6" label="E-mail:" label-for="input-6">
                    <b-form-input id="input-6" v-model="form.email" type="email" placeholder="Digite o e-mail..." required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-7" label="Tipo:" label-for="input-7">
                    <b-form-select id="input-3" v-model="form.tipo" :options="tipos" required></b-form-select>
                </b-form-group>
                <b-button type="submit" variant="primary">Cadastrar</b-button>
                <b-button type="reset" variant="danger">Apagar</b-button>
            </b-form>
        </div>
    </b-card>
</template>

<script>

    import { ref, reactive, nextTick } from "vue";
    import API from "../api";

    export default {

        data() {

            return {

                show: ref(true),

                form: reactive({
                    cpf: null,
                    nome: null,
                    senha: null,
                    endereco: null,
                    telefone: null,
                    email: null,
                    tipo: null
                }),

                tipos: [

                    {text: "Selecione o tipo de usuário", value: null},
                    {text: "Motorista", value: 3},

                ]

            }

        },

        methods: {

            enviarDados (event) {

                event.preventDefault();

                let dados = JSON.stringify(this.form);

                API.incluirUsuario(dados).then(response => {

                    if (response.data.resultado) {
                        alert("Cadastrado com sucesso!");
                    }

                });

            },

            resetar (event) {

                event.preventDefault();

                this.form.cpf       = null;
                this.form.nome      = null;
                this.form.senha     = null;
                this.form.endereco  = null;
                this.form.telefone  = null;
                this.form.email     = null;
                this.form.tipo      = null;
                this.show.value     = false;
                
                nextTick(() => {

                    this.show = true

                });

            }

        },

        created() {

            if (this.$route.params) {

                if (this.$route.params.cpf) {

                    API.buscarUsuario(this.$route.params.cpf).then(response => {

                        if (response.data) {

                            this.form.cpf       = response.data.cpf;
                            this.form.nome      = response.data.nome;
                            this.form.senha     = response.data.senha;
                            this.form.endereco  = response.data.endereco;
                            this.form.telefone  = response.data.telefone;
                            this.form.email     = response.data.email;
                            this.form.tipo      = response.data.tipo;
                            this.show           = true;

                        }

                    });

                }

            }

        }

    }

</script>