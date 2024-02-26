const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
        ],
    amount:{type:Number, required:true},
    address:{type:Object, required:true},
    status:{type:String, default:"pending"},
       
        //createdAt:Date.now()   not neccecary you can use timestamps like below
    }
    ,{timestamps: true });

    module.exports = mongoose.model("Order",OrderSchema)