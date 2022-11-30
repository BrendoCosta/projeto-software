import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import ControllerIndex from "./controllers/ControllerIndex";
import ControllerUsuario from "./controllers/ControllerUsuario";

export class App {

    private app: any;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set("port", this.port || process.env.PORT || 3000);
        this.app.use (
            cors ({
                origin: "*"
            })
        );
    }

    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(ControllerIndex);
        this.app.use("/usuario", ControllerUsuario);
    }

    async listen() {
        await this.app.listen( this.app.get("port"));
        console.log(`Servidor iniciado em http://localhost:${ this.app.get("port") }`);
    }
    
}