function chunkString(str, chunkLength) {
    // If the input string is null, return an empty array
    if (!str) return [];

    // Initialize an empty array to store the chunks
    const chunks = [];

    // Loop through the string, creating chunks of the given length
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.substring(i, i + chunkLength));
    }

    // Return the array of chunks
    return chunks;
}
