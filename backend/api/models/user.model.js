const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const User = connection.define(
  "user", // Nombre de la tabla en la base de datos
  {
    // Columnas de la tabla
    name: {
      type: DataTypes.STRING,
      allowNull: false, // campo obligatorio
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false, // campo obligatorio
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // campo obligatorio
      unique: true, // Hacemos que sea un campo con valor único
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // campo obligatorio
    },
    role: {
      type: DataTypes.ENUM("admin", "user", "doctor"),
      defaultValue: "user", // Hacemos que su valor por defecto sea 'user'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
