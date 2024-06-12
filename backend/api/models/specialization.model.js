const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Specialization = connection.define(
  "specialization", // Nombre de la tabla en la base de datos
  {
    // Columnas de la tabla
    name: {
      type: DataTypes.STRING,
      allowNull: false, // campo obligatorio
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Specialization;
