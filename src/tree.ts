import { Element, Stack } from './element'
import { LogMessages } from './enums'
import { isElementDefined } from './helpers'

interface IOptions {
  callbackFn?: (el: Element) => void
}

class Tree {
  Top?: Element
  constructor(_Top: Element) {
    this.Top = _Top
  }

  Enumerate(node?: Element, options?: IOptions): void {
    if (!node) return
    this.Enumerate(node.Left, options)
    if (options?.callbackFn) options.callbackFn(node)
    this.Enumerate(node.Right, options)
  }

  FindNode(name: string): Element | undefined {
    let tempEl: Element | undefined = this.Top
    if (!tempEl) return
    const stack = new Stack<Element>()
    let result: Element | undefined
    stack.Add(tempEl)
    while (!stack.IsEmpty()) {
      tempEl = stack.Pop() as Element
      if (tempEl.Right) stack.Add(tempEl.Right)
      if (tempEl.Left) stack.Add(tempEl.Left)
      if (tempEl.name === name) {
        result = tempEl
        break
      }
    }
    return result
  }
  IsEmpty(): string {
    return isElementDefined(this.Top) ? LogMessages.NOT_EMPTY_TREE : LogMessages.NOT_EMPTY_TREE
  }
}

export { Tree }
