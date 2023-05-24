import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductsComponent } from './pages/products/products.component';
import { TallerHeader } from './components/taller-header/taller-header.component';
import { Container } from './components/container/container.component';
import { TallerFooter } from './components/footer/footer.component';
import { CreateProduct } from './pages/admin/create-product/create-product.component';
import { Loader } from './components/loader/loader.component';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    TallerHeader,
    Container,
    TallerFooter,
    CreateProduct,
    Loader,
    DatePipe
  ],
  exports:[
    AdminComponent,
    ProductsComponent,
    TallerHeader,
    Container,
    TallerFooter,
    CreateProduct,
    Loader,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
})
export class ComponentModule { }
