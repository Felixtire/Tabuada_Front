// 1 Definindo Constantes
const multiplicationForm = document.querySelector
("#multiplication-form");

const numberInput = document.querySelector("#number");

const multiplicatorInput = document.querySelector("#multiplicator");

const resultContainer = document.querySelector("#result");

//2 

multiplicationForm.addEventListener("submit", function (event){
    event.preventDefault(); //Impede que a página recarregue e suma com os dados
     
    const number = parseInt(numberInput.value);
    
    const multiplicator = parseInt(multiplicatorInput.value);

     resultContainer.innerHTML = "";

    for(i = 0; i<=multiplicator;i++){
        const result = number * i;
        
        const line = document.createElement("p");
        
        line.textContent = (`${number} x ${i} = ${result}`);
        
        resultContainer.appendChild(line);
    }
    });

//3 - Convertendo o dado recebido, pois ele não vem em formato de número


// 
//resultContainer.innerHTML = "";

// 5 INICIANDO a parte matemática

