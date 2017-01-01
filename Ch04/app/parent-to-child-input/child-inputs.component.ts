import {Component} from '@angular/core';



@Component({
    selector: 'child-inputs',
    template : `<div>자식
        inputs 프로퍼티로 받은 값 : {{name1}} {{name2}}
    </div>`,
    inputs: ['name1', 'name2']
})
export class ChildInputs {
    name1: string;
    name2: string; 
}