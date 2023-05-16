import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'prefix'
})
export class PrefixPipe implements PipeTransform {
    transform(value: string | null , ...args: string[]): string {
        if (value && args && args[0]) {
            const prefix = args[0];
            return prefix + value;
        }
        return value ?? '';
    }
}