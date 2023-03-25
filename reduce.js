//Print the total population of countries using reduce function

let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all");      
    request.send();
    request.onload=function(){
        let data=JSON.parse(request.response)                    
        let total_populaiton=(data).reduce((previous,current)=>(+previous)+(+current.population),0);
                                                                   
        console.log(`
        total population:   ${total_populaiton}
        `);                                                        
    };

    //output:
    //total population:   7777721563