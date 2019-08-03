import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import {MatIconModule} from '@angular/material/icon';
import { MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatTooltipModule, MatSortModule, MatTabsModule, MatCardModule, MatExpansionModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [CatalogoComponent,DialogoComponent ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  entryComponents: [DialogoComponent]
})
export class CatalogoModule { }
