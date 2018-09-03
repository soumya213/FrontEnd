const mongoose = require('mongoose')

const Schema=mongoose.Schema;

let ecommerceSchema=new Schema(
    {

    productId:{
        type:String,
        unique:true
    },
    
    productName:{
        type:String,
        default:''
    },
    productCategory:{
        type:String,
        default:''
    },
    productPrice:{
        type:Number,
        default:0
    },
    productDescription:{
        type:String,
        default:''
    },
    productFeaturesAndDetails:[],

    productReview:{
        type:String,
        default:''
    },
    views: {
        type: Number,
        default: 0
    },
    created:{
        type:Date,
        default:Date.now
    }
    }
)


let cartSchema=new Schema({
    productId:{
        type:String,
        unique:true
    },
    
    productName:{
        type:String,
        default:''
    },
    productCategory:{
        type:String,
        default:''
    },
    productPrice:{
        type:Number,
        default:0
    },
    productDescription:{
        type:String,
        default:''
    },
    productFeaturesAndDetails:[],

    productReview:{
        type:String,
        default:''
    },
    views: {
        type: Number,
        default: 0
    },
    created:{
        type:Date,
        default:Date.now
    }
})

mongoose.model('ecommerce',ecommerceSchema)
mongoose.model('cart',cartSchema)