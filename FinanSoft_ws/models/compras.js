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
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "producto_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "productos_model"
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cantidad",
      autoIncrement: false
    },
    precio_compra: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "precio_compra",
      autoIncrement: false
    },
    proveedor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "proveedor_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "proveedores_model"
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "fecha",
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
    tableName: "compras",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const ComprasModel = sequelize.define("compras_model", attributes, options);
  return ComprasModel;
};