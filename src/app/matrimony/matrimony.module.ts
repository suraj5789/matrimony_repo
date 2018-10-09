import { CommonModule } from '@angular/common';
import { AppCommonModule } from './../common/common.module';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { MatrimonyComponent } from './matrimony.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],
  declarations: [ListComponent, CardComponent, MatrimonyComponent],
  exports: [MatrimonyComponent]
})
export class MatrimonyModule { }
