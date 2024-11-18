import mysql from '../db.mjs'

let db = {};

db.update_item = (data) => {
 
    return new Promise((resolve, reject) => {
        if(data != '' && data != null && data != undefined) {
            const {id, name, description, icon, color} = data
            const query = `UPDATE mis_inventory.items SET name = ?, description = ?, icon = ?, color = ? WHERE id = ?`;
        
            mysql.query(query, [name, description, icon, color, id], (err, results) => {
                return err ? reject(err) : resolve(results);
            })
        } else {
            reject(new Error('Invalid data')); 
        }
    })
}

export default db;