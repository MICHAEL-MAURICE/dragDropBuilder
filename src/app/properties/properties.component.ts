import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  @ViewChild('propertiesPanel', { static: false }) propertiesPanel!: ElementRef;

  displayProperties(event: Event): void {
    if (this.propertiesPanel && this.propertiesPanel.nativeElement) {
      const target = event.target as HTMLElement;
      const details = `Properties for ${target.tagName} ${target.id}`;
      this.propertiesPanel.nativeElement.innerHTML = details;
    } else {
      console.error('Properties panel is not available.');
    }
  }
}
