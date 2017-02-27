'use strict';

// the base loopback models
const models = ['Client', 'ChatMessage'];

module.exports = function updateBaseModels (app, next) {
  // reference to our datasource
  const mysql = app.dataSources.mysql;

  // check to see if the model is out of sync with DB
  mysql.isActual(models, (err, actual) => {
    if (err) {
      throw err;
    }

    let syncStatus = actual ? 'in sync' : 'out of sync';
    console.log('');
    console.log(`Custom models are ${syncStatus}.`);
    console.log('');

    // if the models are in sync, move along
    if (actual) {
      return next();
    }

    console.log('Migrating Custom Models...');

    // update the models
    mysql.autoupdate(models, (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Custom models migration successful!');
      console.log('');
      next();
    });
  });
};
