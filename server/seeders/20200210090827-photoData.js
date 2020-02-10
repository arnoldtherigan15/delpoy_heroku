'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Photos',[
     { url: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&q=80',createdAt:new Date,updatedAt:new Date },
     { url: 'https://images.unsplash.com/photo-1529088363398-8efc64a0eb95?ixlib=rb-1.2.1&auto=format&fit=crop&w=424&q=80',createdAt:new Date,updatedAt:new Date},
     { url : 'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',createdAt:new Date,updatedAt:new Date},
     { url: 'https://images.unsplash.com/photo-1534432586043-ead5b99229fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=392&q=80',createdAt:new Date,updatedAt:new Date}
    ],{})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Photos',null,{})
  }
};
