import promptApi from 'prompt-sync'
import { Element } from './element'
import { LogMessages, MenuMessages } from './enums'
import { Tree } from './tree'

const prompt = promptApi({ sigint: true })

const firstName: string = prompt(MenuMessages.START)
const firstElement: Element = new Element(firstName)
const tree: Tree = new Tree(firstElement)

let input: number = 3

const isElementDefined = (el: Element | undefined): el is Element => !!(el && 'name' in Element && el['name'] && el instanceof Element)

while (input !== 0) {
  input = Number(prompt(MenuMessages.MAIN))

  switch (input) {
    case 1:
      const [name, ancestorName] = prompt(MenuMessages.ADD).split(' ')

      if (!isElementDefined(tree.Top)) {
        tree.Top = new Element(name)
        console.log('successfully added')
        break
      }
      const parent = tree.FindNode(ancestorName)

      if (isElementDefined(parent)) {
        const newChild: Element = new Element(name)
        try {
          parent.AddChild(newChild)
          console.log('successfully added')
        } catch (e) {
          console.log(e instanceof Error ? e.message : e)
        }
      } else console.log(LogMessages.NOT_FOUND)
      break
    case 2:
      tree.Top ? tree.PrintAllNodes(tree.Top) : console.log(LogMessages.EMPTY_TREE)
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
      const nameElementToDelete: string = prompt(MenuMessages.NODE_NAME)
      let result: boolean = tree.RemoveNode(nameElementToDelete)

      console.log(result ? LogMessages.DELETED : LogMessages.NOT_FOUND)
      break
  }
}
