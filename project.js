// Select Elements
const cardBody1 = document.querySelectorAll(".card-body")[0]
const cardBody2 = document.querySelectorAll(".card-body")[1]
const filmForm = document.querySelector("#film-form")
const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director")
const linkInput = document.querySelector("#link")
const clearButton = document.querySelector("#clearAll")

//Start elements event
addElementEvent()

function addElementEvent(){
    filmForm.addEventListener("submit" , newFilm)
    document.addEventListener("DOMContentLoaded" , loadedFilms)
    cardBody2.addEventListener("click" , deleteFilm)
    clearButton.addEventListener("click",clearAllFilms)
}

function newFilm(e){
    titleValue = titleInput.value
    directorValue = directorInput.value
    linkValue = linkInput.value

    const newFilm = new Film(titleValue,directorValue,linkValue)
    
    if(titleValue === '' || directorValue === '' || linkValue === ''){

        UI.showMessage("Lütfen Tüm Boş Alanları Doldurunuz...","danger")

    }

    else{
        UI.addToDoToUI(newFilm)
        Storage.addToDoStorage(newFilm)
        UI.showMessage("Film Başarıyla Eklendi...","success")
    }
        
    UI.clearInputs(titleInput,directorInput,linkInput)
    e.preventDefault()
}

function loadedFilms(){
    const films = storage.getToLocalStorage()

    UI.loadedFromStorage(films)
}

function deleteFilm(e){

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.showMessage("Film Başarıyla Silindi...","success")
    }

    e.preventDefault()
}

function clearAllFilms(e){
    
    if(confirm("Tum Filmleri Silmek Istediginize Emin Misiniz?")){
        UI.clearAllFilmsFormUI()
        Storage.clearAllFilmsFormStorage()

        UI.showMessage("Tum Filmler Başarıyla Silindi...","success")
    }

}