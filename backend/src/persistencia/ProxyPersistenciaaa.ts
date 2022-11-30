import { Pool, Client } from "pg"

interface ProxyPersistencia<T> {

	listar(): T[];

	incluir(objeto: T): boolean;

	atualizar(objeto: T): boolean;

	deletar(objeto: T): boolean;

}

export class ProxyPersistenciaAgendamento implements ProxyPersistencia<Agendamento> {

	listar(): Agendamento[] {

		const connectionString = 'postgresql://postgres:lkj24832589@localhost:3211/mydb'
		const client = new Client({
			connectionString,
		})
		client.connect()
		
		client.query('SELECT NOW()', (err, res) => {
			console.log(err, res)
			client.end()
		})

		let a: Agendamento[] = [];
		a.push(new Agendamento());
		return a;
	}

	incluir(objeto: Agendamento): boolean { return true }

	atualizar(objeto: Agendamento): boolean { return true }

	deletar(objeto: Agendamento): boolean { return true }

}
