const Submit_btn = document.getElementById("SubmitBtn")
const Bill_input = document.getElementById("Billamount")
const Tip_input = document.getElementById("Tipamount")
const Total_span = document.getElementById("total")

function calculateSum() {
    const billValue = Bill_input.value;
    const tipValue = Tip_input.value;
    const totalValue = billValue * (1 + tipValue / 100);
    if(tipValue > 100 || tipValue < 0){
        Total_span.innerText = "Napiwek musi wynosić od 0 do 100 procent";
    }
    else{
        Total_span.innerText = totalValue.toFixed(2) + ("zł");
    }
    
}

Submit_btn.addEventListener("click" , calculateSum)