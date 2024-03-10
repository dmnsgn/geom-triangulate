// TODO: allow stride to be array of poly count
function triangulate(faces, stride) {
  const isCellsFlatArray = !faces[0]?.length;
  stride ||= isCellsFlatArray ? 4 : 1;
  const l = faces.length / (isCellsFlatArray ? stride : 1);

  const triangles = isCellsFlatArray
    ? // polygons count * triangle vertices count * resulting triangle count per polygon
      new faces.constructor(l * 3 * (stride - 2))
    : [];

  let triangleIndex = 0;
  for (let i = 0; i < l; i++) {
    if (isCellsFlatArray) {
      triangles[triangleIndex * 3] = faces[i * stride];
      triangles[triangleIndex * 3 + 1] = faces[i * stride + 1];
      triangles[triangleIndex * 3 + 2] = faces[i * stride + 2];
      triangleIndex++;

      for (let j = 2; j < stride - 1; j++) {
        triangles[triangleIndex * 3] = faces[i * stride];
        triangles[triangleIndex * 3 + 1] = faces[i * stride + j];
        triangles[triangleIndex * 3 + 2] = faces[i * stride + j + 1];
        triangleIndex++;
      }
    } else {
      const face = faces[i];
      triangles.push([face[0], face[1], face[2]]);
      for (let j = 2; j < face.length - 1; j++) {
        triangles.push([face[0], face[j], face[j + 1]]);
      }
    }
  }

  return triangles;
}

export default triangulate;
