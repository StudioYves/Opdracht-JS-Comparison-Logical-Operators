const age = 25;
const isFemale = false;
const driverStatus = 'bob';
const yourName = 'Bram';
const totalAmount = 35;

if (age >= 18){
    console.log("Welkom. Je mag in deze kroeg naar binnen!")
}else{
    console.log("Je bent helaas nog te jong. Helaas moet ik je verzoeken om buiten te blijven.")
};

if (isFemale == true){
    console.log("Als vrouw ben je van harte welkom vanavond!")
}else{
    console.log("Pech gehad, het is vanavond Ladies Only!")
};

if (driverStatus == 'bob'){
    console.log('Keurig, je hebt geen alcohol gedronken en mag zelf naar huis rijden.')
} else{
    console.log('Je hebt teveel alochol gedronken. Het is niet toegestaan om zelf naar huis te rijden.')
};

//Opdracht JS Comparison && Logical Operators
if (age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!")
};

if (yourName === 'Bram' || yourName === 'Sarah'){
    console.log('Onze kroeg bestaat 50 jaar. Omdat jij Bram of Sarah heet, krijg je van ons een gratis biertje!')
};

if (totalAmount > 25 && totalAmount <=50){
    console.log('Omdat je meer dan 25 euro hebt uitgegeven, ontvang je een gratis portie bitterballen!')
}   else if(totalAmount > 50 && totalAmount <=100){
    console.log('Omdat je meer dan 50 euro hebt uitgegeven, ontvang je een gratis portie nachos!')
}   else if(totalAmount > 100){
    console.log('Omdat je meer dan 100 euro hebt uitgegeven, ontvang je een gratis flesje champagne!')
};


