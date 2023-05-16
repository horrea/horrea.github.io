import { Injectable } from "@angular/core";
import { Store } from '@ngxs/store';


@Injectable({ providedIn: 'root' })
export class BlogFacade {

    constructor(private store: Store) { }

}