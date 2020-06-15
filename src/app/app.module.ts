import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ProductsComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'products', component: ProductsComponent },

    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
