const num = document.getElementById('num')
const btn = document.getElementById('btn')
const final = document.getElementById('final')

const max = prompt("Enter The Max Number: ")
const random = Math.floor(Math.random() * max)+1

btn.addEventListener('click', () => {
    const guess = parseInt(num.value);
    if(isNaN(guess) || guess < 1 || guess > max){
        final.textContent = "Please Enter a Valid Number Between 1 and Max.";
        final.style.fontSize = "1.2rem";
    }else if(guess === random){
        final.textContent = 'Congratulations! You guessed it right!';
        final.style.fontSize = "1.2rem";
    } else if(guess < random){
        final.textContent = 'Too Low! Try Again';
        final.style.fontSize = "1.2rem";
    }else{
        final.textContent = 'Too High! Try Again';
        final.style.fontSize = "1.2rem";
    }
}); 