export default function getSection(schema, path = '') {
  if (!schema.nodes && !path) { return schema }
  if (!schema.nodes) { return null }
  const value = path.split('.')[0]
  const nextValue = path.split('.').slice(1).join('.')
  return getSection(schema.nodes[value], nextValue)
}