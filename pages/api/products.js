import mongodb from '../../util/mongodb'
import Product from '../../models/Product'

mongodb()

  export default (req,res) =>
  {
    Product.find().then(products=>{
      res.json(products)
    })
  }