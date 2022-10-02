
let main = document.querySelector('main')

function showQuation(arr){
for (let i = 0; i < arr.length; i++) {
   const arrElement = arr[i];

   let p = document.createElement('p')
   let hr = document.createElement('hr')

   p.append(arrElement.text)
   main.append(p)

   for (let i = 0; i < arrElement.variants.length ; i++) {
      const variant = arrElement.variants[i];

      let divForInp = document.createElement('div')
      let inpRadio = document.createElement('input')
      let label = document.createElement('label')

      inpRadio.type = 'radio'
      inpRadio.id = variant
      inpRadio.name = arrElement.variants
      inpRadio.required = true
      label.innerHTML = variant

      divForInp.append(inpRadio)
      divForInp.append(label)
      main.append(divForInp) 
      main.append(hr)
   }  
}
}
showQuation(tests)
buttonLogic()

      let bill = 0 
      let procent = 0

function buttonLogic(){
   let button = document.createElement('button')
   button.classList.add('checkBtn')
   button.innerHTML = 'Проверить'
   main.append(button)

   button.addEventListener('click', function(){

      

      let inputs = document.querySelectorAll('input')

      for (let i = 0; i < inputs.length; i++) {
         const input = inputs[i];

         if(input.checked){

            for (let i = 0; i < tests.length; i++) {
               const element = tests[i];

               if(input.id == element.answer){
                  bill++
                  procent += 10
                  }            
            }
         }
            input.checked = false
      }
      if(button){
         showResult() 
         button.setAttribute('disabled', true)
         window.scrollBy(0,170)
      }
      

   })

}

function showResult(){
   let divResult = document.createElement('div')
   let restartBtn = document.createElement('button')
   restartBtn.innerHTML = 'Пройти еще раз'
   restartBtn.addEventListener('click', function(){
      window.scrollTo(0,0)
      location.reload()
   })
   main.append(divResult)

   if(procent >= 70){
      divResult.textContent = `Поздравляю вы прошли тест успешно на ${procent}%. Вы ответили на ${bill} с ${tests.length} `
      divResult.classList.add('complited')
   divResult.append(restartBtn)

   }else{
      divResult.innerHTML = `Увы вы не прошли тест! ${procent}%. Вы ответили на ${bill} с ${tests.length}`
      divResult.classList.add('not-complited')
      divResult.append(restartBtn)
   }


}


