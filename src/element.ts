class Element {
  name: string
  Right?: Element
  Left?: Element

  constructor(_name: string, _Right?: Element, _Left?: Element) {
    this.name = _name
    this.Right = _Right
    this.Left = _Left
  }

  ToString(): string {
    return `[ node: ${this.name} | left child: ${this?.Left?.name} | right child: ${this?.Right?.name} ]`
  }

  AddChild(el: Element): void {
    if (!this.Left) this.Left = el
    else if (!this.Right) this.Right = el
    else throw new Error('node is fully defined!')
  }
}

class Stack<T> {
  private List: T[] = []

  constructor() {}

  Add(el: T): void {
    this.List.push(el)
  }

  Pop(): T | undefined {
    return this.List.pop()
  }
  IsEmpty(): boolean {
    return this.List.length === 0
  }
}

export { Element, Stack }
