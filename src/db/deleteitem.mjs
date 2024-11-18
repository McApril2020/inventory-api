import mysql from '../db.mjs'

let db = {};

db.delete_item = (data) => {
    return new Promise((resolve, reject) => {
        if(data != '' && data != null && data != undefined) {
            const {id} = data
            const query = `UPDATE mis_inventory.items SET status = 0 WHERE id = ${id}`;
        
            mysql.query(query, (err, results) => {
                return err ? reject(err) : resolve(results);
            })
        } else {
            reject(new Error('Invalid data')); 
        }
    })
}

export default db;