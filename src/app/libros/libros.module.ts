import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroListComponent } from './libro-list/libro-list.component';
import { LibroService } from './libro.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
    ],
    declarations: [ LibroListComponent],
    providers: [LibroService],
    exports:[LibroListComponent]
})
export class libroModule {}