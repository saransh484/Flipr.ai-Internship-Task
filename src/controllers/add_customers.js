const customer_details_model = require('../models/customer.info.model')

exports.customer_detail = async (req, res) =>{
    const {customer_name, email, mobile_number, city} = req.body

    let customer_id = "customer_id" + Math.random().toString(16).slice(2)

    try {
        const details = await customer_details_model.create({
            customer_name,
            email,
            mobile_number,
            city,
            customer_id
        })
        res.status(200).send({ ok: true });
    } catch (error) {
        res.send(error)
    }
}