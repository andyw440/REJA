console.log('training task ishga tushdi.');

/*
    Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
    sozdan qatnashga sonini return qilishi kerak boladi. MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/
function countLetter(letter,word){
    const arr = word.split('')
    let count = 0
   
    arr.forEach(item => {
        if(item === letter){
            count++
        }
    })
    return count

    
}

console.log(countLetter('r' , 'cristiano'));

