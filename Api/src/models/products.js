import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, require: true },
    price:{type:Number, require:true}
});
const Products = mongoose.model('Product', productSchema);

export default Products