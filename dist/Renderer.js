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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const react_reconciler_1 = __importDefault(require("react-reconciler"));
const constants_1 = require("react-reconciler/constants");
const paper_core_1 = __importDefault(require("paper/dist/paper-core"));
const Item = __importStar(require("./Items"));
const applyDefaultProp = (prop, instance, props, prev) => {
    if (props[prop] !== prev[prop]) {
        Object.assign(instance, { [prop]: props[prop] });
    }
};
const applyProp = {
    data: (instance, props, prev) => {
        if (props.data !== prev.data && instance instanceof paper_core_1.default.Item) {
            instance.data = Object.assign(Object.assign(Object.assign({}, instance.data), props.data), { type: instance.type });
        }
    },
    active: (instance, props, prev) => {
        if (props.active &&
            props.active !== prev.active &&
            (instance instanceof paper_core_1.default.Tool || instance instanceof paper_core_1.default.Layer)) {
            instance.activate();
        }
    },
    point: (instance, props, prev) => {
        if (props.point !== prev.point && instance instanceof paper_core_1.default.Item) {
            instance.translate([
                props.point[0] - prev.point[0],
                props.point[1] - prev.point[1],
            ]);
        }
    },
    center: (instance, props, prev) => {
        if (props.center !== prev.center && instance instanceof paper_core_1.default.Item) {
            instance.translate([
                props.center[0] - prev.center[0],
                props.center[1] - prev.center[1],
            ]);
        }
    },
    radius: (instance, props, prev) => {
        if (props.radius !== prev.radius && instance instanceof paper_core_1.default.Item) {
            instance.scale(props.radius / prev.radius);
        }
    },
    rotation: (instance, props, prev) => {
        if (props.rotation !== prev.rotation && instance instanceof paper_core_1.default.Item) {
            if (props.rotation && prev.rotation) {
                instance.rotate(props.rotation - prev.rotation);
            }
            else {
                instance.rotation = props.rotation;
            }
        }
    },
    size: (instance, props, prev) => {
        if (props.size !== prev.size && instance instanceof paper_core_1.default.Item) {
            instance.scale(props.size[0] / prev.size[0], props.size[1] / prev.size[1]);
        }
    },
};
const applyProps = (instance, props, prevProps = {}) => {
    const keys = Object.keys(props);
    const len = keys.length;
    let i = 0;
    // https://stackoverflow.com/a/7252102
    while (i < len) {
        const prop = keys[i];
        if (prop !== 'id' && prop !== 'children') {
            if (applyProp[prop]) {
                applyProp[prop](instance, props, prevProps);
            }
            else {
                applyDefaultProp(prop, instance, props, prevProps);
            }
        }
        i++;
    }
};
const getSymbolDefinition = (scope, { id, name, svg }) => {
    const key = id || name;
    if (!key)
        throw new Error('Missing id or name prop on SymbolItem');
    if (!svg)
        throw new Error('Missing svg prop on SymbolItem');
    // return cached definition
    if (scope.symbols && scope.symbols[key]) {
        return scope.symbols[key];
    }
    // create symbols cache
    if (!scope.symbols) {
        scope.symbols = {};
    }
    // create definition
    const definition = new paper_core_1.default.SymbolDefinition(scope.project.importSVG(svg));
    scope.symbols[key] = definition;
    // return created definition
    return definition;
};
exports.Renderer = (0, react_reconciler_1.default)({
    createInstance: (type, instanceProps, scope) => {
        const { children } = instanceProps, other = __rest(instanceProps, ["children"]);
        const props = Object.assign(Object.assign({}, other), { project: scope.project });
        let instance;
        switch (type) {
            case Item.View:
                instance = scope.view;
                instance.project = scope.project;
                break;
            case Item.Tool:
                instance = new scope.Tool();
                break;
            case Item.Layer:
                instance = new scope.Layer(props);
                break;
            case Item.Group:
                instance = new scope.Group(props);
                break;
            case Item.Path:
                instance = new scope.Path(props);
                break;
            case Item.CompoundPath:
                instance = new scope.CompoundPath(props);
                break;
            case Item.Arc:
                instance = new scope.Path.Arc(props);
                break;
            case Item.Circle:
                instance = new scope.Path.Circle(props);
                break;
            case Item.Ellipse:
                instance = new scope.Path.Ellipse(props);
                break;
            case Item.Line:
                instance = new scope.Path.Line(props);
                break;
            case Item.Rectangle:
                instance = new scope.Path.Rectangle(props);
                break;
            case Item.RegularPolygon:
                instance = new scope.Path.RegularPolygon(props);
                break;
            case Item.PointText:
                instance = new scope.PointText(props);
                break;
            case Item.SymbolItem: {
                const definition = getSymbolDefinition(scope, props);
                instance = new scope.SymbolItem(definition, props.center);
                break;
            }
            case Item.Raster: {
                const { onLoad } = props, other = __rest(props, ["onLoad"]);
                instance = new scope.Raster(other);
                if (typeof onLoad === 'function') {
                    instance.onLoad = () => onLoad(instance);
                }
                break;
            }
            default:
                throw new Error(`PaperRenderer does not support the type "${type}"`);
        }
        instance.props = other;
        instance.type = type;
        return instance;
    },
    createTextInstance: () => {
        throw new Error('PaperRenderer does not support text children');
    },
    getPublicInstance: (instance) => instance,
    prepareForCommit: () => null,
    prepareUpdate: () => true,
    resetAfterCommit: () => { },
    resetTextContent: () => { },
    getRootHostContext: () => null,
    getChildHostContext: () => null,
    shouldSetTextContent: () => false,
    getCurrentEventPriority: () => constants_1.DefaultEventPriority,
    getInstanceFromNode: () => undefined,
    getInstanceFromScope: () => undefined,
    preparePortalMount: () => { },
    prepareScopeUpdate: () => { },
    beforeActiveInstanceBlur: () => { },
    afterActiveInstanceBlur: () => { },
    detachDeletedInstance: () => { },
    clearContainer: () => { },
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    isPrimaryRenderer: false,
    warnsIfNotActing: false,
    supportsMutation: true,
    supportsHydration: false,
    supportsPersistence: false,
    appendInitialChild: (parent, child) => {
        if (parent instanceof paper_core_1.default.Group && child instanceof paper_core_1.default.Item) {
            child.addTo(parent);
        }
        if (parent instanceof paper_core_1.default.CompoundPath && child instanceof paper_core_1.default.Item) {
            child.addTo(parent);
        }
        if (parent instanceof paper_core_1.default.View && child instanceof paper_core_1.default.Item) {
            child.addTo(parent.project);
        }
    },
    finalizeInitialChildren: (instance, type, props) => {
        if (instance instanceof paper_core_1.default.View ||
            instance instanceof paper_core_1.default.Tool ||
            instance instanceof paper_core_1.default.Layer) {
            applyProps(instance, props);
        }
        return false;
    },
    appendChild: (parent, child) => {
        if (parent instanceof paper_core_1.default.Group && child instanceof paper_core_1.default.Item) {
            child.addTo(parent);
        }
        if (parent instanceof paper_core_1.default.View && child instanceof paper_core_1.default.Item) {
            child.addTo(parent.project);
        }
    },
    appendChildToContainer: (container, child) => {
        if (!(child instanceof paper_core_1.default.View || child instanceof paper_core_1.default.Tool)) {
            throw new Error('Container can only hold View and Tool nodes');
        }
    },
    insertBefore: (parent, child, before) => {
        if (parent instanceof paper_core_1.default.Group &&
            child instanceof paper_core_1.default.Item &&
            before instanceof paper_core_1.default.Item) {
            child.insertAbove(before);
        }
    },
    insertInContainerBefore: (container, child, before) => {
        if (!(child instanceof paper_core_1.default.View || child instanceof paper_core_1.default.Tool) ||
            !(before instanceof paper_core_1.default.View || before instanceof paper_core_1.default.Tool)) {
            throw new Error('Container can only hold View and Tool nodes');
        }
    },
    removeChild: (parent, child) => {
        if (typeof child.remove === 'function') {
            child.remove();
        }
    },
    removeChildFromContainer: (container, child) => {
        if (typeof child.remove === 'function') {
            child.remove();
        }
    },
    commitTextUpdate: () => { },
    commitMount: () => { },
    commitUpdate: (instance, payload, type, oldProps, newProps) => {
        applyProps(instance, newProps, oldProps);
    },
});
