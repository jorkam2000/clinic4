const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Appointment = connection.define(
  "appointment", // Nombre de la tabla en la base de datos
  {
    // Columnas de la tabla
    date: {
      type: DataTypes.DATE,
      allowNull: false, // campo obligatorio
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false, // campo obligatorio
      unique: true, // Hacemos que sea un campo con valor único
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // campo obligatorio
      defaultValue: true,
    },
    medical_observation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medical_evaluation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medical_prescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Appointment;
