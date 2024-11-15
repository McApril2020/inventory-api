import { query } from 'express';
import mysql from '../db.mjs'

let db = {};

db.save_item = (data) => {
 
    return new Promise((resolve, reject) => {
        if(data != '' && data != null && data != undefined) {
            const {name, description, icon, color} = data
            const query = `INSERT INTO mis_inventory.items (name, description, icon, color) VALUES (?, ?, ?, ?)`;
        
            mysql.query(query, [name, description, icon, color], (err, results) => {
                return err ? reject(err) : resolve(results);
            })
        } else {
            reject(new Error('Invalid data')); 
        }
    })
}

export default db;