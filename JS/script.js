//let  cannot be reinitialized .scope is inside the block
let b=10;
console.log(b);
{
    let b=20;
    console.log(b);
}
console.log(b);
