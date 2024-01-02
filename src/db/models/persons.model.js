const {Model, DataType, DataTypes}=require('sequelize');

const PERSON_TABLE = 'persons';
class Person extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: PERSON_TABLE,
            modelName:'Person',
            timestamps:true

        }
    }
    
}

const PersonSchema ={
    id:{
        allowNull:false,
        autoIncrement:true,
        primarykey:true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        field:'nombre'
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        field:'apellido'
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field:'telefono'
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        field:'direccion'
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'fecha_nacimiento' // Cambiado a snake_case por convención
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field:'email'
      }          
}
module.exports = {Person, PersonSchema};