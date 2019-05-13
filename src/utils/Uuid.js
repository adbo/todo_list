export default function genUuid() {
  // returns a 36-character string in the form XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
  // where "X" is an "upper-case" hexadecimal digit [0-9A-F].

  // generate 16 random bytes
  let randomValues = Array.from({ length: 16 }, () => Math.floor(Math.random() * 0x100));

  // set the high nibble of the 7th byte equal to 4 and
  // set the two most significant bits of the 9th byte to 10'B,
  // so the high nibble will be one of {8,9,A,B}.
  randomValues[6] = (randomValues[6] & 0x0f) | 0x40; // eslint-disable-line no-bitwise
  randomValues[8] = (randomValues[8] & 0x3f) | 0x80; // eslint-disable-line no-bitwise

  // convert to hex strings
  randomValues = randomValues.map(x => x.toString(16).toUpperCase());

  // add dashes after 6, 8, 10 and 12 bytes and add '0' in case of 1 character values
  const uuid = randomValues.reduce((sum, x, index) => sum
    + ([6, 8, 10, 12].includes(index) ? '-' : '') + (x.length === 1 ? '0' : '') + x, '');

  return uuid;
}
