class UI {

    static addToDoToUI(newFilm) {
        const filmList = document.querySelector("#films")
    
        filmList.innerHTML += `
            <tr>
                <td><img class="img-fluid img-thumbnail" src="${newFilm.link}" alt=""></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a class="btn btn-danger" id="delete-film" href="">Filmi Sil</a></td>
            </tr>
        `
    }
    
    static clearInputs(element1,element2,element3){
        element1.value = ''
        element2.value = ''
        element3.value = ''
    }
    
    static showMessage(message,type){
    
        const cardBody1 = document.querySelectorAll(".card-body")[0]
        const alert = document.createElement("div")
    
        alert.role = "alert"
        alert.className = `alert alert-${type}`
        alert.textContent = `${message}`
    
        cardBody1.appendChild(alert)
    
        setTimeout(function() {
            alert.remove()
        }, 3000);
    }
    
    static loadedFromStorage(films){
        const filmList = document.querySelector("#films")
    
        films.forEach(function(film) {
            filmList.innerHTML += `
            <tr>
                <td><img class="img-fluid img-thumbnail" src="${film.link}" alt=""></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a class="btn btn-danger" id="delete-film" href="">Filmi Sil</a></td>
            </tr>
        `
        });
    }
    
    static deleteFilmFromUI(element){
    
             element.parentElement.parentElement.remove()
    
    }
    
    static clearAllFilmsFormUI(){
        const filmsList = document.querySelector("#films")
    
        while(filmsList.firstElementChild !== null){
            filmsList.firstElementChild.remove()
        }
    }
}

