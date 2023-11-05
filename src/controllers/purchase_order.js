const purchase_order_model = require('../models/purchase.order.model')


exports.purchase_order = async (req,res) =>{
    const {product_name, quantity, pricing, mrp, customer_id} = req.body

    let purchase_order_id = "purchase_id" + Math.random().toString(16).slice(2)

    if(pricing<= mrp){
            try {
                const details = purchase_order_model.create({
                    product_name,
                    quantity,
                    pricing,
                    mrp,
                    purchase_order_id,
                    customer_id 
                })
                res.status(200).send({ ok: true });
            } catch (error) {
                res.send(error)
            }
           
          }
    }
