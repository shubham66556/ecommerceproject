const path = require('path');

const express = require('express');
var cors  = require('cors');
const bodyParser = require('body-parser');
  const errorController = require('./controllers/error');
  const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const app = express();
const Cart  = require('./models/cart');
const CartItem = require('./models/cart-item');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors())
// const adminData = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.json());

const ContactusRoutes= require('./routes/Contactus');
const successRoutes = require('./routes/success');
const { devNull } = require('os');
// const Product = require('./models/product');
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use((req,res,next)=>{
User.findByPk(1).then(user=>{
  req.user = user;
  next();
}).catch(err=>console.log(err));
})
// app.use('/admin', adminData.routes);


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(ContactusRoutes);
app.use(successRoutes);



app.use(errorController.get404);

  
//   app.use('/succcess',successRoutes);

//  app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', 'success.html'));
// });

 
// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });


Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product,{through:CartItem});
Product.belongsToMany(Cart,{through:CartItem});

sequelize
// .sync({force:true})
.sync()
.then(result=>{
  // console.log(result);
  return User.findByPk(1);
  
})
.then(user=>{
  if(!user){
   return User.create({name:'Max',email:'max@gmail.com'});
  }
  return user;
})
.then(user=>{
// console.log(user);
return user.createCart();

})
.then(cart=>{
  app.listen(7000);
})
.catch(err=>{
console.log(err);
});












