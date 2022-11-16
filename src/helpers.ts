import { Element } from './element'

type DeleteFuncParams = { deleted: boolean; nameToDelete: string }
const printNodes = (node: Element): void => console.log(node.ToString())
const deleteNode = (params: DeleteFuncParams) => (node: Element) => {
  if (node?.Right?.name && node?.Right?.name === params.nameToDelete) {
    params.deleted = true
    node.Right = undefined
  } else if (node?.Left?.name && node?.Left?.name === params.nameToDelete) {
    console.log('here left')
    params.deleted = true
    node.Left = undefined
  }
}

const isElementDefined = (el: Element | undefined): el is Element => !!(el && 'name' in el && el['name'] && el instanceof Element)

export { printNodes, deleteNode, isElementDefined, DeleteFuncParams }
