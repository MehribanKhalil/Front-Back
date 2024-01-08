import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controllers/products.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProduct);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);
 

export default router