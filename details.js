//Print the following details name, capital, flag using forEach function

let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")      
    request.send();
    request.onload=function(){
        let data=JSON.parse(request.response)         
        console.log("name, capital, flag")
        data.forEach((element,i) => {                          
            console.log(`
        Name    : ${element.name.common}
        Capital : ${element.capital}
        Flag    : ${element.flags.png}`);               
        })
    }

    //output:
//    name, capital, flag
//details.js:10 
//        Name    : Guatemala
//        Capital : Guatemala City
//        Flag    : https://flagcdn.com/w320/gt.png
//details.js:10 
//        Name    : Singapore
//        Capital : Singapore
//        Flag    : https://flagcdn.com/w320/sg.png
//details.js:10 
//        Name    : Bosnia and Herzegovina
//        Capital : Sarajevo
//        Flag    : https://flagcdn.com/w320/ba.png
//details.js:10 
//        Name    : Maldives
//        Capital : Malé
//        Flag    : https://flagcdn.com/w320/mv.png
//details.js:10 
//        Name    : Latvia
//        Capital : Riga
//        Flag    : https://flagcdn.com/w320/lv.png
//details.js:10 
//        Name    : Greece
//        Capital : Athens
//        Flag    : https://flagcdn.com/w320/gr.png
//details.js:10 
//        Name    : Cocos (Keeling) Islands
//        Capital : West Island
//        Flag    : https://flagcdn.com/w320/cc.png
//details.js:10 
//        Name    : Mayotte
//        Capital : Mamoudzou
//        Flag    : https://flagcdn.com/w320/yt.png
//details.js:10 
//        Name    : Jordan
//        Capital : Amman
//        Flag    : https://flagcdn.com/w320/jo.png
//details.js:10 
//        Name    : Bangladesh
//        Capital : Dhaka
//        Flag    : https://flagcdn.com/w320/bd.png
//details.js:10 
//        Name    : American Samoa
//        Capital : Pago Pago
//        Flag    : https://flagcdn.com/w320/as.png
//details.js:10 
//        Name    : Italy
//        Capital : Rome
//        Flag    : https://flagcdn.com/w320/it.png
//details.js:10 
//        Name    : Algeria
//        Capital : Algiers
//        Flag    : https://flagcdn.com/w320/dz.png
//details.js:10 
//        Name    : France
//        Capital : Paris
//        Flag    : https://flagcdn.com/w320/fr.png
//details.js:10 
//        Name    : Bhutan
//        Capital : Thimphu
//        Flag    : https://flagcdn.com/w320/bt.png



