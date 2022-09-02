window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculatelove);
}

function calculatelove(){
    let yourName = document.getElementById("your-name").value;
    let partnerName = document.getElementById("partner").value;

    if (yourName != "" && partnerName != ""){
        let percentage = Math.floor(Math.random() * 101); // 0-0.999999 + 101 -> 0- 100.999999
        document.getElementById("result-message").innerText = yourName + " and " + partnerName + "'s chance of love: ";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
}