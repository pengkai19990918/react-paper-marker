import { useState } from 'react';
import { Canvas, View, Layer, Rectangle } from 'react-paper-bindings';
import { PaperScope } from 'paper/dist/paper-core';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // const scope = new PaperScope();

  return (
    <>
      <Canvas width={400} height={300}>
        <View>
          <Layer>
            <Rectangle
              center={[200, 150]}
              fillColor={'#222222'}
              size={[200, 100]}
            />
          </Layer>
          <Layer>
            <Rectangle
              center={[250, 50]}
              fillColor={'#ff0000'}
              size={[100, 200]}
            />
          </Layer>
        </View>
      </Canvas>
    </>
  );
}

export default App;
