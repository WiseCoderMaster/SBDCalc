
let x = 218;
let x2 = 223;
let y = -174;
let y2 = -168;
let z = 0;
let z2 = 0;
let xn = 0;
let xn2 = 0;
let yn = 0;
let yn2 = 0;
let a = 0;
let b = 0;
let min = 10;

a = x;
x = y;
y = a;

b = x2;
x2 = y2;
y2 = b;

xn = x + y;
yn = y;
z = x;

xn2 = x2 + y2;
yn2 = y2;
z2 = x2;

if(Math.abs(xn - xn2) > min){
    console.log("You can build here! " + Math.abs(xn - xn2));
}
else{
    if(Math.abs(yn - yn2) > min){
        console.log("You can build here! " + Math.abs(yn - yn2));
    }
    else{
        if(Math.abs(z -z2) > min){
        console.log("You can build here! " + Math.abs(z - z2));
        }
        else{
            console.log("You can't build here :( ")
        }
    }
}


