"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperScope = exports.usePaperScope = exports.Canvas = exports.Renderer = void 0;
var Renderer_1 = require("./Renderer");
Object.defineProperty(exports, "Renderer", { enumerable: true, get: function () { return Renderer_1.Renderer; } });
var Canvas_1 = require("./Canvas");
Object.defineProperty(exports, "Canvas", { enumerable: true, get: function () { return Canvas_1.Canvas; } });
__exportStar(require("./Items"), exports);
var usePaperScope_1 = require("./usePaperScope");
Object.defineProperty(exports, "usePaperScope", { enumerable: true, get: function () { return usePaperScope_1.usePaperScope; } });
var paper_core_1 = require("paper/dist/paper-core");
Object.defineProperty(exports, "PaperScope", { enumerable: true, get: function () { return paper_core_1.PaperScope; } });
