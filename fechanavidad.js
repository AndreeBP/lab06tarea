function navidad(){
    var fechadehoy = new Date();
    var fechanavidad = new Date("2020-12-25");
    var falta = fechanavidad.getTime()-fechadehoy.getTime();
    console.log(Math.round(falta/(1000*60*60*24)))
}