const FACT_URL="https://anime-facts-rest-api.herokuapp.com/api/v1";

const animeName=document.querySelector('.anime-name');
const animeImage=document.querySelector('.anime-image');
const animeFactt=document.querySelector('.anime-fact');
function animeFact(name){
    let ANIME_URl="https://anime-facts-rest-api.herokuapp.com/api/v1/"
    ANIME_URl+=name;
    const fact =fetch(ANIME_URl);
        fact
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let fact= data.data;
            console.log(fact)
            console.log(fact[0].fact)
              
            for(let i =0 ;i<fact.length;i++){

                
               animeFactt.innerText+=fact[i].fact;
              
                
                
             }
             animeName.addEventListener("change",function(){
                animeFactt.innerText=null;
             })
            
            
        })
    

}
const list =fetch(FACT_URL);
        list
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                 a = data;
                  obj=a.data;  
                  
                 for(let i =0 ;i<obj.length;i++){
                     const option = document.createElement('option')
                     option.value =(obj[i].anime_name)
                     option.innerText=(obj[i].anime_name)
                     animeName.append(option)
                  }
                });
            animeName.addEventListener("change",function(event){
                let name = event.target.value;
                animeFact(name);
                
                let animeIMG= obj.find( ({anime_name}) => anime_name===name).anime_img
                animeImage.src=animeIMG
               
            })
