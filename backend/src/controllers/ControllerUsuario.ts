import { Router } from "express";
const router = Router();

import { Usuario } from "../modelo/Usuario";
import * as ProxyPersistenciaUsuario from "../persistencia/ProxyPersistenciaUsuario";

router.route("/")
    .get(async function (req: any, res: any): Promise<Response> {

        let arr: Usuario[];
        arr = await ProxyPersistenciaUsuario.listar();
        return res.json(arr);

    })
    .post(async function (req: any, res: any): Promise<Response> {

        let dados: any = req.body;

        let usr: Usuario = new Usuario();

        usr.setCpf(Number(dados.cpf));
        usr.setNome(dados.nome);
        usr.setSenha(dados.senha);
        usr.setEndereco(dados.endereco);
        usr.setTelefone(dados.telefone);
        usr.setEmail(dados.email);

        let inclusao: boolean = await ProxyPersistenciaUsuario.incluir(usr);

        return res.json({ resultado: inclusao });

    });

router.route("/:cpf")
    .get(async function (req: any, res: any): Promise<Response> {

        let usr: Usuario;

        usr = await ProxyPersistenciaUsuario.buscarPorCpf(req.params.cpf);
        return res.json(usr);

    })
    .delete(async function (req: any, res: any): Promise<Response> {

        let usr: Usuario = new Usuario();

        usr.setCpf(Number(req.params.cpf));

        let delecao: boolean = await ProxyPersistenciaUsuario.deletar(usr);

        return res.json({ resultado: delecao });

    })
    .put();

export default router;  