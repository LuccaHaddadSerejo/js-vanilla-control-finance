const listValues = document.createElement('ul')
  listValues.id = 'ulFull'
const btnFilterAll = document.getElementById('filterAll')
const btnFilterEntrada = document.getElementById('filterEntrada')
const btnFilterSaida = document.getElementById('filterSaida')


const valuesCategory = ["Entrada", "Saída"];


let insertedValues = [];

let renderList = (valuesList) => {
  let main = document.getElementById('app')

  if (valuesList.length == 0){
      listValues.innerHTML = ''
      listValues.classList = 'full_w'
      let emptyListDiv = document.createElement('div')
      let emptyListSpanOne = document.createElement('span')
      let emptyListSpanTwo = document.createElement('span')

      emptyListSpanOne.innerText = 'Nenhum valor registrado'
      emptyListSpanTwo.innerText = 'Registrar novo valor'

      emptyListDiv.classList = 'empty_list full_w flex__column justify__around align__center gap-6 backgroundColor-1'
      emptyListSpanOne.classList = 'text2-bold'
      emptyListSpanTwo.classList = 'text2-medium'

      emptyListDiv.append(emptyListSpanOne, emptyListSpanTwo)
      listValues.append(emptyListDiv)
      main.append(listValues)
  }
  else{   
          listValues.innerHTML = ''
          listValues.classList = 'full_w flex__column gap-5'

          valuesList.forEach(objectFull => {
              let listItems = document.createElement('li')
              let listItemsSpan = document.createElement('span')
              let listItemsDiv = document.createElement('div')
              let listItemsDivSpan = document.createElement('span')
              let listItemsDivBtn = document.createElement('button')
              let listItemsDivBtnImg = document.createElement('img')

              listItems.classList =  'section-3__li flex__row justify__between align__center backgroundColor-3 full_w'
              listItemsSpan.classList = 'text2-medium'
              listItemsDiv.classList = 'section-3__li__div flex__row justify__between align__center gap-4'
              listItemsDivSpan.classList = 'section-3__li__div-span backgroundColor-2 text2-regular'
              listItemsDivBtn.classList = 'button__trash'

              listItemsSpan.innerText = `R$ ${objectFull.value}`
              if(objectFull.categoryID == 0){
                listItemsDivSpan.innerText = 'entrada'
              }else if(objectFull.categoryID == 1){
                listItemsDivSpan.innerText = 'saída'
              }
              listItemsDivBtnImg.src = '../../assets/trash.svg'

              listItemsDivBtn.addEventListener('click', function(){
                  listValues.innerHTML = ''
                  
                  valuesList.splice(objectFull, 1)
                  sumOfValues(insertedValues)
                  renderList(valuesList)   
              })
                 
              listItemsDivBtn.append(listItemsDivBtnImg)
              listItemsDiv.append(listItemsDivSpan, listItemsDivBtn)
              listItems.append(listItemsSpan, listItemsDiv)
              listValues.append(listItems)

          });
      return main.append(listValues)
  }
}

renderList(insertedValues)

let sumOfValues = (listOfValues) => {
    const sectionSum = document.getElementById('sectionSum')
    const counter = document.createElement('span')
    const totalValue = document.createElement('span')

          totalValue.classList = 'text2-medium'
          counter.classList = 'text2-medium'
          totalValue.innerText = "Valor total:"
      if(listOfValues.length == 0){
        counter.innerText = `R$ ${0},00`
      }else{
        let valuesMapping = listOfValues.map((objectFull) => objectFull.value)
        let sum =  valuesMapping.reduce((previousValue, actualValue) => previousValue + actualValue, 0)
        counter.innerText = `R$${sum}`
      }
    sectionSum.innerHTML='' 
    sectionSum.append(totalValue,counter)
}

sumOfValues(insertedValues)

btnFilterAll.addEventListener('click', function(){
    listValues.innerHTML = ''
    renderList(insertedValues)
})


btnFilterEntrada.addEventListener('click', function(){
  let filteringEntrada = insertedValues.filter(objectFull => objectFull.categoryID == 0)
  listValues.innerHTML = ''
  renderList(filteringEntrada)
})

btnFilterSaida.addEventListener('click', function(){
  let filteringSaida = insertedValues.filter(objectFull => objectFull.categoryID == 1)
  listValues.innerHTML = ''
  renderList(filteringSaida)
})









