const id = 'sections'

const title = 'Sections'

const description = `Children objects are rendered as sections if they have a title.

It is also possible to create sections without nesting levels in your schema by using \`allOf\`.

Alternatively you can simply insert titles using \`before\` slots (see the slots example).`

const schema = {
  type: 'object',
  properties: {
    objectSection1: {
      title: `I'm a section`,
      description: `I'm a description shown as a paragraph on top of section`,
      type: 'object',
      properties: {
        stringProp1: { type: 'string', title: `I'm a property in section 1` }
      }
    },
    objectSection2: {
      title: `I'm another section`,
      type: 'object',
      properties: {
        stringProp2: { type: 'string', title: `I'm a property in section 2` }
      },
      allOf: [{
        title: `I'm a subsection`,
        properties: {
          stringProp3: { type: 'string', title: `I'm a property in subsection 2.1` }
        }
      }, {
        title: `I'm another subsection`,
        properties: {
          stringProp4: { type: 'string', title: `I'm a property in subsection 2.2` }
        }
      }]
    }
  }
}

const model = {}

export default { id, title, description, schema, model }
