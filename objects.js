const user = {
    name: 'mighty raju',
    email: 'raju@gmai.com',
    password: "abc1234"
};
console.log(user);
console.log(user.name);
console.log(user['password']);
user.password = 'xyz1234';

user.address = 'lucknow';
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'sumsung',
    model: 'galaxy m31',
    price: 14999,
    colors: ['black', 'blue', 'red']

};
console.log(smartphone.model = 'galaxy s24');
console.log(smartphone.colors[1]);

console.log(smartphone.colors[0] = 'white');
smartphone.colors.push('green');

console.log(smartphone);

const smartphoneArray = [
    {
        brand: 'samsung',
        model: 'galaxy m31',
        price: 13999,
        colors: ['black', 'blue', 'red']

    },

    {
        brand: 'oneplus',
        model: '8t',
        price: 42999,
        colors: ['blue', 'silver']
    },
    {
        brand: 'apple',
        model: 'iphone 12',
        price: 79999,
        colors: ['black', 'white', 'green']

    },

    {
        brand: 'xiaomi',
        model: 'redmi note 9 pro',
        price: 15999,
        colors: ['black', 'blue', 'red']

    },
    {
        brand: 'realme',
        model: 'narzo 20 pro',
        price: 18999,
        colors: ['black', 'white', 'green']

    },]
    console.log(smartphoneArray.length);
    console.log(smartphoneArray[1].price);
    
    console.log(smartphoneArray[2].colors[1]);
    console.log(smartphoneArray[3].colors[0]='silver');
    
    
    console.log(smartphoneArray[3].colors);
    console.log(smartphoneArray[4].colors.splice(0,0,'redd'));
    console.log(smartphoneArray[4].colors.push('blue'));
    console.log(smartphoneArray[4].colors);
    const budget=smartphoneArray.filter((p)=>{return p.price>15000 && p.price<20000});
    console.log(budget);
    const brands= smartphoneArray.map((phone)=>{return phone.brand});
    console.log(brands);

    const color=smartphoneArray.filter((p)=>{return p.colors.includes('black')});
    
    
    console.log(color);

    const sumsungp=smartphoneArray.filter((p)=>{return p.colors.brand==='samsung'});
    
    console.log(sumsungp);
    const keyword='sa';
    const filteredphones= smartphoneArray.filter((phone)=>{
        return phone.brand.toLowerCase().includes(keyword.toLowerCase())
    });
    console.log(filteredphones);
    
    
    
    
