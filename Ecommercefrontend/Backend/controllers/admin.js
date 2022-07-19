
const Product = require('../models/product');
// const products = [];
const rootdir = require('../util/path');


const path = require('path');
  exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
    
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description,
    
  })
 .then(result=>{
    console.log(result);
    res.redirect('/admin/products');
  }).catch(err=>{
    console.log(err);
  });
 
};
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user.getProducts({where: {id:prodId}})
  // Product.findByPk(prodId)
    .then(product => {
      product = products[0];
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};


exports.getProducts = (req, res, next) => {
 req.user.getProducts().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err=>console.log(err));
};


exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy();
    })
    .then(result => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};


// exports.getAddProduct=(req, res, next) => {
//     res.render('add-product', {
//       pageTitle: 'Add Product',
//       path: '/admin/add-product',
//       formsCSS: true,
//       productCSS: true,
//       activeAddProduct: true
//     });
//   }
//   exports.postAddproduct=(req, res, next) => {
//     products.push({ title: req.body.title });
//     res.redirect('/');
//   }

  


exports.getContact=(req, res, next) => {
  
    res.render('Contactus', {
      prods: products,
      pageTitle: 'Contactus',
      path: '/Contactus',
     
      
      productCSS: true
    });
  }

  exports.postcontact =(req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  }

  exports.successmessage=(req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
  };
  
















//   exports.getAddProduct = (req, res, next) => {
//   res.render('admin/add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true
//   });
// };

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(title, imageUrl, description, price);
//   product.save();
//   res.redirect('/');
// };

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('admin/products', {
//       prods: products,
//       pageTitle: 'Admin Products',
//       path: '/admin/products'
//     });
//   });
// };
