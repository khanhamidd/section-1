const num = [2, 3, 4, 5, 6, 2, 1, 9]
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);

}
console.log('--------------');

for (let n of num) {
    console.log(n);

}

console.log('--------------');
num.forEach(() => { console.log('function called'); });
console.log('--------------');
num.forEach((a, b) => { console.log(a, b); });

console.log('--------------');

//wap to print all even no
const nums = [2, 3, 4, 5, 6, 2, 1, 9]
for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
        console.log(nums[i]);
    }
}
console.log('--------------');
const nums1 = [2, 3, 4, 5, 6, 2, 1, 9]
for (let n of nums1) {
    if (n % 2 == 0) {
        console.log(n);
    }
}

console.log('--------------');
num.forEach((a) => {
    if (a % 2 == 0)
        console.log(a);
});

console.log('--------------');

let n = [];
num.forEach((a) => {
    if (a % 2 !== 0)
        n.push(a)
});
console.log(n);

let m = [];
num.forEach((a) => {
    
        m.push(a**2)
});
console.log(m);

//map function
const sqrt=num.flatMap((n)=>{ return n**2});
console.log(sqrt);

const names=['raju','ramu','pinki','kaliya','chutki'];
console.log('kaliya'.toUpperCase);
const uppername=names.map((n)=>{ return n.toUpperCase()});
console.log(uppername);

//wap to convert all prices to integer
const prices=['$234.56','$345.67','$456.78','$567.89','$678.90'];

    const intprice=prices.map((n)=>{ return parseInt(n.slice(1))});
    console.log(intprice);

//add 18% GST    TO all prices
const price1=[2400,340,890,430,12000,340]
const newprice=price1.map((n)=>{ return n=n+(n*.18)});
    console.log(newprice);
    console.log('--------------');
    const fullname=['ayush joshi','ankit singh','shreyansh saxena ','hamid khan' ];
    const fullnames=fullname.map((n)=>{ return n.split(' ')[0]});
    console.log(fullnames);

    //filter
    const budgetprices=price1.filter((p)=>{return p<1000});
    console.log(budgetprices);
    
//odd number
const oddno=nums1.filter((e)=>{return e%2!==0});
console.log(oddno);

const friendname=['raju','ramu','pinki','kaliya','chutki'];
const fn=friendname.filter((f)=>{return f.length>4});
console.log(fn);


