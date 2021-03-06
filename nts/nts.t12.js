// for m,n calc S=n*(n+m)*(n+2m)*...*(n+m*m)

const calcS = (n, m) => {
    let S = 1;

    for (let i = 0; i <= m; i++) {
        S = (n + i * m) * S
    }
    return S;
}

console.log(calcS(2, 3))

//calc S=(n+m)*(n-2m)*...(n+(-1)^(m+1)m*m)

const calcS2 = (n, m) => {
    let S = 1;

    for (let i = 1; i <= m; i++) {
        S = (n + (-1) ** (i + 1) * i * m) * S
    }
    return S;
}
console.log(calcS2(2, 3))

//calc S=1/(n+m) - 1/(n+2m) + 1/(n+3m) - ... + (-1)^(m+1) * 1/(n+m*m)

const calcS3 = (n, m) => {
    let S = 0;

    for (let i = 1; i <= m; i++) {
        S = ((-1) ** (i + 1)) * (1 / (n + i * m)) + S;
    }
    return S;
}
console.log(calcS3(2, 3))