import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input() tooltip = '';

  private tooltipDiv?: HTMLDivElement

  constructor(private el: ElementRef) { }

  ngOnDestroy(): void {
    if (this.tooltipDiv) { this.tooltipDiv.remove() }
  }

  @HostListener('mouseenter') onMouseEnter() {
    let x = this.el.nativeElement.getBoundingClientRect().left + this.el.nativeElement.offsetWidth / 2;
    let y = this.el.nativeElement.getBoundingClientRect().top + this.el.nativeElement.offsetHeight;
    this.createTooltipPopup(x, y);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipDiv) {
      this.tooltipDiv.remove();
      this.tooltipDiv = undefined;
    }
  }

  private createTooltipPopup(x: number, y: number) {
    let popup = document.createElement('div');
    popup.innerHTML = this.tooltip;
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    popup.setAttribute('class', 'tooltip');
    this.el.nativeElement.appendChild(popup);
    this.tooltipDiv = popup;
  }
}
