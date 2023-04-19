let a=parseInt(prompt("nhap vao so thu nhat:"));
let b=parseInt(prompt("nhap vao so thu hai:"));

function isAndSumValue(a,b){
    if(a>b){
        alert("so thu nhat lon hon so thu hai");
    }else {
        return a+b;
    }
}

let result=isAndSumValue(a,b);
alert(result);