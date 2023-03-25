//Get all the countries with a population of less than 2 lakhs using Filter function

let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")       
    request.send();
    request.onload=function(){
        let data=JSON.parse(request.response)                     
        data=data.filter((country)=>country.population<200000)      
        data.sort((a,b)=>a.population-b.population); 
        console.log("countries with a population of less than 2 lakhs")
        data.forEach((element,i) => {                            
            console.log(`
            ${i} ${element.name.common}
            Population : ${element.population}`);                 
        })
    }

//output:
//countries with a population of less than 2 lakhs
//population.js:12 
//            0 Bouvet Island
//            Population : 0
//population.js:12 
//            1 Heard Island and McDonald Islands
//            Population : 0
//population.js:12 
//            2 South Georgia
//            Population : 30
//population.js:12 
//            3 Pitcairn Islands
//            Population : 56
//population.js:12 
//            4 United States Minor Outlying Islands
//            Population : 300
//population.js:12 
//            5 French Southern and Antarctic Lands
//            Population : 400
//population.js:12 
//            6 Vatican City
//            Population : 451
//population.js:12 
//            7 Cocos (Keeling) Islands
//            Population : 544
//population.js:12 
//            8 Antarctica
//            Population : 1000
//population.js:12 
//            9 Tokelau
//            Population : 1411
//population.js:12 
//            10 Niue
//            Population : 1470
//population.js:12 
//            11 Christmas Island
//            Population : 2072
//population.js:12 
//            12 Norfolk Island
//            Population : 2302
//population.js:12 
//            13 Svalbard and Jan Mayen
//            Population : 2562
//population.js:12 
//            14 Falkland Islands
//            Population : 2563
//population.js:12 
//            15 British Indian Ocean Territory
//            Population : 3000
//population.js:12 
//            16 Saint Barthélemy
//            Population : 4255
//population.js:12 
//            17 Montserrat
//            Population : 4922
//population.js:12 
//            18 Saint Pierre and Miquelon
//            Population : 6069
//population.js:12 
//            19 Nauru
//            Population : 10834
//population.js:12 
//            20 Wallis and Futuna
//            Population : 11750
//population.js:12 
//            21 Tuvalu
//            Population : 11792
//population.js:12 
//            22 Anguilla
//            Population : 13452
//population.js:12 
//            23 Palau
//            Population : 18092
//population.js:12 
//            24 Cook Islands
//            Population : 18100
//population.js:12 
//            25 Caribbean Netherlands
//            Population : 25987
//population.js:12 
//            26 Åland Islands
//            Population : 29458
//population.js:12 
//            27 British Virgin Islands
//            Population : 30237
//population.js:12 
//            28 Gibraltar
//            Population : 33691
//population.js:12 
//            29 San Marino
//            Population : 33938
//population.js:12 
//            30 Liechtenstein
//            Population : 38137
//population.js:12 
//            31 Saint Martin
//            Population : 38659
//population.js:12 
//            32 Turks and Caicos Islands
//            Population : 38718
//population.js:12 
//            33 Monaco
//            Population : 39244
//population.js:12 
//            34 Sint Maarten
//            Population : 40812
//population.js:12 
//            35 Faroe Islands
//            Population : 48865
//population.js:12 
//            36 Saint Kitts and Nevis
//            Population : 53192
//population.js:12 
//            37 Saint Helena, Ascension and Tristan da Cunha
//            Population : 53192
//population.js:12 
//            38 American Samoa
//            Population : 55197
//population.js:12 
//            39 Greenland
//            Population : 56367
//population.js:12 
//            40 Northern Mariana Islands
//            Population : 57557
//population.js:12 
//            41 Marshall Islands
//            Population : 59194
//population.js:12 
//            42 Guernsey
//            Population : 62999
//population.js:12 
//            43 Bermuda
//            Population : 63903
//population.js:12 
//            44 Cayman Islands
//            Population : 65720
//population.js:12 
//            45 Dominica
//            Population : 71991
//population.js:12 
//            46 Andorra
//            Population : 77265
//population.js:12 
//            47 Isle of Man
//            Population : 85032
//population.js:12 
//            48 Antigua and Barbuda
//            Population : 97928
//population.js:12 
//            49 Seychelles
//            Population : 98462
//population.js:12 
//            50 Jersey
//            Population : 100800
//population.js:12 
//            51 Tonga
//            Population : 105697
//population.js:12 
//            52 United States Virgin Islands
//            Population : 106290
//population.js:12 
//            53 Aruba
//            Population : 106766
//population.js:12 
//            54 Saint Vincent and the Grenadines
//            Population : 110947
//population.js:12 
//            55 Grenada
//            Population : 112519
//population.js:12 
//            56 Micronesia
//            Population : 115021
//population.js:12 
//            57 Kiribati
//            Population : 119446
//population.js:12 
//            58 Curaçao
//            Population : 155014
//population.js:12 
//            59 Guam
//            Population : 168783
//population.js:12 
//            60 Saint Lucia
//            Population : 183629
//population.js:12 
//            61 Samoa
//            Population : 198410