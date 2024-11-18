import { Router } from "express";
import db from '../db/updateitem.mjs';

const router = Router();

router.post('/update', async(req, res) => {
    try {
        if(req.body != undefined) {
            const data = req.body;
            const response = await db.update_item(data);

            res.status(201).json({
                success: true,
                message: 'Item updated successfully',
                data: response,
                type: 'update'
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