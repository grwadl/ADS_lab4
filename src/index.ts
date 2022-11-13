import promptApi from 'prompt-sync'
import { Element } from './element'
import { LogMessages, MenuMessages } from './enums'
import { DeleteFuncParams, deleteNode, isElementDefined, printNodes } from './helpers'
import { Tree } from './tree'

const prompt = promptApi({ sigint: true })

const firstName: string = prompt(MenuMessages.START)
const firstElement: Element = new Element(firstName)
const tree: Tree = new Tree(firstElement)

let input: number = -1

while (input !== 0) {
  input = Number(prompt(MenuMessages.MAIN))

  switch (input) {
    case 1:
      const [name, ancestorName] = prompt(MenuMessages.ADD).split(' ')

      if (!isElementDefined(tree.Top)) {
        tree.Top = new Element(name)
        console.log(LogMessages.ADDED)
        break
      }
      const parent = tree.FindNode(ancestorName)

      if (isElementDefined(parent)) {
        const newChild: Element = new Element(name)
        try {
          parent.AddChild(newChild)
          console.log(LogMessages.ADDED)
        } catch (e) {
          console.log(e instanceof Error ? e.message : e)
        }
      } else console.log(LogMessages.NOT_FOUND)
      break
    case 2:
      tree.Top ? tree.Enumerate(tree.Top, { callbackFn: printNodes }) : console.log(LogMessages.EMPTY_TREE)
      break
    case 3:
      const elementName: string = prompt(MenuMessages.NODE_NAME)
      const el: Element | undefined = tree.FindNode(elementName)
      console.log(isElementDefined(el) ? el.ToString() : LogMessages.NOT_FOUND)
      break
    case 4:
      console.log(isElementDefined(tree.Top) ? LogMessages.NOT_EMPTY_TREE : LogMessages.NOT_EMPTY_TREE)
      break
    case 5:
      const nameToDelete: string = prompt(MenuMessages.NODE_NAME)
      const params: DeleteFuncParams = { nameToDelete, deleted: false }
      const carriedDeleteFunc = deleteNode(params)
      tree.Enumerate(tree.Top, { callbackFn: carriedDeleteFunc })
      console.log(params.deleted ? LogMessages.DELETED : LogMessages.NOT_FOUND)
      break
  }
}
