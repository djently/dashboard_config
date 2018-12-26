export default function getSection(schema, path = '') {
  if (!schema.nodes || !path) { return schema }
  if (!schema.nodes) { return null }
  const currentNode = path.split('.')[0]
  const nextPath = path.split('.').slice(1).join('.')
  return getSection(schema.nodes[currentNode], nextPath)
}