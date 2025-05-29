import express from 'express';
import { ProductActor } from '../actor/ProductActor/ProductActor';

export const productRouter = express.Router()

productRouter.post("/create_product", ProductActor.createProduct)
productRouter.post("/create_filter_item", ProductActor.createProductFilterItem);
productRouter.post("/find_product", ProductActor.findProduct);