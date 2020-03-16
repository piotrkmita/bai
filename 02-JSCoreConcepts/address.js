title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

let fullString = title+" "+name+" "+surname+"\nul. "+street+"\n"+zip+" "+city+"\n"+country+"\n";
let fullStringWithFormating = `${title} ${name} ${surname} \nul. ${street} \n${zip} ${city}\n${country} \n`;

print_twice(fullString)
print_twice(fullStringWithFormating)

function print_twice(data){
    for (let n=0; n<2; n++) {
        console.log(data);
    }
}


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
