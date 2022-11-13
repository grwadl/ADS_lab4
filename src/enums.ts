enum MenuMessages {
  START = 'what is the name of first ancestor? ',
  MAIN = 'what do u wanna do? (1: add node; 2: show tree; 3: find node in tree; 4: check for emptiness; 5: remove node in tree; 0: exit) ',
  ADD = 'type the name of new node and his parent: ',
  NODE_NAME = 'type the name of node: '
}

enum LogMessages {
  ADDED = 'successfully added',
  NOT_FOUND = 'unfortunately element is not found :(',
  EMPTY_TREE = 'tree is empty :(',
  NOT_EMPTY_TREE = 'tree is not empty!',
  DELETED = 'successfully deleted'
}

export { MenuMessages, LogMessages }
