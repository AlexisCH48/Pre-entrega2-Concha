//Usuarios inicilaes
const usuariosBase = [
    {id:1, nombre:"javier", apellido:"lópez"},
    {id:2, nombre:"alonso", apellido:"romero"},
    {id:3, nombre:"marina", apellido:"torres"}
];

//clases con los metodos de los datos de los usuarios
class Datos {
    //constructor de los datos de los usuarios
    constructor(usuarios){
        this.datos = usuarios;
    };

    //metodo para agregar los datos de los usuarios a un objeto
    pedirNombres(nombreU, apellidoU) {
        const datoUsuario = {id:this.generarId(), nombre:nombreU, apellido:apellidoU }; // usuario ingresa un nombre y apellido
        this.datos.push(datoUsuario);
    };

    //lista de los usuarios registrados
    listaUsuarios() {
        let salida = ""; //variable para almacenar los datos de los usuarios
        for  (const usuario of this.datos){ 
            salida += `${usuario.id} - ${usuario.nombre} ${usuario.apellido}\n` //bucle para listar los datas de los usuarios
        }
        alert(salida);
    };

    //metodo para buscar los usuarios a apartir de ID
    buscarUsuario(id) {
        return this.datos.find(dato => dato.id == id) //funcion flecha para asociar y devolver los id de los usuarios
    };

    //metodo para generar identificador único de cada usuario creado
    generarId() {
        //inicialización de la variable
        let ident = 0
        //metodo para recorrer el array buscando el numero maximo + 1 (para evitar reemplazar id ya exitentes)
        this.datos.forEach(dato => {
            if(dato.id > ident){
                ident = dato.id  
            }
        });
        return ident + 1
    };

    //metodo para buscar y borrar usuarios a través los id
    borrarUsuario(id){
        let posicionId = this.datos.findIndex(dato => dato.id === id); //funcion flecha opara buscar los id
        if (posicionId !== -1) { //condicion para evitar id no existentes
            this.datos.splice(posicionId, 1); 
            alert("Usuario eliminado correctamente.");
        } else {
            alert("El usuario con el ID proporcionado no existe.");
        }
        alert("Se eliminó el Usuario: # " + id );
    };
};       

//instancia para crear nuevos datos de usuarios
const nuevoUsuario = new Datos(usuariosBase);

//variables para ingresar los datos de los usuarios
let nombre = prompt("Ingrese el Nombre del Usuario:"); 
let apellido = prompt("Ingrese el apellido del Usuario:"); 
nuevoUsuario.pedirNombres(nombre, apellido);

//mostrar lista de usuarios creados
nuevoUsuario.listaUsuarios();

//validación para borrar un usuario a través del id
let borrar = parseInt(prompt("Ingrese '1' para borrar el usuario o '2' para continuar:"));
if (borrar === 1) {
    let borrarId = parseInt(prompt("Ingrese el id a borrar"));
    nuevoUsuario.borrarUsuario(borrarId);
} else if (borrar === 2) {
    alert("Continuando...");
} else {
    alert("Opción no válida. Intente nuevamente.");
};

//mostrar lista de usuarios creados
nuevoUsuario.listaUsuarios();

//variables e ingreso de datos para buscar usuarios mediante el id
let idBuscado = parseInt(prompt("Ingrese el Id a buscar"));
let usuarioBuscado = nuevoUsuario.buscarUsuario(idBuscado);
alert("Id: "+ usuarioBuscado.id + ", Nombre: " + usuarioBuscado.nombre + " " + usuarioBuscado.apellido);

