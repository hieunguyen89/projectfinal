import mongoose, {models} from 'mongoose'

const productsSchema= new mongoose.Schema({
    name:{
            type: String,
            required: true
    },
    price:{
        type: String,
        required: true
    },
    mediaUrl:{
        type: String,
        required: true
    },
    desciption:{
         type: String,
        required: true
    },
})

export default mongoose.models.product 