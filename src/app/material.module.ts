import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
    imports: [
        MatBadgeModule, 
        MatButtonModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatSliderModule,
        MatListModule],
    exports: [ 
        MatBadgeModule, 
        MatButtonModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatSliderModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule {}
