let companyURL ="https://636d633891576e19e327545a.mockapi.io/companies"


//Navigation Bar 


//Search Section 

let companyobj = [{
   name:"Remote >",
   img: "https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"

}, {
    name:"MNC >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
},
{
    name:"Analytics >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg"
},
{
    name:"Fresher >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg"
},
{
    name:"Project Manager >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg"
},
{
    name:"Software & IT >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg"
},
{
    name:"Startup >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg"
},
{
    name:"Engineering >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg"
},{
    name:"HR >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"
},{
    name:"Fortune 500 >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg"
},{
    name:"Marketing >",
    img:"https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"
}]

rendercompanycarddata(companyobj)

function rendercompanycarddata(arr){
    let renderCard = document.querySelector("#jobcard")
    arr.forEach(element => {
        let card = document.createElement("div")
        card.classList.add("companydatacard")
      let name = document.createElement("h4");
      name.innerText = element.name;
//console.log(name)
      let image = document.createElement("img");
      image.setAttribute("src",element.img)
     
      card.append(image,name)
      renderCard.append(card)
     // console.log()


})
}

//Company Hiring Section 



//Featured Companies 


function render_featurecard(arr){
    let featurecard = document.querySelector("#featureslide");
    arr.forEach(element=>{
        let card = document.createElement("div");
        let img = document.createElement("image");
        img.setAttribute("src",element.avatar)
        let subcard = document.createElement("div")
        
        let name = document.createElement("h4");
        name.innerText=element.companyName;
        console.log(name)
        let rating = document.createElement("p");
        rating.innerText = element.rating;
        console.log(rating)
        let review = document.createElement("p");
        review.innerText = "Reviews"
        let desc = docuument.createElement("p");
        desc.innerText=element.description
        let job = document.createElement("button");
        job.innerText="View Job"

        subcard.append(name,rating,review,desc,job)
        card.append(img,subcard)
        featurecard.append(card)
        
    })
}

//Job Across Popular roles 

//Sponsered Companies  

//Interview Prepration Section  

//Grow your Career through Learning  

//Video Profile  

//Footer  

// testing
async function fetchdata(){
    try {
        let res = await fetch(companyURL)
        let data = await res.json()
       console.log(data)
       //renderdata(data)
       //rendercompanydata(data)
       //render_featurecard(data)
    } catch (error) {
        alert("someting went wrong")
    }
}
fetchdata();


 function renderdata(arr){
    let renderCard = document.querySelector("#searchsection")
    arr.forEach(element => {
        let card = document.createElement("div")
      let name = document.createElement("h3");
      name.innerText = element.companyName;
    //console.log(name)
      let image = document.createElement("img");
      image.setAttribute("src",element.avatar)
     
      card.append(name,image)
      renderCard.append(card)
     // console.log()


})
}
