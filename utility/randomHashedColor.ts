const COLORS = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
  'linkedin',
  'facebook',
  'messenger',
  'whatsapp',
  'twitter',
  'telegram',
];

const colorSet = new Set<string>(COLORS);
const colorTagMap = new Map<string, string>();

export const randomColor = (tag: string) => {
  if (colorTagMap.has(tag)) return colorTagMap.get(tag);
  const randomIndex = Math.floor(Math.random() * colorSet.size);
  const color = Array.from(colorSet)[randomIndex];
  // colorSet.delete(color);
  colorTagMap.set(tag, color);
  if (colorSet.size === 0) {
    COLORS.forEach((color) => colorSet.add(color));
  }
  return color;
};
