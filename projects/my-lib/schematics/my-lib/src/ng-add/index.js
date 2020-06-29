"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function ngAdd(_options) {
    return (tree, _context) => {
        _context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map