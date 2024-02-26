const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId:{type:String , required:true},
        products: [
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default:1,
                    
                }
            }
        ]
       
        //createdAt:Date.now()   not neccecary you can use timestamps like below
    }
    ,{timestamps: true });

    module.exports = mongoose.model("Cart",CartSchema)