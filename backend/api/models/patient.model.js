const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Patient = connection.define(
  "patient", // Nombre de la tabla en la base de datos
  {
    // Columnas de la tabla
    historical_record: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    insurance_number: {
      type: DataTypes.STRING,
      allowNull: false, // campo obligatorio
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Patient;
