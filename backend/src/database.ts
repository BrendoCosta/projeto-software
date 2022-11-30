import { createPool } from "mysql2/promise";

export async function conexao() {

    const conn = await createPool({

        host: "",
        user: "",
        password: "",
        database: "zqykbxrz_aplicacao",
        connectionLimit: 10

    });
    
    return conn;

}