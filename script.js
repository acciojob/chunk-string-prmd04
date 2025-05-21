function chunkString(str, chunkLength) {
  // Return empty array if input string is null or chunkLength is not a positive integer
  if (str == null || chunkLength <= 0) return [];

  const result = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  return result;
}
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10);

