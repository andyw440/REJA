console.log('training task ishga tushdi.');

/*
    Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
    sozdan qatnashga sonini return qilishi kerak boladi. MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/
// #Solve 
// function countLetter(letter,word){
//     const arr = word.split('')
//     let count = 0
   
//     arr.forEach(item => {
//         if(item === letter){
//             count++
//         }
//     })
//     return count

    
// }

// console.log(countLetter('r' , 'cristiano'));


const list = [
    'yaxshi talaba boling' , //0-20
    'togri boshliq tanlang , va koproq xato qiling' , //20-30
    "uzingizga ishlashni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling" ,  //40-50
    "yoshlarga investitsya qiling", //50-60
    "endi dam oling ,  endi kech afsus"
]

async function maslahatBering(age){
    if(typeof age !== 'number')  throw new Error('insert a number')
        else if(age <= 20) return list[0];
    else if(age >20 && age<=30) return list[1]
    else if(age >30 && age<=40) return list[2]
    else if(age >40 && age<=50) return list[3]
    else if(age >50 && age<=60) return list[4]
    else{
    return new Promise((resolve, reject) => {
             setTimeout(() => {
            resolve(list[5]) 
        },5000);
    });
    }
}



//async/await - to'liq javob olinmaguncha keyingi qismga o'tmaydi . step by step ishlashga juda katta yordam beradi .
console.log('passed here 0');

async function run(){
    let javob = await maslahatBering(65)
    console.log(javob);
     javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(45)
    console.log(javob);
}
run()
console.log('passed here 1');


// then/catch
// console.log('passed here 0'); // sync task
// maslahatBering(35) // microtask in event loop
//                 .then((data )=> console.log('javob:', data))
//                 .catch(err => console.log('ERROR:' , err))
                
// // in event loop micro tasks will be done before macrotasks 

// setTimeout(() => { // macrotask 
//     console.log('it took 2 seconds to read async settimeout');
    
// },2000)
    


// 2-EXAMPLE for callback

// const fs = require('fs')

// console.log('1. Fayl oqish boshlandi .');

// fs.readFile('text.txt' ,'utf-8' , (err,data) => {
//     if(err){
//         console.error('xatolik yuz berdi :' , err);
//         return;
//     }
//     console.log("3. Fayl  o'qildi. Ma'lumot:");
//     console.log(data);
    
// })

// console.log("2. Fayl o'qish boshlangan dastur boshqa ishlarni bajarmoqda...");


