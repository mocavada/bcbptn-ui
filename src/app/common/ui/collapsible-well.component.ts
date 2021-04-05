import { Component, Input } from '@angular/core'

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
        <ng-content select="[wells-title]"></ng-content>
        </h4>
        <ng-content select="[wells-body]" *ngIf="visible"></ng-content>
    `
})

export class CollapsibleWellComponent {
    @Input() title: string | undefined;
    visible: boolean = true;
    toggleContent() {
        this.visible = !this.visible;
    }

}