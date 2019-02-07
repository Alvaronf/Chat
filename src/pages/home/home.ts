import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: string="";
  mensaje: string="";
  mensajesr=[];

  constructor(public navCtrl: NavController) {
    this.descargarMensajes();
  }
  descargarMensajes(){
    var mensajesRef=firebase.database().ref().child("Mensajes");
    mensajesRef.on("value",(snap)=> {
      var data = snap.val();
      this.mensajesr=[];
      for(var key in data){
        this.mensajesr.push(data[key]);
      }
    });
  }

  enviarmensaje(){
    var mensajesRef=firebase.database().ref().child("Mensajes");
    mensajesRef.push({mensaje: this.mensaje,nombre:this.usuario})
  }


}
