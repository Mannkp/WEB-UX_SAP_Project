function onVisitPage()
{
    alert("Welcome to Mann's Webpage")
}   

let fruits = ['apple' , 'banana']
console.log(fruits.length);

console.log(fruits.indexOf('banana'));

fruits.push('Mango');

console.log(fruits);

fruits.pop()    //it will pop(delete) last element from array

//fruits.splice() -> used when we know the index of element to be deleted

let n = 5;
for(let i=0;i<=n;i++){
    console.log('Hii JavaScript!');
}

let i=0;

while(i<=n){
    console.log('Mann is Learning Java Script : )');
    i++;
}