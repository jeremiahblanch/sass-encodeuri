const asciiMap = [...Array(512).keys()].reduce((acc, i) => {
  const encoded = `%${i}`;
  try {
    const decoded = decodeURIComponent(encoded);

    console.log(decoded, encoded, encodeURIComponent(decoded));

    if (encodeURIComponent(decoded) === encoded) {
      acc[decoded] = encoded;
    } 
  }
  catch { }
  

  return acc;
}, {});

console.log(
  Object.entries(asciiMap).map(([ascii, hex]) => `"${ascii}": "${hex}"`).join(`,
    `
  )
);