import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HeaderComponent,
  FooterComponent
} from '@hiking/components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
