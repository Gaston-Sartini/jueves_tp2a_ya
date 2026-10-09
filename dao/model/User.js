import { DataTypes, Model } from "sequelize";
import sequelize from "../../connection/sequelize.js";

class User extends Model {}


User.init({
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
        validate:{
            len:[3,100],  
            isAlpha: true,
        }
    },
    email:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,  
        }  
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false,
        validate:{
            isAlphanumeric:true,
            len:[6,100],
        }  
    }
},{
    sequelize,
    modelName:'User',
})



export default User
    