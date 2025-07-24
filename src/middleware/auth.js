const base64 = require("base-64");
function decodeCredentials(authHeader) {
  // authHeader: Basic lkjo74iUH23FDAs3=
  const encodedCredentials = authHeader.trim().replace(/Basic\s+/i, "");

  const decodedCredentials = base64.decode(encodedCredentials);

  return decodedCredentials.split(":");
}
