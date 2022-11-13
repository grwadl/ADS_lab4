import { Element, Stack } from './element'

class Tree {
  Top?: Element
  constructor(_Top: Element) {
    this.Top = _Top
  }

  PrintAllNodes(node?: Element): void {
    if (!node) return
    this.PrintAllNodes(node.Left)
    console.log(node.ToString())
    this.PrintAllNodes(node.Right)
  }

  FindNode(name: string, parent?: Element): Element | undefined {
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
  RemoveNode(name: string): boolean {
    let tempEl: Element | undefined = this.Top
    if (!tempEl) return false
    if (tempEl.name === name) {
      this.Top = undefined
      return true
    }
    const stack = new Stack<Element>()
    stack.Add(tempEl)
    let res: boolean = false
    while (!stack.IsEmpty()) {
      tempEl = stack.Pop() as Element
      if (!tempEl) continue
      if (tempEl?.Right) {
        if (tempEl?.Right?.name === name) {
          tempEl.Right = undefined
          res = true
          break
        }
        stack.Add(tempEl.Right)
      }
      if (tempEl?.Left) {
        if (tempEl?.Left?.name === name) {
          tempEl.Left = undefined
          res = true
          break
        }
        stack.Add(tempEl.Left)
      }
    }
    return res
  }
}

export { Tree }
