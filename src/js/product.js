import { getParam } from './utils.mjs';
import productDetails from './productDetails.mjs';

const productId = getParam();
productDetails(productId);
