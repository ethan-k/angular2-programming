import { Component } from '@angular/core';

@Component({
    selector: 'nested-child',
    template: `<div>자식
    <nested-grandson></nested-grandson>
    </div>`,
    styles:[`div{border: 2px dotted #666; padding:10px;margin-top:5px;width:65%;height:65%}`]
})
export class NestedChildComponent{}