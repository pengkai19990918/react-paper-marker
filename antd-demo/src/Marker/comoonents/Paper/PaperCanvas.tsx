import React, { forwardRef } from 'react';
import { Canvas as PaperCanvas, CanvasProps, View } from 'react-paper-bindings';

import { Image, ImageLayer } from './image';
import { Tool } from './tools';

type Props = CanvasProps & {
  image: Image;
  width: number;
  height: number;
};

export const Canvas = forwardRef<HTMLCanvasElement | null, Props>(function Canvas(
  { image, width, height, ...other },
  forwardedRef
) {


  const  handleScopeReady = () => {
    console.log('handleScopeReady', 'OK');
  };

  return (
    <PaperCanvas
      {...other}
      ref={forwardedRef}
      width={width}
      height={height}
      onScopeReady={handleScopeReady}
    >
      <View>
          {/* <ImageLayer image={image} /> */}
        </View>
        <Tool.Move />
        <Tool.Pen />
        <Tool.Circle />
        <Tool.Select />
        <Tool.Delete />
    </PaperCanvas>
  );
});
