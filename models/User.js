const {Model, DataTypes} = require('sequelize');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');


class User extends model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
} User.init({id: {}})
