import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'telMask'
})
export class TelPipe implements PipeTransform {

    transform (value: string, args: string[]){
        if(value) {
            value = value.toString();
            if(value.length == 11){
                return value.substring(-1,0).concat("(")
                                            .concat(value.substring(0,2))
                                            .concat(")")
                                            .concat(value.substring(2,7))
                                            .concat("-")
                                            .concat(value.substring(7,11))
                                                
            }
        }
        return value;
    }
}
