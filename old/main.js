const card = document.querySelector('.cards')

card.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn_options')) {
    const popupOption = event.currentTarget.querySelector('.popup_option')
    event.target.innerHTML = 'X'
    popupOption.classList.toggle('popup_hidden')
  }

})