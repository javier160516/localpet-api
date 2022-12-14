import { DataTypes, Sequelize } from "sequelize";
import bcrypt from 'bcrypt';
import db from "../config/db.js";

const Users = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idRol: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    token: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
}, {
    hooks: {
        beforeCreate: async function(user){
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
});

export default Users;