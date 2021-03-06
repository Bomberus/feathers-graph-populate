
/* eslint quotes: 0 */
// Defines Mongoose model for service `tasks`. (Can be re-generated.)
const merge = require('lodash.merge')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    name: String,
    ownerIds: [
      {
        type: mongoose.Schema.Types.ObjectId
      }
    ],
    childTaskIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        maxItems: 5
      }
    ]
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
