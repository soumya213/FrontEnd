const ecommerceController=require('../ecommerceController/ecommerceController')
const config = require('../config/appConfig')
const auth=require('../middleware/auth')

let setRouter=(app)=>{

    baseUrl=config.apiVersion

    app.get(baseUrl+'/getAllProducts',auth.isAuthenticated,ecommerceController.getAllProducts)
    
    /**
	 * @api {get} /api/v1/getAllProducts Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Product Details Found",
	    "status": 200,
	    "data": [
					{
                        
						productId: "string",
						created: "Date",
						views: number,
						productReview: "string",
						productFeaturesAndDetails: object(type = array),
						productDescription: "string",
                        productPrice: number,
                        productCategory:"string",
                        productName:"string"

					}
	    		]
	    
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */
    
    app.post(baseUrl+'/create',auth.isAuthenticated,ecommerceController.createProduct)

    /**
	 * @api {post} /api/v1/create Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productName Name of the product is passed as a body parameter (example: Philips Trimmer)
	 * @apiParam {Number} productPrice Price of the product is passed as a body parameter (example: 1050)
	 * @apiParam {String} productCategory Category of the product is passed as a body parameter (example: Electronics)
	 * @apiParam {String} productDescription description of the product is passed as a body parameter (example: Skin-friendly & High Performance)
     * @apiParam {array} featureAndDetails of the product is passed as a body parameter (example: "Brand":"Philips","Model Number":"QT4005/15","Type":"Cordless","Color":"Black")
	 *   
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product created",
	    "status": 200,
	    "data": [
					{
                        productId: "string",
						created: "Date",
						views: number,
						productReview: "string",
						productFeaturesAndDetails: object(type = array),
						productDescription: "string",
                        productPrice: number,
                        productCategory:"string",
                        productName:"string"
					}
	    		]
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Product not created",
	    "status": 500,
	    "data": null
	   }
	 */


    app.get(baseUrl+'/find/:productId',auth.isAuthenticated,ecommerceController.singleProduct)
    /**
	 * @api {get} /api/v1/find/:productId Get product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found",
	    "status": 200,
	    "data": [
					{
                        productId: "string",
						created: "Date",
						views: number,
						productReview: "string",
						productFeaturesAndDetails: object(type = array),
						productDescription: "string",
                        productPrice: number,
                        productCategory:"string",
                        productName:"string"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */
    
    app.put(baseUrl+'/edit/:productId',auth.isAuthenticated,ecommerceController.editProduct)
    
    /**
	 * @api {put} /api/v1/edit/:productId Edit product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Edited Successfully",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						created: "Date",
						views: number,
						productReview: "string",
						productFeaturesAndDetails: object(type = array),
						productDescription: "string",
                        productPrice: number,
                        productCategory:"string",
                        productName:"string"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */



    app.post(baseUrl+'/delete/:productId',auth.isAuthenticated,ecommerceController.deleteProduct)
    /**
	 * @api {post} /api/v1/delete/:productId Delete product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId of the product is passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/cartadd/:productId',auth.isAuthenticated,ecommerceController.cartAddProduct)

    /**
	 * @api {post} /api/v1/cartadd/:productId create product using product Id of previously created product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Added To Cart",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						created: "Date",
						views: number,
						productReview: "string",
						productFeaturesAndDetails: object(type = array),
						productDescription: "string",
                        productPrice: number,
                        productCategory:"string",
                        productName:"string"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/getAllCartProducts',auth.isAuthenticated,ecommerceController.getAllCartProduct)
    /**
	 * @api {get} /api/v1/getAllCartProducts Get all Products in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product in cart found",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						created: "Date",
						views: number,
						productReview: "string",
						productFeaturesAndDetails: object(type = array),
						productDescription: "string",
                        productPrice: number,
                        productCategory:"string",
                        productName:"string"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/deleteCart/:productId',auth.isAuthenticated,ecommerceController.removeProductFromCart)
    /**
	 * @api {post} /api/v1/deleteCart/:productId Delete product by productId from cart
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId of the product is passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product deleted from Cart",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/count/view/:productId',auth.isAuthenticated,ecommerceController.increaseCount)
    /**
	 * @api {get} /api/v1//count/view/:productId Increase Product view Count
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product views Updated",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						created: "Date",
						views: number,
						productReview: "string",
						productFeaturesAndDetails: object(type = array),
						productDescription: "string",
                        productPrice: number,
                        productCategory:"string",
                        productName:"string"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find Product",
	    "status": 500,
	    "data": null
	   }
	 */
    


}

module.exports={
    setRouter:setRouter
}