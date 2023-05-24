import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/app/environment/environment.prod';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateProduct } from './create-product/create-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public products: any = [];

  constructor(
    private alertService: AlertService,
    private httpService: HttpService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    /* this.alertService.alertExample("titulo", "mensaje", ()=>{
        this.httpService.get(environment.findAll).subscribe((response:any)=>{
          console.log(response);
        },(error: HttpErrorResponse)=>{
          console.log(error);
          
        });
      }); */
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = [];
    this.httpService.get(environment.findAll).subscribe(
      (response: any) => {
        console.log(response);
        this.products = response.data;
      },
      (error: HttpErrorResponse) => {
        this.alertService.alertExample(
          'Ups!',
          'No se cargo la información, contacta al administrador'
        );
      }
    );
  }

  createProduct(product: any = null) {
    let dialogRef = this.dialog.open(CreateProduct, {
      disableClose: false,
      data: product,
      hasBackdrop: true,
      panelClass: product ? 'modals-edit' : 'modals',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadProducts();
    });
  }

  deleteProduct(product: any) {
    this.httpService.delete(`${environment.delete}/${product.id}`).subscribe(
      (response: any) => {
        this.alertService.alertExample(
          'Bien!',
          `Producto ${product.name} eliminado correctamente`
        );
        this.loadProducts();
      },
      (error: HttpErrorResponse) => {
        this.alertService.alertExample(
          'Ups!',
          'No se realizó la acción, contacta al administrador'
        );
      }
    );
  }
}
