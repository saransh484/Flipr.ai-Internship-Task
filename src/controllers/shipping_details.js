const shipping_schema = require('../models/shipping.model')

exports.shipping = async (req,res) =>{
        const {address, city, pincode, purchase_order_id, customer_id} = req.body

        try {
            const ship = await shipping_schema.create({
                address, city, pincode, purchase_order_id, customer_id
            })


            res.status(200).send({ ok: true });
        } catch (error) {
            res.status(400).send(error);
        }
}