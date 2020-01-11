import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatListModule ],
  exports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule , MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatListModule ]
})

export class MaterialModule {

}