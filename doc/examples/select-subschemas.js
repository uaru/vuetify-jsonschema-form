const id = 'select-subschemas'

const title = 'Selects of sub-schemas'

const description = `An object containing a \`oneOf\` with varying properties can be represented as a select used to switch between the sub-schemas.

A \`const\` property is required to be used as unique key of a \`oneOf\` element.`

const schema = {
  type: 'object',
  oneOf: [{
    title: `I'm a sub-schema`,
    properties: {
      schemaKey: { type: 'string', const: 'subSchema1', title: 'Select a sub-schema' },
      stringProp1: { type: 'string', title: `I'm a property in sub-schema 1` }
    }
  }, {
    title: `I'm another sub-schema`,
    properties: {
      schemaKey: { type: 'string', const: 'subSchema2' },
      stringProp2: { type: 'string', title: `I'm a property in sub-schema 2` }
    }
  }]
}

const model = {}

export default { id, title, description, schema, model }
