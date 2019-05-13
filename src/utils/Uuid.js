export default function genUuid() {
  let randomValues = Array.from({ length: 16 }, () => Math.floor(Math.random() * 0x100));

  randomValues[6] = (randomValues[6] & 0x0f) | 0x40; // eslint-disable-line no-bitwise
  randomValues[8] = (randomValues[8] & 0x3f) | 0x80; // eslint-disable-line no-bitwise

  randomValues = randomValues.map(x => x.toString(16).toUpperCase());

  const uuid = randomValues.reduce((sum, x, index) => sum
    + ([6, 8, 10, 12].includes(index) ? '-' : '') + (x.length === 1 ? '0' : '') + x, '');

  return uuid;
}
