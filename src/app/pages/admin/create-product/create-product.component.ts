import { AlertService } from '../../../services/alert.service';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/app/environment/environment.prod';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProduct implements OnInit {
  public product:any = {
    name: '',
    description: '',
    largeDescription: '',
    createBy: '',
    price: 0,
    offerPrice: 0,
    urlImage: '',
  };

  public load:boolean = false;

  constructor(
    private alertService: AlertService,
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if(this.data){
      this.product.name = this.data.name;
      this.product.description = this.data.description;
      this.product.largeDescription = this.data.large_description;
      this.product.createBy = this.data.create_by;
      this.product.price = this.data.price;
      this.product.offerPrice = this.data.offer_price;
      this.product.urlImage = this.data.url_img;
      this.product.id = this.data.id;
      this.product.modify_by = this.data.modify_by,
      this.product.modify_date = this.data.modify_date;
    }
  }

  action(){
    this.load = true;
    console.log(this.product);
    
    let method:any = this.data ? this.httpService.put(environment.create, this.product) :
    this.httpService.post(environment.create, this.product);

    method.subscribe((response:any)=>{
      this.load = false;
      this.dialog.closeAll();
      this.alertService.alertExample("Bien!", `El producto ${this.product.name} se ha ${this.data ? 'actualizado' : 'generado'} correctamente`);
    },(error:HttpErrorResponse)=>{
      this.load = false;
      this.alertService.alertExample("Ups!", `No hemos podido crear el producto, ${error.error.data}`);
    });
  }
}
