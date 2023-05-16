import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
    imports: [
        MatRippleModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatStepperModule,
        MatChipsModule,
        MatDividerModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule
    ],
    exports: [
        MatRippleModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatStepperModule,
        MatChipsModule,
        MatDividerModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule
    ],
    providers: [
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: [ENTER, COMMA]
            }
        }
    ]
})
export class HorreaMaterialModule { }
