const buyButton = document.querySelector('.decrementButton');
let result = this.props.product.qty;

subtract = () => {
  result --;
  console.log(userInput)

  if(result <= 0){
    resultEl.style.color = 'red';
  }
}

buyButton.addEventListener('click', subtract);
console.log("what up")



// subtract = () => {
//   const userInput = parseInt(document.querySelector('input.input').value, 10);
//   result -= userInput;
//   resultEl.textContent = result;
//   console.log(userInput)
//
//   if(result <= 0){
//     resultEl.style.color = 'red';
//   }
// }
