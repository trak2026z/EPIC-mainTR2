export const distanceBetweenObjects = (posA, posB) => {
  const distance = Math.sqrt(
    Math.pow(posB.x - posA.x, 2) +
    Math.pow(posB.y - posA.y, 2) +
    Math.pow(posB.z - posA.z, 2)
  );
  return `${Number(distance.toFixed(2))}km`;
};