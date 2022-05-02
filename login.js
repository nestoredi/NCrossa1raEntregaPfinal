let villano
let enemy
//Primero definimos si ya esta registrado, si no es vacio o numero
let nombre
//si es primera vez agregamos al array el nombre
const validacion=()=>{
    let val = parseInt(prompt("Ingrese 1  si es la primera vez o otro numero si ya esta registrado :"))
    if(val==1){
        registrarse()
    }else{
        bienvenida()//sino le damos la bienvenida

}
}
const bienvenida = ()=> {

    do{
    
        //al registrarse verificamos que el nombre este en el array
        nombre = prompt("Bienvenido a nuestro sitio, ingrese su nombre:");
      } while (nombre === "" ||nombre !== usuarios[usuarios.indexOf(nombre)] || !isNaN(nombre) )
      alert("Hola :"+ nombre);
    
}
    
    const registrarse=()=>{
     nombre= prompt("Entrar nombre :")
     while (nombre =="" || !isNaN(nombre))
         nombre= prompt("Entrar nombre :")
         usuarios.push(nombre)
         console.log(usuarios)
         alert("Hola "+ nombre)
        
    }
     //elegir villano

     const elegirVillano=()=>{
        alert("Quien ataca a Batman!!El Joker,Acertijo,Pinguino o TwoFaces")
       enemy = prompt("Encuentra al enemigo oculto :")
       
      while(villanos.indexOf(enemy) === -1)
       enemy = prompt("Ese no es elige otra vez :")
       alert("Acertaste es el : " + enemy) 
  }
let villanos =["Joker","Pinguino","Acertijo","TwoFaces"]


let usuarios =["jorge","Jose"]

validacion()
let resultado =elegirVillano()