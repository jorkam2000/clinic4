const User = require("../api/models/user.model");
const Insurance = require("../api/models/insurance.model");
const Patient = require("../api/models/patient.model");
const Specialization = require("../api/models/specialization.model");
const Appointment = require("../api/models/appointment.model");
const DoctorData = require("../api/models/doctor_data.model");

const defineRelations = () => {
  User.hasOne(Patient);
  Patient.belongsTo(User);

  Insurance.hasOne(Patient);
  Patient.belongsTo(Insurance);

  Patient.hasMany(Appointment);
  Appointment.belongsTo(Patient);

  User.belongsToMany(Specialization, {
    through: "doctor_data", // Se generará la tabla intermedia con el nombre 'doctor_data'
    timestamps: false,
  });
  Specialization.belongsToMany(User, {
    through: "doctor_data",
    timestamps: false,
  });
};

module.exports = defineRelations;
