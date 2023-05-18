// Objet literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
};

// Objet Constructor
function persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludo = function() {
        console.log(`Hola, Mi nombre es ${this.nombre}, y tengo ${this.edad} de edad`);
    };
}
const Sebastian = new persona('Sebastian', 21);
Sebastian.saludo();
console.log(Sebastian);


function person(name, age, alt) {
    this.name = name;
    this.age = age;
    this.alt = alt;
    this.presentation = function(){
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} de edad y mi altura es de ${this.alt} `)
    };
}
const person2 = new person('Seboso', '21 añitos', 1.67 );
person2.presentation();