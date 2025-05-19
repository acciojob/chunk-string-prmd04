function stringChop(str, size) {
    const chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10);

if (isNaN(size) || size <= 0) {
    alert("Invalid chunk size. Please enter a positive number.");
} else {
    alert("Chunks: " + stringChop(str, size).join(", "));
}
