// console.log('training task ishga tushdi.');


  /* 
      Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
    sozdan qatnashga sonini return qilishi kerak boladi. MASALAN countLetter("e", "engineer") 3ni return qiladi.
  */
 

// #Solve

// function countSpaces(text){
//     //1-usul
//     // const parts = text.split(' ')
//     // return parts.length - 1

//     // 2-usul

//     let spaceCount = 0

//     for(let i = 0 ; i < text.length ; i++){
//         if(text[i] === ' '){
            
//             spaceCount++
//         }
//     }
//     return spaceCount
// }

// console.log(countSpaces('hello everybody'));


// #Solve 
// function countLetter(letter,word){
//     if(typeof letter === 'string' && typeof word === 'string'){
//         const arr = word.toLowerCase().split('')
//         let count = 0
       
//         arr.forEach(item => {
//             if(item === letter.toLowerCase()){
//                 count++
//             }
//         })
//         return count
//     }else{
//         console.log('please enter word and letter !');
        
//     }
// }



// console.log(countLetter('A' , 'banana'));
// console.log('============');



// TASK B
// function countNumber(text){
//     if(typeof text === 'string'){
//         text =  text.split('')
//         let counter = 0
//         text.forEach(item => {
//             if(!isNaN(item) && item !== ' '){
//                 counter++
//             }
//         })
//         return counter
//     }

// }

// console.log('TASK B , ishtirok etgan raqamlar soni:',countNumber('salom1232'));


console.log('================= TRAIN MODE =================');

/* 
    MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

@MITASK
*/


// class Shop{
//     constructor(non, lagmon, cola ){
//         this.non = non
//         this.lagmon = lagmon
//         this.cola = cola
//     }

//     // Methods

//     qoldiq(){
//         const time = new Date()
//         const hours = time.getHours()
//         const minutes = time.getMinutes()
//         return `hozir ${hours}:${minutes}da ${this.non}ta non , ${this.lagmon}ta lagmon , ${this.cola}ta cola mavjud!`
//     }

//     sotish(sellItem, sellCount){
//        if(this[sellItem] !== undefined){
//         if(this[sellItem] >= sellCount){
//             console.log(this[sellItem]);
//             this[sellItem] -= sellCount
            
//             console.log(`${sellCount}ta ${sellItem} sotildi .`);
//         }else{
//             console.log(`kechirasiz, ${sellItem} yetarli emas .`);
//         }
        
//        }
//        else{
//         console.log(`Bunday mahsulot yo'q:${sellItem}`);
        
//        }
//     }

//     qabul(receiveItem , receiveCount){
//         if(this[receiveItem] !== undefined){
//             this[receiveItem] += receiveCount
//             console.log(`${receiveCount}ta ${receiveItem} qo'shildi .`);
//         }
//         else{
//             console.log(`Bunday mahsulot yo'q:${receiveItem}`);
            
//         }
//     }
// }






// const shop = new Shop(4, 5, 5)

// console.log(shop.qoldiq());
// console.log('========================');

// shop.sotish('cola',2)

// console.log(shop.qoldiq());

// console.log('========================');

// shop.qabul('non',2)
// console.log(shop.qoldiq());



/* 
    @MITASK

    TASK D : 
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/


// function checkContent(string1,string2){
//    string1 = string1.split("").sort().join("")
//    string2 = string2.split("").sort().join("")

// if(string1.length == string2.length && string1 == string2){
//    return true
// }else{
//     return false
// }

   
    
// }
// console.log("checkContent:",checkContent('leapp' , 'apple'));



    /* 
        E-TASK: 

        Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
        MASALAN: getReverse("hello") return qilsin "olleh"

        @MITASK
    
    */

        // function getReverse(string){
        //     return string.split("").reverse().join("")
        // }

        // console.log("reversed form:",getReverse('hello'));
        

        /*
            TASK-F
                Yagona string argumentga ega findDoublers nomli function tuzing
            Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
            true yokida false natija qaytarsin.

            MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

        */

            // function findDoublers(string){
            //     let count = {}
            //     for(let i=0; i < string.length; i++){
            //         let char = string[i]

            //         if(count[char]){                        
            //             return true
            //         }else{
            //             count[char] = 1
            //         }
                    
            //     }
            //     return false
            // }

            // console.log(findDoublers('apple'));
            

            /* 
                TASK G:

                    Yagona parametrga ega function tuzing.
                    Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
                    Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

                    MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
                    Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
                    Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.
            */

            function getHighestIndex(array){
                 let highestNumber = array.reduce((a,b) => (a > b ? a:b))
                return array.indexOf(highestNumber)
            
            }

            console.log(getHighestIndex([5,2,8,6]));
            

/*

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



async/await - to'liq javob olinmaguncha keyingi qismga o'tmaydi . step by step ishlashga juda katta yordam beradi .
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


then/catch
console.log('passed here 0'); // sync task
maslahatBering(35) // microtask in event loop
                .then((data )=> console.log('javob:', data))
                .catch(err => console.log('ERROR:' , err))
                
// in event loop micro tasks will be done before macrotasks 

setTimeout(() => { // macrotask 
    console.log('it took 2 seconds to read async settimeout');
    
},2000)
    


EXAMPLE for callback

const fs = require('fs')

console.log('1. Fayl oqish boshlandi .');

fs.readFile('text.txt' ,'utf-8' , (err,data) => {
    if(err){
        console.error('xatolik yuz berdi :' , err);
        return;
    }
    console.log("3. Fayl  o'qildi. Ma'lumot:");
    console.log(data);
    
})

console.log("2. Fayl o'qish boshlangan dastur boshqa ishlarni bajarmoqda...");
*/












