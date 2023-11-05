const shipping_schema = require('../models/shipping.model')

exports.city_filter = async (req,res) => {
    const {city} = req.body

    try {
        await shipping_schema.aggregate([
            {
              $match: {
                city: city
              }
            }
          ])
          .exec()
          .then((customers) => {
            if (customers.length === 0) {
              console.log('No customers found in the selected city.');
              return;
            }
            res.status(200).send(customers);
          })
          .catch((err) => {
            console.error('Error fetching customers:', err);
          });
    } catch (error) {
        res.status(400).send(error);
    }

}