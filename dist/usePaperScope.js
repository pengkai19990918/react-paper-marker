"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaperScope = void 0;
const react_1 = require("react");
const paper_core_1 = require("paper/dist/paper-core");
const usePaperScope = () => {
    const scopeRef = (0, react_1.useRef)(new paper_core_1.PaperScope());
    return scopeRef.current;
};
exports.usePaperScope = usePaperScope;
