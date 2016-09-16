/**
 * Release.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type:'string',
  		enum: ['undefined', 'BW5.0', 'BW4.0'],
  		defaultsTo: 'undefined' 
  	},
  	builds: {
  		collection: 'build',
  		via: 'release'
  	}
  }
};

