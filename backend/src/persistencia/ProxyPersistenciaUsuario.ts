import { Request, Response } from "express";

import { conexao } from "../database";
import { Usuario } from "../modelo/Usuario";

export async function listar(): Promise<Usuario[]> {

    const conn = await conexao();
    let arr: Usuario[] = [];
    
    let resultado: any = await conn.query("SELECT * FROM usuario");
    resultado = resultado[0];

    for (let i = 0; i < resultado.length; i++) {

        let usr: Usuario = new Usuario();

        usr.setCpf(Number(resultado[i].cpf));
        usr.setNome(resultado[i].nome);
        usr.setSenha(resultado[i].senha);
        usr.setEndereco(resultado[i].endereco);
        usr.setTelefone(resultado[i].telefone);
        usr.setEmail(resultado[i].email);

        arr.push(usr);

    }

    return arr;

}

export async function incluir(usr: Usuario): Promise<boolean> {

    const conn = await conexao();
    await conn.query(
        "INSERT INTO usuario (cpf, nome, senha, endereco, telefone, email) VALUES (?, ?, ?, ?, ?, ?)",
        [usr.getCpf(), usr.getNome(), usr.getSenha(), usr.getEndereco(), usr.getTelefone(), usr.getEmail()]
    );
    return true;

}

export async function deletar(usr: Usuario): Promise<boolean> {

    const conn = await conexao();
    await conn.query(
        "DELETE FROM usuario WHERE cpf = ?",
        [usr.getCpf()]
    );
    return true;

}

export async function buscarPorCpf(cpf: number): Promise<Usuario> {

    const conn = await conexao();
    let usr: Usuario = new Usuario();
    
    let resultado: any = await conn.query("SELECT * FROM usuario where cpf = ? LIMIT 1", [cpf]);
    resultado = resultado[0][0];

    usr.setCpf(Number(resultado.cpf));
    usr.setNome(resultado.nome);
    usr.setSenha(resultado.senha);
    usr.setEndereco(resultado.endereco);
    usr.setTelefone(resultado.telefone);
    usr.setEmail(resultado.email);

    return usr;

}