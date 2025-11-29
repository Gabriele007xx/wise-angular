import { Router } from "express";
import { getDb } from "../../database/db.js";

const routerMoney = Router();

routerMoney.get('', async (req, res) => {
    let db =  await getDb();
    const money = await db.all('SELECT * FROM currencies');
    return res.status(200).json(money);
});

export { routerMoney };