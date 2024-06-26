/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Canvas } from './Canvas';
import { View, Layer, Rectangle } from './Items';
import { PaperScope, Path } from 'paper/dist/paper-core';

test('canvas', () => {
  let scope: any = null;
  render(
    <Canvas
      role="img"
      width={400}
      height={300}
      onScopeReady={(s) => (scope = s)}
    />
  );
  const el = screen.getByRole('img');
  expect(el).toBeInstanceOf(HTMLCanvasElement);
  expect(scope).toBeInstanceOf(PaperScope);
});

test('canvas with custom scope', () => {
  const scope = new PaperScope();
  render(<Canvas scope={scope} role="img" width={400} height={300} />);
  const el = screen.getByRole('img');
  expect(el).toBeInstanceOf(HTMLCanvasElement);
});

test('canvas with children', () => {
  const scope = new PaperScope();
  render(
    <Canvas scope={scope} width={400} height={300}>
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
  );
  expect(scope?.projects.length).toEqual(1);
  expect(scope?.project.layers.length).toEqual(2);
  expect(scope?.project.layers[0].children.length).toEqual(1);
  expect(scope?.project.layers[0].children[0]).toBeInstanceOf(Path);
  expect(scope?.project.layers[0].children[0].props).toEqual({
    center: [200, 150],
    fillColor: '#222222',
    size: [200, 100],
  });
});

test('canvas with ref', () => {
  const ref = { current: null };
  render(<Canvas ref={ref} width={400} height={300} />);
  expect(ref.current).toBeInstanceOf(HTMLCanvasElement);
});
