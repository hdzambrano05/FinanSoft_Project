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
    telefono: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "telefono",
      autoIncrement: false
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "direccion",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
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
    tableName: "proveedores",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const ProveedoresModel = sequelize.define("proveedores_model", attributes, options);
  return ProveedoresModel;
};