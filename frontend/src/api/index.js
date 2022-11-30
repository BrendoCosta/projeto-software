import axios from "axios";

export default class API {

    static baseUrl = "http://localhost:3000";

    static listarUsuarios() {

        return axios.get(`${API.baseUrl}/usuario`, { withCredentials: false });

    }

    static incluirUsuario(dados) {

        return axios.post(`${API.baseUrl}/usuario`, dados, {

            headers: { "Content-Type": "application/json"},
            withCredentials: false
            
        });
        
    }

    static deletarUsuario(cpf) {

        return axios.delete(`${API.baseUrl}/usuario/${cpf}`, {

            withCredentials: false
            
        });
        
    }

    static buscarUsuario(cpf) {

        return axios.get(`${API.baseUrl}/usuario/${cpf}`, {
            
            withCredentials: false
            
        });
        
    }

}