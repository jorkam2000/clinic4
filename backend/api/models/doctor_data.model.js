const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const DoctorData = connection.define(
  "doctor_data", // Nombre de la tabla en la base de datos
  {
    // Columnas de la tabla
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = DoctorData;
