import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appFor2]'})
export class For2Directive {
    hasView = true;
    
    constructor(
	private templateRef: TemplateRef<any>,
	private viewContainer: ViewContainerRef) { }

    @Input() set appFor2(items: Array<any>) {
	console.log("hi from appFor2");
	for(var item of Object.keys(items)) {
	    let view = this.viewContainer.createEmbeddedView(this.templateRef);
	    console.log(view);
	    view.rootNodes[0].children[0].textContent = item;
	}
    }
}

