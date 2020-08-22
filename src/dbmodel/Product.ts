import BaseModel from './BaseModel'
const productSchema = {
    name: {
        type: String
    },
    id: {
        type: Number
    },
    description: {
        type: String
    },
    sku: {
        type: String
    },
    avlQty: {
        type: Number
    }
}

class Product extends BaseModel {
    constructor() {
        super(productSchema)
    }
}

const productModel = new Product()
export default productModel.getModel('Product')