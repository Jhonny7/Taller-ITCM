import { PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private location: PlatformLocation) {
    location.onPopState(() => {
      swal.close();
    });
  }

  alertExample(titulo: string, mensaje: string, accion: any = null) {
    let dataAlert: any = {
      type: null,
      title: null,
      text: null,
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
      showCloseButton: true,
      allowOutsideClick: false,
      customClass: 'mi-alerta',
    };

    dataAlert.html = `
              <div class="mensaje">
                <p>${titulo}</p>
              </div>
        
              <div class="descripcion">
                <p>${mensaje}</p>
              </div>
              `;
    dataAlert.funcion = () => {};

    swal.fire(dataAlert).then((result) => {
      if (result.value) {
        if (accion) {
          accion();
        }
      }
    });
  }
}
