const CustomerData = require('../models/customerData')

const customerDataController = {}

customerDataController.add = (req, res) => {
    const body = req.body
    const customerdata = new CustomerData(body)
    customerdata.save()
                .then((data) => {
                    res.json(data)
                })
                .catch((err) => {
                    res.json(err)
                })
}

customerDataController.list = (req, res) => {
    CustomerData.find()
                .then((data) => {
                    res.json(data)
                })
                .catch((err) => {
                    res.json(err)
                })
}


module.exports = customerDataController