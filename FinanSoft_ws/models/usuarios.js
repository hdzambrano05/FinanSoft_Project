const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false,
      unique: "usuarios_email_key"
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    rol: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "empleado",
      comment: null,
      primaryKey: false,
      field: "rol",
      autoIncrement: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "fecha_creacion",
      autoIncrement: false
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "fecha_actualizacion",
      autoIncrement: false
    },
    fecha_eliminacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fecha_eliminacion",
      autoIncrement: false
    },
    estado: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: "activo",
      comment: null,
      primaryKey: false,
      field: "estado",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "usuarios",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const UsuariosModel = sequelize.define("usuarios_model", attributes, options);
  return UsuariosModel;
};