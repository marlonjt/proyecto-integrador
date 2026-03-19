import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { DialogoComponent } from '../dialogo/dialogo.component';

@NgModule({
  declarations: [CatalogoComponent, DialogoComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, CatalogoRoutingModule,
    MatIconModule, MatChipsModule, MatButtonModule, MatTableModule, MatCheckboxModule,
    MatFormFieldModule, MatSelectModule, MatPaginatorModule, MatInputModule,
    MatTooltipModule, MatSortModule, MatDialogModule, MatTabsModule,
    MatCardModule, MatExpansionModule, MatToolbarModule,
  ]
})
export class CatalogoModule { }
