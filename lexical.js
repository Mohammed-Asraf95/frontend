let a = 10;
function outer() {
    let b = 20;
    function inner() {
        if(true) {
            let c = 30;
            console.log(a);
            console.log(b);
            console.log(c);
        }
        
    }
    inner();
}
outer();