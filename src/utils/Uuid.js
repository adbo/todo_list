// generate 16 random bytes
const randomBytes = () => Array.from({ length: 16 }, () => Math.floor(Math.random() * 0x100));

// set the high nibble of the 7th byte equal to 4 and
// set the two most significant bits of the 9th byte to 10'B,
// so the high nibble will be one of {8,9,A,B}.
const setBytes = bytes => bytes
  // eslint-disable-next-line no-bitwise
  .map((item, index) => (index === 6 ? (item & 0x0f) | 0x40 : item))
  // eslint-disable-next-line no-bitwise
  .map((item, index) => (index === 8 ? (item & 0x3f) | 0x80 : item));

// convert to Hex
const toHex = bytes => bytes.map(x => x.toString(16).toUpperCase());

// reduce to single string
// add dashes after 6, 8, 10 and 12 bytes and add '0' in case of 1 character values
const reduceWithDashes = bytes => bytes.reduce((sum, x, index) => sum
  + ([6, 8, 10, 12].includes(index) ? '-' : '') + (x.length === 1 ? '0' : '') + x, '');

// returns a 36-character string in the form XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
// where "X" is an "upper-case" hexadecimal digit [0-9A-F].
const genUuid = () => reduceWithDashes(toHex(setBytes(randomBytes())));

export default genUuid;
