// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

function area(a,b,c) { 
    return Math.sqrt((a+(b+c))*(c-(a-b))*(c+(a-b))*(a+(b-c)))/4
}

let wynik = () => `Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${area(a,b,c)}.`;

console.log( wynik() );