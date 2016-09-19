/**
 * Run.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,
  schema: true,
  connection: 'sqlserver',
  tableName: 'Run',
  attributes: {
  	id: {
      columnName: 'RunID',
  		type: 'integer',
  		primaryKey: true
  	},
    BwBuild: {
      type: 'string',
      size: 50
    },
    BwEnv: {
      type: 'string',
      size: 40
    },
    DeviceName: {
      type: 'string',
      size: 40
    },
    DeviceBuild: {
      type: 'string',
      size: 40
    },
    RunLabel: {
      type: 'string',
      size: 40
    },
    StartTime: {
      type: 'datetime'
    },
    FinishTime: {
      type: 'datetime'
    },
    BwafHostname: {
      type: 'string',
      size: 40
    },
  	project: {
  		model: 'project',
      columnName: 'ProjectID'
  		// columnName: 'ProjectID'
  	},
  	report: {
  		model: 'Report'
  	},
    result: {
      colleciton: 'result'
    }
  }
};

