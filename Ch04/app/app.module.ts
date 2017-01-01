import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ChildInputComponent  }from './parent-to-child-input/child-input.component';
import { ParentToChildInputsComponent } from './parent-to-child-input/parent-to-child-inputs.component';
import { ChildInputs } from './parent-to-child-input/child-inputs.component';
import { Child } from './child-to-parent/child.component'
import { ChildToParentComponent } from './child-to-parent/parent.component'
import { ViwechildComponent, Item, ItemComponent    } from './viewchild/viewchild.component'
import { ChildCmp, ViewchildrenComponent } from './viewchildren/viewchildren.component'
import { ContentChildrenComp, Word, WordGroup} from './contentchildren/contentchildren.component'
import { FirstDepthComponent, SecondDepthComponent} from './component-style/first-child.component'
import { ComponentStyleComponent } from './component-style/component-style.component'

import {
    ButtonGroup,
    childButtonCmp,
    ContentChildComp,
    GroupTitle
} from './contentchild/contentchild.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ], 
    declarations: [
        ComponentStyleComponent,
        FirstDepthComponent,
        SecondDepthComponent
    ], 
    bootstrap: [ComponentStyleComponent]
})
export class AppModule {} 