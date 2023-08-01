const modalContainer = document.getElementById("modal-container")
const closeBtn = document.getElementById("close-button")
const pageForm = document.getElementById("page-form")
const formButtons = document.getElementById("form-buttons")
const declineBtn = document.getElementById("decline-btn")
const acceptBtn = document.getElementById('accept-btn')
const innerModal = document.getElementById('modal-text')
const modalTwo = document.getElementById('inner-modal')

setTimeout(function(){
    modalContainer.style.display = "inline";
}, 1500)

closeBtn.addEventListener("click", function(){
    modalContainer.style.display = "none";
})

pageForm.addEventListener("submit", function(e){
    e.preventDefault()

    const submitFormData = new FormData(pageForm)
    const name = submitFormData.get("username")
    innerModal.innerHTML = `
        <img src="loading.svg" class="animation">

        <p id="loading-text">Uploading your data to the dark web...</p>
        `

    
    setTimeout(function(){
            document.getElementById('loading-text').innerText = `
            Making the sale... `
    }, 1500)



    setTimeout(function(){
        document.getElementById('modal-container2').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="pirate.gif">
        <div>
        `

        closeBtn.disabled = false;
    }, 3000)
})

declineBtn.addEventListener("mouseenter", function(){
    formButtons.classList.toggle("reverse")
})
