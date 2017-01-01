import {Component} from '@angular/core';

@Component({
    selector: 'app-parent-to-child-inputs',
    template: `<div>부모 
                <child-inputs [name1]="name1" [name2]="name"></child-inputs>
                </div>`,
    styles: [`<div{border: 2px soli}`]
})
export class ParentToChildInputsComponent {
    name1 = "사과";
    name2 = "바나나";
}