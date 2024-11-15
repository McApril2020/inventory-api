import { Router } from 'express';
import db from '../db/itemsdb.mjs';

const router = Router();

// const arr = [
//     {id: 1, item: 'box', quantity: 3},
//     {id: 2, item: 'ribbon', quantity: 1},
//     {id: 3, item: 'mirror', quantity: 15},
// ]

router.get('/items/:code', async (req, res) => {
    try {
        const code = req.params.code
        const response = await db.get_item_code(code)
        res.cookie('items' + code, response, { maxAge: 60000 * 60 })
        res.send(response)
    } catch (error) {
        console.log(error)
    }
});

export default router;