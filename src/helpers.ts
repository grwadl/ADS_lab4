import { Element } from './element'

type DeleteFuncParams = { deleted: boolean; nameToDelete: string }
const printNodes = (node: Element): void => console.log(node.ToString())
const deleteNode =
  ({ deleted, nameToDelete }: DeleteFuncParams) =>
  (node: Element) => {
    if (node?.Right?.name && node?.Right?.name === nameToDelete) {
      deleted = true
      node.Right = undefined
    } else if (node?.Left?.name && node?.Left?.name === nameToDelete) {
      deleted = true
      node.Left = undefined
    }
  }

const isElementDefined = (el: Element | undefined): el is Element => !!(el && 'name' in el && el['name'] && el instanceof Element)

export { printNodes, deleteNode, isElementDefined, DeleteFuncParams }
