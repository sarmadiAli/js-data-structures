const A = [0, 0, 1, 2, 2, 2, 1, 4, 3, 3, 1, 2, 4, 5, 5, 5, 6]
const m = Math.max(...A)
const Count = Array((m + 1)).fill(0)

for (let i of A)
    Count[i] += 1;

let sortOf_A = []
for (let x = 0; x <= m; x++) {
    const v = Array(Count[x]).fill(x)
    sortOf_A.push(...v)
}

console.log("🚀 ", sortOf_A)
