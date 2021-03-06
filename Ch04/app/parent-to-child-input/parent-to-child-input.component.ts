import { Component } from '@angular/core';

@Component({
    selector: 'parent-to-child-input',
    template: `<div>부모 
        <child-input [name1]="fruit1" [name2]="fruit2()" [name3]="fruit3" [name4]="1+1" [name5]="fruit5" [name6]="fruit6"></child-input>
    `
})
export class ParentToChildInputComponent {
    fruit1 = "사과";

    fruit2() {
        return "배";
    }

    fruit3 = ['딸기', '포도', '참외'];

    static fruit5 = "수박";

    get fruit6() {
        return ParentToChildInputComponent.fruit5;
    }
}