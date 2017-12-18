import {Pipe, PipeTransform} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Pipe({
    name: 'search',
    pure: false
})

export class SearchPipe implements PipeTransform {

    transform<T extends Object>(elements: T[], filter: T): Array<T> {
        if (!Array.isArray(elements) || !filter) {
            return elements;
        }
        console.log('search pipe', elements);
        return elements.filter(element => this.filter(element, filter));
    }

    private filter<T>(element: T, filter: T): boolean {

        console.log("FILTER: ");
        console.log(`filter: ${JSON.stringify(filter)}, element: ${JSON.stringify(element)}`);
        console.log(element);
        for (const field in filter) {
            console.log(`filter[field]: ${filter[field]}, field: ${field}`);
            if (filter[field]) {
                if (!element[field].toString().toLowerCase().includes(filter[field].toString().toLowerCase())) {
                    return false;
                }
            }
        }
        return true;
    }
}
