const purchase_order_model = require('../models/purchase.order.model')

exports.all_purchase = async (req,res) =>{
    await purchase_order_model.aggregate([
        {
          $group: {
            _id: '$customer_id',
            customerId: { $first: '$customer_id' },
            purchaseOrders: {
              $push: {
                purchaseOrderId: '$purchase_order_id',
                productName: '$product_name',
                quantity: '$quantity'
              }
            }
          }
        },
        {
          $project: {
            _id: 0,
            customerId: 1,
            purchaseOrders: 1
          }
        }
      ])
      .exec()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error('Error fetching and formatting data:', err);
      });
      
}