import React from 'react';
import { FiberRoot } from 'react-reconciler';
export type PaperScopeSettings = {
    insertItems?: boolean;
    applyMatrix?: boolean;
    handleSize?: number;
    hitTolerance?: number;
};
export type CanvasProps = React.ComponentProps<'canvas'> & {
    width: number;
    height: number;
    settings?: PaperScopeSettings;
    scope?: paper.PaperScope;
    onScopeReady?: (scope: paper.PaperScope) => void;
};
export type CanvasRef = HTMLCanvasElement | null;
export type ScopeRef = paper.PaperScope | null | undefined;
export type FiberRef = FiberRoot | null;
export declare const Canvas: React.ForwardRefExoticComponent<Omit<CanvasProps, "ref"> & React.RefAttributes<CanvasRef>>;
//# sourceMappingURL=Canvas.d.ts.map