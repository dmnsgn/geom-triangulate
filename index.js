function triangulate(faces, stride) {
  const isCellsFlatArray = !faces[0]?.length;
  if (isCellsFlatArray) return faces.slice();

  const triangles = [];

  for (let i = 0; i < faces.length; i++) {
    const face = faces[i];
    triangles.push([face[0], face[1], face[2]]);

    for (let j = 2; j < face.length - 1; j++) {
      triangles.push([face[0], face[j], face[j + 1]]);
    }
  }

  return triangles;
}

export default triangulate;
