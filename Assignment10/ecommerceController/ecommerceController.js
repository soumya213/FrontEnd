let mongoose=require('mongoose')
let model=require('../models/Ecommerce')
let response=require('../libs/responseLib')
let shortId=require('shortid')
let check = require('../libs/checkLib')
let logger = require('../libs/loggerLib')


let ecommerceModel=mongoose.model('ecommerce')
let cartModel=mongoose.model('cart')

let inside=(req,res)=>{
    res.send('Inside product conroller')
}

//Get All Product
let getAllProducts=(req,res)=>{
    ecommerceModel.find().select("-_id -__v").exec((err,result)=>{
        if (err) {
            logger.error(err.message,'Controller:getAllProducts',10)
            let apiResponse=response.generate(true,'Failed to find Product',500,null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)) {
            logger.info('No Product Found','Controller:getAllProducts')
            let apiResponse=response.generate(true,'No product Present',404,null)
            res.send(apiResponse)
        }
        else{
            let apiResponse=response.generate(false,'product Found',200,result)
            res.send(apiResponse)
        }
    })
}

//Create Product
let createProduct=(req,res)=>{
    let createdData=Date.now()
    let productId=shortId.generate()

    let newProduct= new ecommerceModel({
        productId:productId,
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productCategory:req.body.productCategory,
        productDescription:req.body.description,
        created:createdData
    })

    let featureAndDetails=(req.body.featureAndDetails!=undefined && req.body.featureAndDetails!=null && req.body.featureAndDetails!='')?req.body.featureAndDetails.split(','):[]
    newProduct.productFeaturesAndDetails=featureAndDetails

    newProduct.save((err,result)=>{
        if (err) {
            logger.error(err.message,'Controller:createProduct',10)
            let apiResponse=response.generate(true,'Product not created',500,null)
            res.send(apiResponse)
        } else {
            let apiResponse=response.generate(false,'Product created',200,result)
            res.send(apiResponse)
        }
    })
}

//Get single Product
let singleProduct=(req,res)=>{
    ecommerceModel.find({productId:req.params.productId}).select("-_id -__v").exec((err,result)=>{
        if (err) {
            logger.error(err.message,'Controller:singleProduct',10)
            let apiResponse=response.generate(true,'Failed to find Product',500,null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)) {
            logger.error('No product Present','Controller:singleProduct')
            let apiResponse=response.generate(true,'No product Present',404,null)
            res.send(apiResponse)
        }
        else{
            let apiResponse=response.generate(false,'Product Found',200,result)
            res.send(apiResponse)
        }
    })
}

//edit Product
let editProduct=(req,res)=>{
    let options=req.body
    console.log(options)
    ecommerceModel.update({'productId':req.params.productId},options,{multi:true}).exec((err,result)=>{
       if (err) {
        logger.error(err.message,'Controller:editProduct',10)
        let apiResponse=response.generate(true,'Failed to find Product',500,null)
        res.send(apiResponse)
       } else {
        let apiResponse=response.generate(false,'Product Edited Successfully',200,result)
        res.send(apiResponse)
       } 
    })
}

//delete Product need modification
let deleteProduct=(req,res)=>{
    ecommerceModel.remove({productId:req.params.productId},(err,result)=>{
        if (err) {
            logger.error(err.message,'Controller:deleteProduct',10)
            let apiResponse=response.generate(true,'Failed to find Product',500,null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)) {
            logger.info('No Product Found','Controller:deleteProduct')
            let apiResponse=response.generate(true,'No Product Present',404,null)
            res.send(apiResponse)
        }
        else{
            let apiResponse=response.generate(false,'Product Deleted Successfully',200,result)
            res.send(apiResponse)
        }
    })
}

//Add Product to cart
let cartAddProduct=(req,res)=>{
    var newCart= new cartModel({})
    ecommerceModel.find({'productId':req.params.productId}).exec((err,result)=>{
        if (err) {
            logger.error(err.message,'Controller:cartAddProduct',10)
            let apiResponse=response.generate(true,'Failed to find Product',500,null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)) {
            logger.info('No Product Found','Controller:cartAddProduct')
            let apiResponse=response.generate(true,'No product Present',404,null)
            res.send(apiResponse)
        }
        else{
            let apiResponse=response.generate(false,'product Added To Cart',200,result)
            res.send(apiResponse)
            newCart.productId=result[0].productId
            newCart.productName=result[0].productName
            newCart.productCategory=result[0].productCategory
            newCart.productDescription=result[0].productDescription
            newCart.productFeaturesAndDetails=result[0].productFeaturesAndDetails
            newCart.productPrice=result[0].productPrice
            newCart.save()            
        }   
    })
}

//getAllCartProduct
let getAllCartProduct=(req,res)=>{
    cartModel.find().select("-_id -__v").exec((err,result)=>{
        if (err) {
            console.log('Some Error occured');
            logger.error(err.message,'Controller:getAllCartProduct',10)
            let apiResponse=response.generate(true,'Failed to find Product',500,null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)) {
            logger.info('No Product Found','Controller:getAllCartProduct')
            let apiResponse=response.generate(true,'No product Present',404,null)
            res.send(apiResponse)
        }
        else{
            let apiResponse=response.generate(false,'Product in cart found',200,result)
            res.send(apiResponse)
        }
    })
}

let removeProductFromCart=(req,res)=>{
    cartModel.remove({'productId':req.params.productId},(err,result)=>{
        if (err) {
            logger.error(err.message,'Controller:removeProductFromCart',10)
            let apiResponse=response.generate(true,'Failed to find Product',500,null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)) {
            logger.info('No Product Found','Controller:removeProductFromCart')
            let apiResponse=response.generate(true,'No Product Present',404,null)
            res.send(apiResponse)
        }
        else{
            let apiResponse=response.generate(false,'Product deleted from Cart',200,result)
            res.send(apiResponse)
        }
    })
}

let increaseCount=(req,res)=>{
    ecommerceModel.findOne({'productId':req.params.productId},(err,result)=>{
        if (err) {
            logger.error(err.message,'Controller:increaseCount',10)
            let apiResponse = response.generate(true, 'Failed to find product', 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Product Not Found', 404, null)
            logger.info('No Product Found','Controller:increaseCount')
            res.send(apiResponse)
        }
        else{
            result.views+=1
            result.save()
            let apiResponse=response.generate(false,'Product views Updated',200,result)
            res.send(apiResponse)
        }
    })
    // cartModel.findOne({'productId':req.params.productId},(err,result)=>{
    //         result.views+=1
    //         result.save((err,result)=>{
    //             if (err) {
    //                 logger.error(err.message,'Controller:increaseCount',10)
    //                 let apiResponse = response.generate(true, 'Error Occured.', 500, null)
    //                 res.send(apiResponse)
    //             } else {
    //                 let apiResponse=response.generate(false,'Product views Updated',200,result)
    //                 res.send(apiResponse)
    //             }
    //         })
    // })
}

module.exports={
    inside:inside,
    getAllProducts:getAllProducts,
    createProduct:createProduct,
    singleProduct:singleProduct,
    editProduct:editProduct,
    deleteProduct:deleteProduct,
    cartAddProduct:cartAddProduct,
    getAllCartProduct:getAllCartProduct,
    removeProductFromCart:removeProductFromCart,
    increaseCount:increaseCount
}