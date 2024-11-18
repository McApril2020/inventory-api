import { Router } from "express";
import db from '../db/itemsdb.mjs';

const router = Router();

router.get('/items', (req, res, next) => {
    // console.log('this is middleware')
    next();
}, async (req, res) => {
   try {
    const response = await db.get_inventory_items();
    res.json(response)
   } catch(err) {
    console.log(err)
   }
});

router.get('/get_item/:id', async(req, res) => {
    try {
        const id = req.params.id
        const response = await db.get_item_code(id);
        res.json(response)
    } catch (error) {
        console.log(error);
    }
})

// app.get('/items', (req, res) => {
//     const {item, quantity} = req.query
//     console.log(item)
//     console.log(quantity)
//     res.send(arr)
// });

export default router;