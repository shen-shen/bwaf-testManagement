/**
 * Report.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	/*
  	one-to-many
  	*/
  	build: {
  		model: 'Build'
  	},
  	/*
  	one-to-many
  	*/
  	run: {
  		model: 'Run'
  	},
  	/*
  	one-to-many
  	*/
  	tests: {
  		collection: 'TestCase',
  		via: 'report'
  	},
  	/*
  	one-to-many
  	*/
  	// projects: {
  	// 	collection: 'Project',
  	// 	via: 'report'
  	// },
  	startTime: 'date',
    endTime: 'date',

    passTests: 'number',
    failTests: 'number',
    skipTests: 'number',
    unknownTests: 'number'
  }
};

