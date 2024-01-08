import Products from "../models/products.js"

// create products
export const createProduct = async (req, res) => {
    try {
        const newProduct=new Products({
            title:req.body.title,
            price:req.body.price
        })
        await newProduct.save()
        res.send(newProduct)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// get products
export const getProduct = async (req, res) => {
    try {
        const products = await Products.find()
        res.send(products)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//get product by id
export const getProductById = async (req, res) => {
    try {
        const {id}=req.params
        const product = await Products.findById(id)
        res.send(product)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// delete products
export const deleteProduct = async (req, res) => {
    try {
        const {id}=req.params
        await Products.findByIdAndDelete(id)
        res.status(200).json('product deleted')
    } catch (error) {
        res.status(500).json({message:error})
    }
}


// update products
export const updateProduct = async (req, res) => {
    try {
        const {id}=req.params
        const updatedProduct=await Products.findByIdAndUpdate(id,req.body)
        await updatedProduct.save()
        res.status(200).json('product update')
    } catch (error) {
        res.status(500).json({message:error})
    }
}