import React, { type FC } from 'react';
import { Canvas } from './comoonents/Paper/PaperCanvas';

const Marker: FC<{ title: string }> = (props) => {



  return (

    <div>
      <Canvas 
      image={{
        id: '',
        url: '',
        width: 0,
        height: 0,
        routes: []
      }} width={500} height={500} />
    </div>
  )
};

export default Marker;
