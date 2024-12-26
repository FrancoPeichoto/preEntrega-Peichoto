const Perfumes = function(marca, modelo, mililitros, precio, stock){
    this.marca = marca
    this.modelo = modelo
    this.mililitros = mililitros
    this.precio = precio
    this.stock = stock
}
let perfume1 = new Perfumes("Versace", "Eros flame edp", 200, 297000, 30)
let perfume2 = new Perfumes("Antonio Banderas", "The Icon Elixir", 100, 57000, 15)
let perfume3 = new Perfumes("Jean Paul Gaultier", "Scandal le parfum", 100, 210000, 15)
let perfume4 = new Perfumes("Dior", "Sauvage parfum", 100, 301000, 30)

let lista = [perfume1, perfume2, perfume3, perfume4]

function filtrarPerfumes(){
    let palabraClave= prompt("ingresa el modelo del perfume").toUpperCase()
    let resultado = lista.filter( (perfume)=> perfume.marca.toUpperCase().includes(palabraClave)  )
    if(resultado.length>0){
        console.table(resultado)
    }else{
        alert("no se encontro el perfume, intente de nuevo")}
}

filtrarPerfumes()