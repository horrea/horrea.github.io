import { NgModule } from '@angular/core';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { StateClass } from "@ngxs/store/internals";
import { environment } from 'src/environments/environment';

export const stateSchema: StateClass[] = [
    // Add state schemas here !
];

@NgModule({
    imports: [
        NgxsStoragePluginModule.forRoot(),
        NgxsModule.forRoot(stateSchema, {
            developmentMode: !environment.production
        })
    ],
    exports: [NgxsModule, NgxsStoragePluginModule]
})
export class AppStoreModule { }
