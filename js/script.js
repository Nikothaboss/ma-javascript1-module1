const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// * Question 1

const cat = {complain: ()=>{
    console.log("Meow")
}}
cat.complain()

console.log(cat)

// * Question 2
const heading = document.querySelector("h3")
heading.innerHTML =  "Updated heading"

// * Question 3
heading.style.fontSize = "2em"

// * Question 4
heading.classList += "subheading"

// * Question 5
const paragraphs = document.querySelectorAll("p")
paragraphs.forEach(p => {
    p.style.color = "red"
})

// * Question 6
const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = `<p>New paragraph</p>`
resultsContainer.style.background = "yellow"

// * Question 7
const listChecker = (list) =>{
    for(i of list){
        console.log(i.name)
    }
}
listChecker(cats)

// * Question 8
let catContainer = document.querySelector(".cat-container")
const createCats = (cats) =>{
    for(const cat of cats){
        if(cat.age === undefined){
            cat.age = "Age unknown"
        }
        let newDiv = `
        <div>
            <h2>${cat.name}</h2> 
            <p>${cat.age}</p>
        </div>
        `;
        catContainer.innerHTML += newDiv
    }
    
}
createCats(cats)


