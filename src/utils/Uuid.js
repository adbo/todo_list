// returns a 36-character string in the form XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
// where "X" is an "upper-case" hexadecimal digit [0-9A-F].
// generate 16 random bytes
// set the high nibble of the 7th byte equal to 4 and
// set the two most significant bits of the 9th byte to 10'B,
// so the high nibble will be one of {8,9,A,B}.

const genUuid = () => Array.from({ length: 16 }, () => Math.floor(Math.random() * 0x100))
  .map((x, index) => (index === 6 ? (x & 0x0f) | 0x40 : x)) // eslint-disable-line no-bitwise
  .map((x, index) => (index === 8 ? (x & 0x3f) | 0x80 : x)) // eslint-disable-line no-bitwise
  .map(x => (x < 0x10 ? '0' : '') + x.toString(16).toUpperCase())
  .reduce((sum, x, index) => sum + ([4, 6, 8, 10].includes(index) ? '-' : '') + x, '');

export default genUuid;
