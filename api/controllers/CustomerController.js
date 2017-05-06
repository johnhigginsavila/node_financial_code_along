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
    Customer.findOne(req.param('id'))
      .populateAll()
      .then(function(customer){
      if(!customer){
        return next();
      }else{
        res.view({customer:customer});
      }
    }).catch(function(err){
      return next(err);
    })
  },
  index: function(req, res, next){
    Customer.find().then(function(customers){
      res.view({customers: customers});
    }).catch(function(err){
      return next(err);
    })
  },
  edit: function(req, res, next){
    Customer.findOne(req.param('id'))//returns an object
      .then(function(customer){
      if(!customer){
        return next();
      }else{
        res.view({customer: customer});
      }
    }).catch(function(err){
      return next(err);
    })
  },
  update: function(req, res, next){
    Customer.update(req.param('id'), req.params.all())//update returns an array
      .then(function(customer){
      res.redirect('/customer/show/'+customer[0].id);
    }).catch(function(err){
      return res.redirect('/customer/edit/'+req.param('id'));
    })
  },
  destroy: function(req, res, next){
    Customer.destroy(req.param('id'))
      .then(function(){
      res.redirect('/customer/');
    }).catch(function(err){
      return next(err);
    })
  }
};

