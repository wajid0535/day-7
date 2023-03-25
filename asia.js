// Get all the countries from the Asia continent /region using the Filter function

let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")   
    request.send();
    request.onload=function(){
        let data=JSON.parse(request.response)                   
        data=data.filter((country)=>country.region==="Asia")       
        console.log("Asia continent/region")
        data.forEach((element,i) => {                         
            console.log(`
            ${i} ${element.name.common}`);                   
        })
    }

    //output:
//    Asia continent/region
//filter.js:11 
//            0 Singapore
//filter.js:11 
//            1 Maldives
//filter.js:11 
//            2 Jordan
//filter.js:11 
//            3 Bangladesh
//filter.js:11 
//            4 Bhutan
//filter.js:11 
//            5 India
//filter.js:11 
//            6 Cambodia
//filter.js:11 
//            7 Israel
//filter.js:11 
//            8 Turkey
//filter.js:11 
//            9 Macau
//filter.js:11 
//            10 Myanmar
//filter.js:11 
//            11 Lebanon
//filter.js:11 
//            12 Philippines
//filter.js:11 
//            13 Kazakhstan
//filter.js:11 
//            14 Tajikistan
//filter.js:11 
//            15 Azerbaijan
//filter.js:11 
//            16 Afghanistan
//filter.js:11 
//            17 Qatar
//filter.js:11 
//            18 Yemen
//filter.js:11 
//            19 Iran
//filter.js:11 
//            20 Syria
//filter.js:11 
//            21 North Korea
//filter.js:11 
//            22 Bahrain
//filter.js:11 
//            23 Georgia
//filter.js:11 
//            24 Mongolia
//filter.js:11 
//            25 Indonesia
//filter.js:11 
//            26 Armenia
//filter.js:11 
//            27 United Arab Emirates
//filter.js:11 
//            28 Pakistan
//filter.js:11 
//            29 Turkmenistan
//filter.js:11 
//            30 Brunei
//filter.js:11 
//            31 Kuwait
//filter.js:11 
//            32 Saudi Arabia
//filter.js:11 
//            33 Malaysia
//filter.js:11 
//            34 Nepal
//filter.js:11 
//            35 Kyrgyzstan
//filter.js:11 
//            36 Hong Kong
//filter.js:11 
//            37 Timor-Leste
//filter.js:11 
//            38 Vietnam
//filter.js:11 
//            39 Japan
//filter.js:11 
//            40 China
//filter.js:11 
//            41 Laos
//filter.js:11 
//            42 Palestine
//filter.js:11 
//            43 Iraq
//filter.js:11 
//            44 Thailand
//filter.js:11 
//            45 Uzbekistan
//filter.js:11 
//            46 Sri Lanka
//filter.js:11 
//            47 Taiwan
//filter.js:11 
//            48 South Korea
//filter.js:11 
//            49 Oman