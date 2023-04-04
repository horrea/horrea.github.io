import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { ENVIRONMENT, Environment } from "./environment.model";

@NgModule()
export class EnvironmentModule {

    constructor(@Optional() @SkipSelf() parentModule?: EnvironmentModule) {
        if (parentModule) {
            throw new Error(
                'EnvironmentModule is already loaded. Import it in the AppModule only');
        }
    }

    public static forRoot(env: Environment): ModuleWithProviders<EnvironmentModule> {
        return {
            ngModule: EnvironmentModule,
            providers: [{
                provide: ENVIRONMENT,
                useValue: env
            }]
        }
    }
}