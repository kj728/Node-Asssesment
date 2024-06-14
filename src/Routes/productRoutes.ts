
import { Router } from 'express';

import { addProduct,getProducts} from '../Controllers/ProductController';


const productRouter = Router()

productRouter.post('',addProduct);
productRouter.get('',getProducts);

export default productRouter;


