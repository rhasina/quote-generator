let quotes;
// Get html component
let generateBtn=document.getElementById("generate");
let exitBtn = document.getElementById("exit");
let quoteSection=document.getElementById("quote");

// Load json
const fetchQuote = () => {
    const jsonQuote='js/quotes.json';    
    fetch(jsonQuote).then((response) => response.json()).then((data)=> quotes=data).catch((error) => console.error(error));
}

// Select a random quote
const selectQuote = (quotes) =>{
    let randomBeginning= generateRandom(quotes);
    let randomMiddle=generateRandom(quotes);
    let randomEnd=generateRandom(quotes);
    quote=quotes[randomBeginning].begin + ' ' +  quotes[randomMiddle].middle + ' ' + quotes[randomEnd].end;
    return quote;
}

// Generate random number
const generateRandom = (array) =>{
    return Math.floor(Math.random() * array.length); 
} 

// Generate quote 
const generateQuote = () =>{   
    quoteSection.innerHTML ="<p><span>'' </span>"+ selectQuote(quotes) + "<span> ''</span></p>";         
}

const show= (element) =>{
    element.classList.add("show");
}
// Exit the program
const  exitProgram= () => {
    if (confirm("Are you sure you want to close the window and exit the program?")) {
		window.close();
	}
}

// Buttons interaction
generateBtn.addEventListener('click', () => {
    show(quoteSection);
    show(exitBtn);
    generateQuote();
});
exitBtn.addEventListener('click', () => exitProgram());

const startApp = () =>{fetchQuote();}
startApp();