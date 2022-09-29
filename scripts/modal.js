const btnRegisterValue = document.getElementById('btnRegistry')


btnRegisterValue.addEventListener('click', function(){

    const htmlReference = document.querySelector('body')
    const modalWrapper = document.createElement('div')
    const modalMain = document.createElement('div')
    const modalDivOne = document.createElement('div')
    const modalDivOneSpan = document.createElement('span')
    const modalDivOneBtn = document.createElement('button')
    const modalDivTwo = document.createElement('div')
    const modalDivTwoP = document.createElement('p')
    const modalDivThree = document.createElement('div')
    const modalDivThreeSpan = document.createElement('span')
    const modalDivThreeInput = document.createElement('input')
    const modalDivFour = document.createElement('div')
    const modalDivFourSpan = document.createElement('span')
    const modalDivFourDiv = document.createElement('div')
    const modalDivFourDivBtnOne = document.createElement('button')
    const modalDivFourDivBtnTwo = document.createElement('button')
    const modalDivFourDivTwo = document.createElement('div')
    const modalDivFourDivTwoBtnOne = document.createElement('button')
    const modalDivFourDivTwoBtnTwo = document.createElement('button')

    modalWrapper.classList = 'modalWrapper flex__row justify__center align__center full_w full_h'
    modalMain.classList = 'modal flex__column'
    modalDivOne.classList = 'flex__row justify__between align__center'
    modalDivOneSpan.classList = 'title2-bold' 
    modalDivOneBtn.classList = 'div__modal-1-button'
    modalDivTwo.classList = 'text1-bold'
    modalDivTwoP.classList = ''
    modalDivThree.classList = 'div__modal-3 flex__column'
    modalDivThreeSpan.classList = 'text2-medium'
    modalDivThreeInput.classList = 'div__modal-3-input full_w'
    modalDivFour.classList = 'flex__column'
    modalDivFourSpan.classList = 'text2-medium mb-2'
    modalDivFourDiv.classList = 'div__modal-4__div-1 full_w flex__column'
    modalDivFourDivBtnOne.classList = 'div__modal-4__div-1-button full_w text3-medium'
    modalDivFourDivBtnTwo.classList = 'div__modal-4__div-1-button full_w text3-medium'
    modalDivFourDivTwo.classList = 'div__modal-4__div-2 full_w flex__row justify__between'
    modalDivFourDivTwoBtnOne.classList = 'div__modal-4__div-2__btn-1 text3-medium'
    modalDivFourDivTwoBtnTwo.classList = 'div__modal-4__div-2__btn-2 text3-medium'

    modalWrapper.id = 'wrapper'

    modalDivOneSpan.innerText = 'Registro de valor'
    modalDivOneBtn.innerText = 'X'
    modalDivTwoP.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'
    modalDivThreeSpan.innerText = 'Valor'
    modalDivFourSpan.innerText = 'Tipo de valor'
    modalDivFourDivBtnOne.innerText = 'Entrada'
    modalDivFourDivBtnTwo.innerText = 'Saída'
    modalDivFourDivTwoBtnOne.innerText = 'Cancelar'
    modalDivFourDivTwoBtnTwo.innerText = 'Inserir valor'

    modalDivOneBtn.addEventListener('click', function(){
        let wrapper = document.getElementById('wrapper')
        return wrapper.remove()
    })

    modalDivFourDivTwoBtnOne.addEventListener('click', function(){
        let wrapper = document.getElementById('wrapper')
        return wrapper.remove()
    })

    modalDivFourDiv.append(modalDivFourDivBtnOne, modalDivFourDivBtnTwo)
    modalDivFourDivTwo.append(modalDivFourDivTwoBtnOne, modalDivFourDivTwoBtnTwo)
    modalDivFour.append(modalDivFourSpan, modalDivFourDiv, modalDivFourDivTwo)
    modalDivThree.append(modalDivThreeSpan, modalDivThreeInput)
    modalDivTwo.append(modalDivTwoP)
    modalDivOne.append(modalDivOneSpan, modalDivOneBtn)
    modalMain.append(modalDivOne, modalDivTwo, modalDivThree, modalDivFour)
    modalWrapper.append(modalMain)

    htmlReference.append(modalWrapper)
})
