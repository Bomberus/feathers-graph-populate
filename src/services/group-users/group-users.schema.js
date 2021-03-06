
// Define the Feathers schema for service `groupUsers`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'GroupUsers',
  description: 'GroupUsers database.',
  // !end
  // !code: schema_definitions
  fakeRecords: 10,
  // !end

  // Required fields.
  required: [
    // !code: schema_required // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    userId: {
      type: 'ID',
      faker: { fk: 'users:next:_id' }
    },
    userFirstName: {
      type: 'string',
      faker: { fk: 'users:next:firstName' }
    },
    userLastName: {
      type: 'string',
      faker: { fk: 'users:next:lastName' }
    },
    orgId: {
      type: 'ID',
      faker: { fk: 'orgs:next:_id' }
    },
    orgName: {
      type: 'string',
      faker: { fk: 'orgs:next:name' }
    },
    groupId: {
      type: 'ID',
      faker: { fk: 'groups:next:_id' }
    },
    groupName: {
      type: 'string',
      faker: { fk: 'groups:next:name' }
    }
    // !end
  },
  // !code: schema_more // !end
}

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'GroupUser',
    service: {
      sort: { _id: 1 },
    },
    // sql: {
    //   sqlTable: 'GroupUsers',
    //   uniqueKey: '_id',
    //   sqlColumn: {
    //     __authorId__: '__author_id__',
    //   },
    // },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !<DEFAULT> code: graphql_add
      // __author__: { type: '__User__!', args: false, relation: { ourTable: '__authorId__', otherTable: '_id' } },
      // !end
    },
    // !code: graphql_more // !end
  },
}

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports
  populates: {
    user: {
      service: 'users',
      nameAs: 'user',
      keyHere: 'userId',
      keyThere: '_id',
      asArray: false,
      params: {}
    },
    org: {
      service: 'orgs',
      nameAs: 'org',
      keyHere: 'orgId',
      keyThere: '_id',
      asArray: false,
      params: {}
    },
    group: {
      service: 'groups',
      nameAs: 'group',
      keyHere: 'groupId',
      keyThere: '_id',
      asArray: false,
      params: {}
    },

  }
  // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
