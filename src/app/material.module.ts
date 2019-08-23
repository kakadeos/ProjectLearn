import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatCardModule, MatInputModule, MatSnackBarModule} from '@angular/material';

@NgModule({
    imports : [MatButtonModule, MatToolbarModule,MatIconModule, MatSidenavModule, 
    MatCardModule, MatInputModule, MatSnackBarModule],
    exports : [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule,
        MatCardModule ,MatInputModule, MatSnackBarModule]
})
export class MaterialModule {

}