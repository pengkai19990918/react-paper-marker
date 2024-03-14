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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const react_1 = __importStar(require("react"));
const constants_1 = require("react-reconciler/constants");
const paper_core_1 = require("paper/dist/paper-core");
const Renderer_1 = require("./Renderer");
exports.Canvas = (0, react_1.forwardRef)(function Canvas(_a, forwardedRef) {
    var { children, width, height, settings, scope, onScopeReady } = _a, props = __rest(_a, ["children", "width", "height", "settings", "scope", "onScopeReady"]);
    const [canvas, setCanvas] = (0, react_1.useState)(null);
    const canvasRef = (0, react_1.useRef)(null);
    const scopeRef = (0, react_1.useRef)(scope);
    const fiberRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(forwardedRef, () => canvasRef.current);
    // create
    (0, react_1.useEffect)(() => {
        if (canvas instanceof HTMLCanvasElement) {
            if (!scopeRef.current) {
                scopeRef.current = new paper_core_1.PaperScope();
            }
            Object.assign(scopeRef.current.settings, Object.assign(Object.assign({}, settings), { insertItems: false }));
            scopeRef.current.setup(canvas);
            fiberRef.current = Renderer_1.Renderer.createContainer(scopeRef.current, constants_1.ConcurrentRoot, null, false, null, '', console.error, null);
            Renderer_1.Renderer.updateContainer(null, fiberRef.current, null, () => null);
            if (typeof onScopeReady === 'function') {
                onScopeReady(scopeRef.current);
            }
        }
        else if (canvasRef.current) {
            setCanvas(canvasRef.current);
        }
        // destroy
        return () => {
            if (canvas) {
                if (fiberRef.current) {
                    Renderer_1.Renderer.updateContainer(null, fiberRef.current, null, () => null);
                }
                scopeRef.current = null;
                canvasRef.current = null;
                fiberRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [canvas]);
    // update
    (0, react_1.useEffect)(() => {
        if (canvas && fiberRef.current) {
            Renderer_1.Renderer.updateContainer(children, fiberRef.current, null, () => null);
        }
    }, [canvas, children]);
    // resize
    (0, react_1.useEffect)(() => {
        if (canvas && scopeRef.current && scopeRef.current.view) {
            scopeRef.current.view.viewSize = new scopeRef.current.Size(width, height);
        }
    }, [canvas, width, height]);
    return react_1.default.createElement("canvas", Object.assign({}, props, { ref: canvasRef }));
});
