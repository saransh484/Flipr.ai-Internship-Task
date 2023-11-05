const purchase_order_model = require('../models/purchase.order.model')

exports.all_purch_ship = async (req, res)=>{
    await purchase_order_model.aggregate([
        {
          $lookup: {
            from: 'shipping_details', // The name of the "shipping" collection
            localField: 'purchase_order_id',
            foreignField: 'purchase_order_id',
            as: 'shipmentDetails',
          },
        },
        {
          $project: {
            _id: 0,
            purchaseOrderId: '$purchase_order_id',
            productName: '$product_name',
            quantity: '$quantity',
            shipmentDetail: {
              address: '$shipmentDetails.address',
              city: '$shipmentDetails.city',
              pincode: '$shipmentDetails.pincode',
            },
          },
        },
      ])
      .exec()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
}