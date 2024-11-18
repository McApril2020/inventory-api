import { query } from 'express';
import mysql from '../db.mjs'

let db = {};

db.save_list = (data) => {
    return new Promise((resolve, reject) => {
        if(data != '' && data != null && data != undefined) {
            const {item_id,name,serial_no,specs,usage_type,location,isWorking} = data;
            // console.log(item_id)
            // console.log(name)
            // console.log(serial_no)
            // console.log(specs)
            // console.log(usage_type)
            // console.log(location)
            // console.log(isWorking)
            // return
            const query = `INSERT INTO mis_inventory.subitems (item_id, name, serial_no, specs, usage_type,current_location,isWorking) VALUES (?, ?, ?, ?, ?, ?, ?)`;

            mysql.query(query, [item_id, name, serial_no, specs, usage_type, location, isWorking], (err, results) => {
                return err ? reject(err) : resolve(results);
            })
        } else {
            reject(new Error('Invalid data')); 
        }
    })
}

db.add_item = (data) => {
 
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