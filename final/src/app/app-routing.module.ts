import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {BasketComponent} from './basket/basket.component'
import {ProductsComponent} from './products/products.component'
import {ProductDetailComponent} from './product-detail/product-detail.component'
import { ContactsComponent } from './contacts/contacts.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { RegistrComponent } from './registr/registr.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  { path: 'basket', component: BasketComponent },
  { path: 'products' , component: ProductsComponent},
  { path: 'products/:id',component:ProductDetailComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'about-us',component: AboutUsComponent},
  { path: 'cabinet', component: CabinetComponent},
  { path: 'registr' , component: RegistrComponent},
  { path: 'signIn', component:SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
