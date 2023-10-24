import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  exports: [
    MatCommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
  ]
})
export class MaterialModule { }
