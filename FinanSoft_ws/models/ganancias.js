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
    total_hoy: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      comment: null,
      primaryKey: false,
      field: "total_hoy",
      autoIncrement: false
    },
    total_semana: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      comment: null,
      primaryKey: false,
      field: "total_semana",
      autoIncrement: false
    },
    total_mes: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      comment: null,
      primaryKey: false,
      field: "total_mes",
      autoIncrement: false
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
    tableName: "ganancias",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const GananciasModel = sequelize.define("ganancias_model", attributes, options);
  return GananciasModel;
};