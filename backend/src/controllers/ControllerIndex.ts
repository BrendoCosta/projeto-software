import { Response, Router } from "express";
const router = Router();

router.route("/")
    .get(function indexWelcome(req: any, res: any): Response {
        return res.json("Servidor inicializado");
    });

export default router;