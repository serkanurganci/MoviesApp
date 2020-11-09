class Storage{

    static addToDoStorage(newFilm){
        const films = this.getToLocalStorage()
        films.push(newFilm)
    
        localStorage.setItem("films",JSON.stringify(films))
    }
    
    static getToLocalStorage(){
        let films
        if (localStorage.getItem("films") === null) {
            films = []
        }
        else{
            films = JSON.parse(localStorage.getItem("films"))
        }
    
        return films
    }
    
     static deleteFilmFromStorage(filmTitle){
         let films = this.getToLocalStorage()
    
         films.forEach(function(film,index) {
             if(film.title === filmTitle){
                 films.splice(index,1)
             }
         });
    
         localStorage.setItem("films",JSON.stringify(films))
     }
    
     static clearAllFilmsFormStorage(){
         localStorage.removeItem("films")
     }

}

