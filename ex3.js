//Exercise #3//
let i = 1; 
while (i < 6) {
    let row = '';
    let j = 1 ;
    while(j <= i) {
        row += '*';
        j++;
    }
    console.log(row);
i++
};

//Exercise #4.1//
let x = 2;
while (x >= 0.5) {
    x -= 0.5 ;
    console.log(x);
};

//Exercise #4.2//
let y = 1;
while (y <= 100) {
   y % 2 !== 0 ? console.log(`${y} is odd`) : null;
y++;
};

//Exercise #4.3//
let z = 1;
let n = 6;
while (z <= n) {
    let bracket = '' ;
    bracket += `[${z}]`
    console.log(bracket)
    z++;
};

//Exercise #4.4//
let t = 1;
let r = 100;
let sum = 0;
while (t <= r) {
    sum += t ;
    t++;
} console.log(sum)


