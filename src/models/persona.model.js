module.exports = (sequelize, Sequelize) => {
    const persona = sequelize.define("persona", {   
      nombre:{
        type: Sequelize.STRING,
        allowNull:false 
      },      
      apellidoPaterno:{
        type: Sequelize.STRING,      
        allowNull:false  
      },
      apellidoMaterno:{
        type: Sequelize.STRING,      
        allowNull:false  
      },
      direccion:{
        type: Sequelize.STRING,      
        allowNull:false  
      },
      telefono:{
        type: Sequelize.STRING,      
        allowNull:false  
      }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName:"persona"
    });
  
    return persona;
  };