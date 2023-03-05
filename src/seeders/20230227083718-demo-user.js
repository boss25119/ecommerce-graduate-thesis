'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: '  Nguyen Tat',
      lastName: 'Bao Ngoc',
      email: 'baongoc2511999@gmail.com',
      password: 'abc123',
      address: 'Bac Ninh',
      gender: 'Male',
      roleid: '0',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
