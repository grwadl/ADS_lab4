"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const element_1 = require("./element");
const enums_1 = require("./enums");
const tree_1 = require("./tree");
const prompt = (0, prompt_sync_1.default)({ sigint: true });
const firstName = prompt(enums_1.MenuMessages.START);
const firstElement = new element_1.Element(firstName);
const tree = new tree_1.Tree(firstElement);
let input = 3;
const isElementDefined = (el) => !!(el && 'name' in element_1.Element && el['name'] && el instanceof element_1.Element);
while (input !== 0) {
    input = Number(prompt(enums_1.MenuMessages.MAIN));
    switch (input) {
        case 1:
            const [name, ancestorName] = prompt(enums_1.MenuMessages.ADD).split(' ');
            if (!isElementDefined(tree.Top)) {
                tree.Top = new element_1.Element(name);
                console.log('successfully added');
                break;
            }
            const parent = tree.FindNode(ancestorName);
            if (isElementDefined(parent)) {
                const newChild = new element_1.Element(name);
                try {
                    parent.AddChild(newChild);
                    console.log('successfully added');
                }
                catch (e) {
                    console.log(e instanceof Error ? e.message : e);
                }
            }
            else
                console.log(enums_1.LogMessages.NOT_FOUND);
            break;
        case 2:
            tree.Top ? tree.PrintAllNodes(tree.Top) : console.log(enums_1.LogMessages.EMPTY_TREE);
            break;
        case 3:
            const elementName = prompt(enums_1.MenuMessages.NODE_NAME);
            const el = tree.FindNode(elementName);
            console.log(isElementDefined(el) ? el.ToString() : enums_1.LogMessages.NOT_FOUND);
            break;
        case 4:
            console.log(isElementDefined(tree.Top) ? enums_1.LogMessages.NOT_EMPTY_TREE : enums_1.LogMessages.NOT_EMPTY_TREE);
            break;
        case 5:
            const nameElementToDelete = prompt(enums_1.MenuMessages.NODE_NAME);
            let result = tree.RemoveNode(nameElementToDelete);
            console.log(result ? enums_1.LogMessages.DELETED : enums_1.LogMessages.NOT_FOUND);
            break;
    }
}
