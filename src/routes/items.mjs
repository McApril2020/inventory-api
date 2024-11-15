import { Router } from "express";
import db from '../db/itemsdb.mjs';

const router = Router();

// const arr = [
//     {id: 1, item: 'box', quantity: 3},
//     {id: 2, item: 'ribbon', quantity: 1},
//     {id: 3, item: 'mirror', quantity: 15},
// ]

router.get('/items', (req, res, next) => {
    // console.log('this is middleware')
    next();
}, async (req, res) => {
   try {
    const response = await db.get_epp_items();
    res.json(response)
   } catch(err) {
    console.log(err)
   }
});


// app.get('/items', (req, res) => {
//     const {item, quantity} = req.query
//     console.log(item)
//     console.log(quantity)
//     res.send(arr)
// });

export default router;