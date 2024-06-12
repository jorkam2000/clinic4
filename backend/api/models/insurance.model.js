const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Insurance = connection.define(
  "insurance", // Nombre de la tabla en la base de datos
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // campo obligatorio
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Insurance;
