/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res){
      res.view();
    },
  create: function(req, res, next){
    Customer.create(req.params.all())
      .then(function(customer){
      res.redirect('/customer/show/'+customer.id);
    }).catch(function(err){
      return next(err);
    })
  },
  show:function(req,res,next){
    Customer.findOne(req.param('id')).then(function(customer){
      if(!customer){
        return next();
      }else{
        res.view({customer:customer});
      }
    }).catch(function(err){
      return next(err);
    })
  }
};

