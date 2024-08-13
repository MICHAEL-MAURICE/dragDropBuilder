import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterViewInit {
  @ViewChild('board', { static: false }) board!: ElementRef;
  @Input() displayProperties!: (event: Event) => void;
  @Input() dragStart!: (event: DragEvent) => void;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.board) {
      console.log('Board is available:', this.board.nativeElement);
    } else {
      console.log('Board is not available');
    }
  }

  dragEnter(event: DragEvent): void {
    event.preventDefault();
  }

  dragOver(event: DragEvent): void {
    event.preventDefault();
  }

  drop(event: DragEvent): void {
    event.preventDefault();
    const type = event.dataTransfer?.getData('type');
    if (type) {
      const element = this.createElement(type);
      this.renderer.appendChild(this.board.nativeElement, element);
    }
  }

  createElement(type: any): HTMLElement {
    let element: HTMLElement = this.renderer.createElement('div');
    switch (type) {
      case 'row':
        element = this.renderer.createElement('div');
        this.renderer.addClass(element, 'row');
        break;
      case 'column':
        this.renderer.addClass(element, 'col');
        break;
      case 'text':
        element = this.renderer.createElement('p');
        this.renderer.setProperty(element, 'textContent', 'Sample text...');
        break;
      case 'image':
        element = this.renderer.createElement('img');
        this.renderer.setProperty(element, 'src', 'https://via.placeholder.com/');
        break;
      case 'video':
        element = this.renderer.createElement('video');
        this.renderer.setProperty(element, 'src', 'https://www.w3schools.com/html/mov_bbb.mp4');
        this.renderer.setProperty(element, 'controls', true);
        break;
    }
    this.renderer.setAttribute(element, 'draggable', 'true');
    this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
    return element;
  }
}
