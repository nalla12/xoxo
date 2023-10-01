export function calculateWinner(fields) {
    const flatFields = fields.flat();
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
        console.log('calculateWinner looping');
        const [a, b, c] = winningLines[i];
        if (flatFields[a] && flatFields[a] === flatFields[b] && flatFields[a] === flatFields[c]) {
            return flatFields[a];
        }
    }
    return null;
}
