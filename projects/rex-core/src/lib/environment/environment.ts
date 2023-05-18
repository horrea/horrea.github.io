import { InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";

export interface Environment {
    production: boolean;
    githubLoginUrl: string;
    githubTokenUrl: string;
    githubClientId: string;
    githubScopes: string;
    firebase: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
        measurementId: string;
    }
}

export const ENVIRONMENT = new InjectionToken<Environment>('ENVIRONMENT');

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