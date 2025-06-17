document.getElementById("colorButton").addEventListener("click", function() {
    const colors=["#e74c3c", "#8e44ad", "#3498db", "#27ae60", "#f39c12"];
    const randomColor=colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor=randomColor;
});
function showGreeting() {
    const hour=new Date().getHours();
    let message;
    if(hour<12) {
        message="Good morning!";
    }else if(hour<18) {
        message="Good afternoon!";
    }else{
        message="Good Evening!";
    }
    alert(message);
}
function calculate() {
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum=num1+num2;
        document.getElementById("result").textContent=`Result: ${sum}`;
    }else{
        document.getElementById("result").textContent="Please enter valid numbers.";
    }
}
