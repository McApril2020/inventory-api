import { Router } from "express";
import db from '../db/additem.mjs';

const router = Router();

router.post('/save_list', async(req, res) => {
    try {
        if(req.body != undefined) {
            const data = req.body;
            const response = await db.save_list(data);
            
            res.status(201).json({
                success: true,
                message: 'Item saved successfully',
                data: response,
                type: 'insert'
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'No data provided'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to save item',
            error: error.message 
        });
    }
})

// router.post('/save_list', async(req, res) => {
//     try {
//         if(req.body != undefined) {
//             const data = req.body;
//             const response = await db.save_list(data);

//             res.status(201).json({
//                 success: true,
//                 message: 'Item saved successfully',
//                 data: response,
//                 type: 'insert'
//             });
//             console.log('down')
//             console.log(response)
//         }
//     } catch (error) {
        
//     }
// })

router.post('/add', async(req, res) => {
    try {
        if(req.body != undefined) {
            const data = req.body;
            const response = await db.add_item(data);

            res.status(201).json({
                success: true,
                message: 'Item saved successfully',
                data: response,
                type: 'insert'
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'No data provided'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to save item',
            error: error.message 
        });
    }
})

export default router;