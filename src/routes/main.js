const express = require('express')
const router = express.Router()

const {customer_detail} = require('../controllers/add_customers')
const { purchase_order } = require('../controllers/purchase_order')
const { shipping } = require('../controllers/shipping_details')
const { city_filter } = require('../controllers/customer_city_filter')
const { all_purchase } = require('../controllers/all_purchase_order')
const { all_purch_ship } = require('../controllers/all_purchase_w_shipment')


router.post('/customer_details', customer_detail)
router.post('/purchase_order', purchase_order)
router.post('/shipping', shipping)
router.get('/city_filter', city_filter)
router.get('/all_purchase', all_purchase)
router.get('/all_purchase_w_shipment', all_purch_ship)



module.exports = router