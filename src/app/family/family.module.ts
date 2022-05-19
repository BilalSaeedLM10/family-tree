import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';


@NgModule({
  declarations: [FamilyComponent],
  imports: [
    CommonModule,
    FamilyRoutingModule
  ]
})
export class FamilyModule { }
