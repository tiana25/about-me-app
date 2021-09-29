import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class ContactModule { }
