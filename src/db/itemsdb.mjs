import { query } from 'express';
import mysql from '../db.mjs'

let db = {};

db.get_inventory_items = () => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM mis_inventory.items_list WHERE status = 1";

        mysql.query(query, (err, results) => {
            return err ? reject(err) : resolve(results);
        })
    })
},

db.get_item_code = (data) => {
    return new Promise((resolve, reject) => {
        if(data != '' && data != null && data != undefined) {
            const query = `SELECT * FROM ess_db.epp_item WHERE status = 1 AND code = '${data}'`;
        
            mysql.query(query, (err, results) => {
                return err ? reject(err) : resolve(results);
            })
        }
    })
}

db.get_item_code = (data) => {
    return new Promise((resolve, reject) => {
        if(data != '' && data != null && data != undefined) {
            let query = `SELECT * FROM mis_inventory.subitems WHERE item_id = ${data}`;

            mysql.query(query, (err, results) => {
                return err ? reject(err) : resolve(results);
            })
        }
    })
}

export default db;