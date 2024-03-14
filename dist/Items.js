"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tool = exports.SymbolItem = exports.Raster = exports.PointText = exports.RegularPolygon = exports.Arc = exports.Ellipse = exports.Rectangle = exports.Circle = exports.Line = exports.CompoundPath = exports.Path = exports.Layer = exports.Group = exports.View = void 0;
exports.View = 'View';
exports.Group = 'Group';
exports.Layer = 'Layer';
exports.Path = 'Path';
exports.CompoundPath = 'CompoundPath';
exports.Line = 'Line';
exports.Circle = 'Circle';
exports.Rectangle = 'Rectangle';
exports.Ellipse = 'Ellipse';
exports.Arc = 'Arc';
exports.RegularPolygon = 'RegularPolygon';
exports.PointText = 'PointText';
exports.Raster = 'Raster';
exports.SymbolItem = 'SymbolItem';
exports.Tool = 'Tool';
/*
type Props<T> = {
  [K in keyof T]?: T[K] extends paper.Color
    ? paper.Color | string
    : T[K] extends paper.Point
    ? paper.Point | [number, number]
    : T[K] extends paper.Size
    ? paper.Size | [number, number]
    : T[K];
};

type ItemProps = Props<paper.Item>;

type RectangleProps = Props<paper.Rectangle>;

type ViewProps = {
  id?: number | string;
  name?: string;
  children?: React.ReactNode;
};

export interface PaperElements {
  View: ViewProps;
  Rectangle: ItemProps & RectangleProps;
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends PaperElements {}
  }
}
*/
