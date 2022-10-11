class usuario {

    constructor(nombre, apellido , libros =[], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido ;
        this.libros = libros ; 
        this.mascotas = mascotas ;
        
        
    }

    getFullName(){
        return console.log (this.nombre+" "+this.apellido)
    }

    addMascotas(Mascota){
       this.mascotas.push(Mascota)
        
    }

    countMascotas(){
        return console.log(this.mascotas.length)
    }

    addBook(title, autor){
        this.libros.push({Libro:title , Autor:autor })
    }

    getBookNames(){
        let titulos = []
        this.libros.forEach(Element => titulos.push(Element.Libro))
        console.log(titulos)
    }
}
    let user1 = new usuario("Carlos","Diaz", [], []);

    user1.getFullName();
    user1.addMascotas("Perro");
    user1.addMascotas("Gato");
    user1.countMascotas();
    user1.addBook("Aforismos", "Friedrich Nietzsche");
    user1.addBook("El Tiempo De Las Moscas", " Piñeiro Claudia");
    user1.addBook("Cuento De Hadas", " King Stephen");
    user1.getBookNames();
    console.log(user1);






