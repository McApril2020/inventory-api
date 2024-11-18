import { Router } from "express";
import db from '../db/deleteitem.mjs';

const router = Router();

router.post('/delete', async (req, res) => {
    
    try {
        if(req.body != undefined) {
            const data = req.body;
            const response = await db.delete_item(data);

            res.status(201).json({
                success: true,
                message: 'Item deleted successfully',
                data: response,
                type: 'delete'
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
});


export default router;