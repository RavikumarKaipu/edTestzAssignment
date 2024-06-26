const { DataTypes } = require('sequelize');
const sequelize = require('/database');
const User = require('./user');

const Appointment = sequelize.define('Appointment', {
  appointment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Appointment.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Appointment;
