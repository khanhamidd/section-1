function addnum(a, b) {
    let c = a + b;
    console.log(c);

}
addnum(56, 78);
addnum(56, 78);
addnum(56, 78);
addnum(545, 78);

console.log('-----------------------------------');

const getAvg = function (m1, m2, m3) {
    var avg = (m1 + m2 + m3) / 3;
    //console.log(avg);
    return avg;
}
const result = getAvg(40, 6, 8);
console.log(result);

console.log('-----------------------------------');

const factorial=(n) =>{
    let fact=1;
    for(let i=2;i<=n;i++){
fact=fact*i;
    }
    return fact;
}
const f1=factorial(5);
console.log(f1);

