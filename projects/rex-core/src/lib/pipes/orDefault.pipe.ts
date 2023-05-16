import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orDefault'
})
export class OrDefault implements PipeTransform {

    transform<T>(obj: T | null, args: T): T {
        if (obj != null && obj != undefined) {
            return obj;
        }
        return args;
    }
}

@Pipe({
    name: 'valueOrDefault',
    standalone: true
})
export class OrDefaultStandalone extends OrDefault {
}