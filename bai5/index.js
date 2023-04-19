let value=prompt("nhap vao ngoi sao");
let arrOne=["Polaris", "Aldebaran"," Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arrTrue=["Ursa Minor", "Tarurus", "Cygnus", "Lyra"," Aquila", "Ursa Major", "Leo"];

let result=searchSao(value);
alert("ten ngoi sao do la: " +result);

function searchSao(value){
    for(let i=0;i<arrOne.length;i++){
        if(arrOne[i]==value){
            return arrTrue[i];
        }
    }
}