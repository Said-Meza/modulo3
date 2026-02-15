let libro = {
  title: "100 años de soledad",
  autor: "Garcia Marquez",
  anio: "1967",
  estado: "disponible",
  describirLibro: function () {
    console.log(
      `Libro titulado ${this.title} escrito por ${this.autor}  en el año ${this.anio}  el estado del libro es ${this.estado}`,
    );
  },
  capitulos: {
    1: "Fundación de Macondo por José Arcadio Buendía",
    2: "Llegada de los gitanos",
  },

  agregarCap: function (title) {
    let index = Object.keys(this.capitulos).length;

    this.capitulos[index + 1] = title;
  },
  showcapitulos: function () {
   
    for (let key of Object.keys(this.capitulos)) {
      console.log(this.capitulos[key]);
    }
  },
  deleteObj: function (key) {
    delete this.capitulos[key];
    console.log("cap eliminado");
  },
};

libro.describirLibro();
libro.agregarCap("Desarrollo del pueblo");
libro.agregarCap("Infancia de los hijos");

console.log("----------------------------");
libro.showcapitulos();
console.log("----------------------------");
libro.deleteObj(3);
console.log("----------------------------");
libro.showcapitulos();



