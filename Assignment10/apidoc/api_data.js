define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/cartadd/:productId",
    "title": "create product using product Id of previously created product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Added To Cart\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tcreated: \"Date\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductReview: \"string\",\n\t\t\t\t\t\tproductFeaturesAndDetails: object(type = array),\n\t\t\t\t\t\tproductDescription: \"string\",\n                        productPrice: number,\n                        productCategory:\"string\",\n                        productName:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "create",
    "name": "PostApiV1CartaddProductid"
  },
  {
    "type": "post",
    "url": "/api/v1/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of the product is passed as a body parameter (example: Philips Trimmer)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>Price of the product is passed as a body parameter (example: 1050)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCategory",
            "description": "<p>Category of the product is passed as a body parameter (example: Electronics)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>description of the product is passed as a body parameter (example: Skin-friendly &amp; High Performance)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "featureAndDetails",
            "description": "<p>of the product is passed as a body parameter (example: &quot;Brand&quot;:&quot;Philips&quot;,&quot;Model Number&quot;:&quot;QT4005/15&quot;,&quot;Type&quot;:&quot;Cordless&quot;,&quot;Color&quot;:&quot;Black&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        productId: \"string\",\n\t\t\t\t\t\tcreated: \"Date\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductReview: \"string\",\n\t\t\t\t\t\tproductFeaturesAndDetails: object(type = array),\n\t\t\t\t\t\tproductDescription: \"string\",\n                        productPrice: number,\n                        productCategory:\"string\",\n                        productName:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Product not created\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "create",
    "name": "PostApiV1Create"
  },
  {
    "type": "post",
    "url": "/api/v1/delete/:productId",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product is passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "delete",
    "name": "PostApiV1DeleteProductid"
  },
  {
    "type": "post",
    "url": "/api/v1/deleteCart/:productId",
    "title": "Delete product by productId from cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product is passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product deleted from Cart\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "delete",
    "name": "PostApiV1DeletecartProductid"
  },
  {
    "type": "put",
    "url": "/api/v1/edit/:productId",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Edited Successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tcreated: \"Date\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductReview: \"string\",\n\t\t\t\t\t\tproductFeaturesAndDetails: object(type = array),\n\t\t\t\t\t\tproductDescription: \"string\",\n                        productPrice: number,\n                        productCategory:\"string\",\n                        productName:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "edit",
    "name": "PutApiV1EditProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/find/:productId",
    "title": "Get product by productId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        productId: \"string\",\n\t\t\t\t\t\tcreated: \"Date\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductReview: \"string\",\n\t\t\t\t\t\tproductFeaturesAndDetails: object(type = array),\n\t\t\t\t\t\tproductDescription: \"string\",\n                        productPrice: number,\n                        productCategory:\"string\",\n                        productName:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "read",
    "name": "GetApiV1FindProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/getAllCartProducts",
    "title": "Get all Products in cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product in cart found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tcreated: \"Date\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductReview: \"string\",\n\t\t\t\t\t\tproductFeaturesAndDetails: object(type = array),\n\t\t\t\t\t\tproductDescription: \"string\",\n                        productPrice: number,\n                        productCategory:\"string\",\n                        productName:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "read",
    "name": "GetApiV1Getallcartproducts"
  },
  {
    "type": "get",
    "url": "/api/v1/getAllProducts",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Product Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        \n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tcreated: \"Date\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductReview: \"string\",\n\t\t\t\t\t\tproductFeaturesAndDetails: object(type = array),\n\t\t\t\t\t\tproductDescription: \"string\",\n                        productPrice: number,\n                        productCategory:\"string\",\n                        productName:\"string\"\n\n\t\t\t\t\t}\n\t    \t\t]\n\t    \n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "read",
    "name": "GetApiV1Getallproducts"
  },
  {
    "type": "get",
    "url": "/api/v1//count/view/:productId",
    "title": "Increase Product view Count",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product views Updated\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tcreated: \"Date\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductReview: \"string\",\n\t\t\t\t\t\tproductFeaturesAndDetails: object(type = array),\n\t\t\t\t\t\tproductDescription: \"string\",\n                        productPrice: number,\n                        productCategory:\"string\",\n                        productName:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecommerce.js",
    "groupTitle": "update",
    "name": "GetApiV1CountViewProductid"
  }
] });
