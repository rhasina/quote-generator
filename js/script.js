let loveSet=[];
let motivationSet=[];

// Get html component
let quoteNumber=document.getElementById("quote_number");
let quoteCategory=document.getElementsByName("category");
let generateBtn=document.getElementById("generate");
let exitBtn = document.getElementById("exit");
let quoteSection=document.getElementById("quote");

// Load json
const fetchQuote = () => {
    const jsonQuote='js/quotes.json';    
    fetch(jsonQuote).then((response) => response.json()).then((data)=>groupQuotes(data)).catch((error) => console.error(error));
}

// Group quotes by category
const groupQuotes = (quotes) =>{    
    for (let i=0; i< quotes.length;i++){
        if (quotes[i].category==="Love"){
            loveSet.push(quotes[i]);
        }
        else{
            motivationSet.push(quotes[i]);
        }
    }
}

const detectCategory = () =>{
     if (quoteCategory[0].checked){
        return selectQuote(loveSet);
    }
    else{
        return selectQuote(motivationSet);            
    }
}

const selectQuote = (quoteSet) =>{
    let randomBeginning= generateRandom(quoteSet);
    let randomMiddle=generateRandom(quoteSet);
    let randomEnd=generateRandom(quoteSet);
    return  quoteSet[randomBeginning].begin + ' ' +  quoteSet[randomMiddle].middle + ' ' + quoteSet[randomEnd].end;
}

// Generate random number
const generateRandom = (array) =>{
    return Math.floor(Math.random() * array.length); 
} 

// Generate quote according to the selected number
const generateQuote = (digit) =>{     
    if (Number(digit)>0 && Number(digit)<6){
        quoteSection.innerHTML='';
        for (let i=0;i<Number(digit);i++){            
            quoteSection.innerHTML +="<p><span>'' </span>"+ detectCategory() + "<span> ''</span></p>";  
        }
    }    
    else{
        alert('Please, choose a number from 1 to 5');
    }
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
    generateQuote(quoteNumber.value);
});
exitBtn.addEventListener('click', () => exitProgram());

const startApp = () =>{fetchQuote();}
startApp();