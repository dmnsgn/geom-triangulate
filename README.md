# geom-triangulate

Splits quad or polygon faces into triangles.

Implemented using naive face triangulation - builds a triangle fan anchored at the first face vertex.

![](screenshot.png)

## Installation

```bash
npm install geom-triangulate
```

## Usage

```js
import triangulate from "geom-triangulate";

const faces = [
  [0, 1, 2, 3],
  [3, 2, 5, 4],
  // ...
];

// Compute cells
const triangulatedCells = triangulate(faces); // [[0, 1, 2], [0, 2, 3], ...]
```

## API

#### `triangulate(faces): cells`

**Parameters**

- faces: `TypedArray | Array | Array<[x, y, z]>` – list of face indices `new Array([a, b, c, d], [a, b, c, d], ...)`

_Note: if faces is a TypedArray (eg. `new Uint32Array([a, b, c, d, a, b, c, d, ...]`) or a flat array of positions (eg. `new Array(a, b, c, d, a, b, c, d, ...)`), we assumes faces are triangles so a copy will be returned._

**Returns**

- cells: `Array<[x, y, z]>` – simplicial complex geometry cells (`new Array([a, b, c], [a, b, c], ...)`)

## License

MIT. See [license file](https://github.com/vorg/geom-triangulate/blob/master/LICENSE.md).
