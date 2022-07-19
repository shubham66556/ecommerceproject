const Sequelize = require('sequelize');
const sequelize= new Sequelize('node-complete','root','Bharuchcity6@',{
    dialect:'mysql',
    host: 'localhost'});

    module.exports = sequelize;
    
    