alert("it's working!");

if(1 === 2)
{
    console.log("It's true")
}
else{
    console.log("It's not true")
}


let rating = 3;

if(rating === 3)
{
    console.log('You are a superstart');
}

if(rating < 2)
{
    console.log("you are not a superstar");
}

let num = 37;

if((num % 2) !== 0)
{
    console.log("this is an odd number");
}


if(rating === 3)
{
    console.log("meets expectations");
}
else if(rating === 2)
{
    console.log("doesn't meet expectations");
}
else{
    console.log("does't meet the expectations as well");
}


let password = "cat dog";

if(password.indexOf(' ') === -1)
{
    console.log("Valid Password!");
}
else{
    console.log("Invalid password, cannot containe space.");
}