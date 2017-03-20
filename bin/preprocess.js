function Preprocess(){

  var that = this;
  that.store = [];

  var findProductById = function( req ){
    var found = that.store.filter( function( p ){
      return p.Id === parseInt( req.params.id );
    });
    if( found && foudn.length > 0 ){
      return found[0];
    }
    return null;
  };

  this.get = function( req, res, next ){
    // res.send(200, that.store); EXPRESS DEPRECATED
    res.status(200).send(that.store);
  };

  this.post = function( req,res, next ){

  };

  this.put = function( req,res, next ){

  };

  this.delete = function( req,res, next ){

  };

};

module.exports = new Preprocess();
