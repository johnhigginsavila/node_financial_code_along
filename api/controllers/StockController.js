/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res, next){
      Customer.findOne(req.param('owner')).then(function(customer){
        if(!customer){
          return next();
        }else{
          res.view({customer: customer});
        }
      }).catch(function(err){
        return next(err);
      })
    },
  create: function(req, res, next){
    Stock.create(req.params.all()).then(function(stock){
      res.redirect('/customer/show/'+stock.owner);
    }).catch(function(err){
      return next(err);
    })
  }
};

