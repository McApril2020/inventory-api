import express from 'express';
import itemRouter from './routes/items.mjs'
import perItemRouter from './routes/perItem.mjs'
import addItem from './routes/add.mjs'
import updateItem from './routes/update.mjs';
import delItem from './routes/del.mjs';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173' 
}));

app.use('/api/mini-inventory',itemRouter);
app.use('/api/mini-inventory',perItemRouter);
app.use('/api/mini-inventory',addItem);
app.use('/api/mini-inventory',updateItem);
app.use('/api/mini-inventory',delItem);

app.listen(PORT, () => {
    console.log(`Application running at port ${PORT}`)
})