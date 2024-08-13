import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent {
  @Output() dragStartEvent = new EventEmitter<DragEvent>();

  dragStart(event: DragEvent): void {
    const target = event.target as HTMLElement;
    event.dataTransfer?.setData('type', target.getAttribute('data-type') || '');
    this.dragStartEvent.emit(event);
  }
}
