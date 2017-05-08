import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public formulario:FormGroup;
public usuario:any;
public usuarioID:any;
public contraseña:any;
public nombre:any;
public fecNac:any;
public email:any;
public crear:boolean;
public dateError:boolean;
public selectError:boolean;
public place:any;
public seleccion:string;
public crearV:boolean;
public actualizarV:boolean;
public buscarV:boolean;
public eliminarV:boolean;



  constructor(public navCtrl: NavController, public form:FormBuilder, public storage: Storage) {
    this.formulario = this.form.group({
      usuario:["",Validators.compose([Validators.required,Validators.maxLength(30),Validators.minLength(6),Validators.pattern("[a-z]*")])],
      contraseña:["",Validators.compose([Validators.required,Validators.maxLength(30),Validators.minLength(8),Validators.pattern("((.)*[!#$%&/(),=?¡¿'.@><_]+(.)*[0-9]+(.)*)+|((.)*[0-9]+(.)*[!#$%&/(),=?¡¿'.@><_]+(.)*)+")])],
      nombre:["",Validators.compose([Validators.required,Validators.maxLength(50)])],
      usuarioID:["",Validators.required],
      fecNac:["",Validators.required],
      email:["",Validators.compose([Validators.required,Validators.email])]
    });

  }
public click(){
  this.crear = true;
}

public clickA(){
  this.crear = true;
}

public clickB(){
  this.crear = true;
}

public clickE(){
  this.crear = true;
}

public enCancelar(){
   if(this.formulario.get('fecNac').hasError('required')){
   this.dateError = true;
   return;
 }
   this.dateError=false;
}


public seleccionar(){
this.seleccion = this.place.toString();
console.log(this.seleccion);
if(this.seleccion == "Crear"){
  this.crearV = true;
  this.eliminarV = false;
  this.buscarV = false;
  this.actualizarV = false;
}
if(this.seleccion == "Eliminar"){
  this.crearV = false;
  this.eliminarV = true;
  this.buscarV = false;
  this.actualizarV = false;
}
if(this.seleccion == "Buscar"){
  this.crearV = false;
  this.eliminarV = false;
  this.buscarV = true;
  this.actualizarV = false;
  
}if(this.seleccion == "Actualizar"){
  this.crearV = false;
  this.eliminarV = false;
  this.buscarV = false;
  this.actualizarV = true;
}
}
}
