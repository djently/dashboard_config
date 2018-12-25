export default function getDefaultPath(schema) {
  if (schema.nodes) {
    const defaultKey = Object.keys(schema.nodes)[0]
    return [defaultKey, getDefaultPath(schema.nodes[defaultKey])]
      .filter(v => !!v)
      .join('.')
  }
  return ''
}