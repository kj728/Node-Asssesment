import productRouter from './Routes/productRoutes';
import express, { json } from 'express';

const app = express();
app.use(json());

app.use("/products", productRouter);

app.listen(4000, () => {

    console.log('Server is running on port 4000');
})