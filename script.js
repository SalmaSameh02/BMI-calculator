result=document.getElementById("result");
weight=document.getElementById("weight");
height=document.getElementById("height");
category=document.getElementById("category");

function calculateBmi(){
    let H = (height.value)/100;
    let W = weight.value;

    let bmi = W/(H**2);
    let approximatedBmi = bmi.toFixed(2);
    result.innerHTML = approximatedBmi;
    

    if(approximatedBmi<18.5){
        category.innerHTML="Underweight";
        result.style.color = "red";
        category.style.color = "red";
    }
    else if(approximatedBmi>=18.5 && approximatedBmi<=24.9){
        category.innerHTML = "Normal";
        result.style.color = "green";
        category.style.color = "green";
    }
    else if(approximatedBmi>=25 && approximatedBmi<=29.9){
        category.innerHTML = "Overweight";
        result.style.color = "yellow";
        category.style.color = "yellow";
    }
    else{
        category.innerHTML = "Obese";
        result.style.color = "red";
        category.style.color = "red";
    }

}