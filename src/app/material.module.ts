import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatCardModule, MatInputModule, MatSnackBarModule, MatGridListModule} from '@angular/material';

@NgModule({
    imports : [MatButtonModule, MatToolbarModule,MatIconModule, MatSidenavModule, 
    MatCardModule, MatInputModule, MatSnackBarModule, MatGridListModule],
    exports : [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule,
        MatCardModule ,MatInputModule, MatSnackBarModule, MatGridListModule]
})
export class MaterialModule {

}