import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('board', { static: false }) board!: ElementRef;
  @ViewChild('propertiesPanel', { static: false }) propertiesPanel!: ElementRef;

  showBoard: boolean = true;
  erase = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.showBoard = true;

    const textProps = document.getElementById("FormForText");

    const spacer= document.getElementById("spacerForm");
    const imageform= document.getElementById("imageForm");
    const buttonForm= document.getElementById("buttonForm");
   const boardform= document.getElementById("BoardForm");
  imageform!.style.display='none';
        textProps!.style.display = 'none';
      buttonForm!.style.display='none';
    boardform!.style.display='none';
        spacer!.style.display = 'none';
      
  }



  ngAfterViewInit() {

   
    if (this.board) {
      console.log('Board is available:', this.board.nativeElement);
    } else {
      console.log('Board is not available');
    }
  }

  eraseElement(): void {
    this.erase = !this.erase;
  }

  saveRenderedHTML(): void {
    this.activateAllButtons();
    const boardHTML = this.board.nativeElement.outerHTML;
    const boardColor=this.board.nativeElement.outerHTML.backgroundColor;
    const fullHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Saved Board Content</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <style>
       
            body, html {
                height: 100%;
                margin: 0;
                font-family: Arial, sans-serif;

            }
            .toolbox, .board, .properties, .row, .col, .p-2, .img-fluid {
                border: none !important;
            }
            .toolbox, .board, .properties {
                
                padding: 10px;
            }
            .board {
                background-color: #fff;
            }
        </style>
    </head>
  <body style="background-color: ${boardColor}">
        ${boardHTML}
    </body>
    </html>`;
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const a = document.createElement('a');
    this.renderer.setAttribute(a, 'href', URL.createObjectURL(blob));
    this.renderer.setAttribute(a, 'download', 'saved_board_content.html');
    this.renderer.appendChild(document.body, a);
    a.click();
    this.renderer.removeChild(document.body, a);


    this.UnactiveAllButtons();
  }

  displayProperties(event: Event): void {

    
    console.log("event");
    if (this.propertiesPanel && this.propertiesPanel.nativeElement) {
      const target = event.target as HTMLElement;
      const details = `Properties for ${target.tagName} ${target.id}`;
    console.log(details)
    
      const element = document.getElementById(`${target.id}`);

      if (element) {
        this.diaplayPropertyForElement(element.getAttribute('name'), element.getAttribute('id'));
      }
    } else {
      console.error('Properties panel is not available.');
    }
  }

  diaplayPropertyForElement(elementName: any, elementId: any) {
    console.log(elementName);
    const details = `Properties for ${elementName} ${elementId}`;
   // this.propertiesPanel.nativeElement.innerHTML = details;
  
  
   if(elementName==='h1'||elementName==='h2'||elementName==='h3'||elementName==='h4'||elementName==='h5'||elementName==='h6' || elementName==='text')  
     {
      const elementType = document.getElementById("FormForText");
      const spacer= document.getElementById("spacerForm");
      const imageform= document.getElementById("imageForm");
      const buttonForm= document.getElementById("buttonForm");
   
      const boardform= document.getElementById("BoardForm");
      boardform!.style.display='none';
      buttonForm!.style.display='none';
    
   
        elementType!.style.display = 'block';
        imageform!.style.display='none';
   
        spacer!.style.display = 'none';
      
      
      
      this. changeTextAndHeaders(elementId);
     }

     else if(elementName==='spacer')  
      {
        const spacer= document.getElementById("spacerForm");
        const elementType = document.getElementById("FormForText");
        const imageform= document.getElementById("imageForm");
        const buttonForm= document.getElementById("buttonForm");
   
        const boardform= document.getElementById("BoardForm");
        boardform!.style.display='none';
      buttonForm!.style.display='none';
   
        elementType!.style.display = 'none';
          spacer!.style.display = 'block';
         
        
       
          imageform!.style.display='none';
        
       
       this. changeWidthandheightforsoacer(elementId);
      }
      else if(elementName==='image')  
        {
          const spacer= document.getElementById("spacerForm");
          const elementType = document.getElementById("FormForText");
   const imageform= document.getElementById("imageForm");
   const buttonForm= document.getElementById("buttonForm");
   const boardform= document.getElementById("BoardForm");
   boardform!.style.display='none';

      buttonForm!.style.display='none';
    
        
        
            elementType!.style.display = 'none';
            spacer!.style.display = 'none';
          imageform!.style.display='block';
         
         this. changeStyleforImage(elementId);
        }

        else if(elementName==='video'){
          console.log("hereeeeeeeeeeeeee");
          const spacer= document.getElementById("spacerForm");
          const elementType = document.getElementById("FormForText");
   const imageform= document.getElementById("imageForm");
   const buttonForm= document.getElementById("buttonForm");
   const boardform= document.getElementById("BoardForm");
          boardform!.style.display='none';

       buttonForm!.style.display='none';
 



            elementType!.style.display = 'none';
            spacer!.style.display = 'none';
          imageform!.style.display='block';
         
         this. changeStyleforVideo(elementId);
        }


        else if(elementName==='button'){

          const spacer= document.getElementById("spacerForm");
          const elementType = document.getElementById("FormForText");
   const imageform= document.getElementById("imageForm");
   const buttonForm= document.getElementById("buttonForm");
   const boardform= document.getElementById("BoardForm");
   boardform!.style.display='none';
           buttonForm!.style.display='block';
            elementType!.style.display = 'none';
            spacer!.style.display = 'none';
          imageform!.style.display='none';
          this.changeStyleforbutton(elementId)


        }

        else if(elementName==='Board'){

          const boardform= document.getElementById("BoardForm");
          boardform!.style.display='block';
          const spacer= document.getElementById("spacerForm");
          const elementType = document.getElementById("FormForText");
   const imageform= document.getElementById("imageForm");
   const buttonForm= document.getElementById("buttonForm");

           buttonForm!.style.display='nonw';
            elementType!.style.display = 'none';
            spacer!.style.display = 'none';
          imageform!.style.display='none';
          
          this.changeStyleforBoard(elementId);

        }



}


changeTextAndHeaders(elementId: any) {
  const elementText = document.getElementById(String(elementId)) as HTMLElement;

  let pTextInput = document.getElementById("textContent") as HTMLInputElement;
  let pTextSize = document.getElementById("TextSize") as HTMLInputElement;
  let pTextColor = document.getElementById("text-color") as HTMLInputElement;
  let pTextFamily = document.getElementById("fontSelector") as HTMLInputElement;

  // Update the input fields with the current values of the clicked element
  pTextInput.value = elementText.innerText;
  pTextSize.value = parseInt(window.getComputedStyle(elementText).fontSize, 10).toString();
  pTextColor.value = window.getComputedStyle(elementText).color;
  pTextFamily.value = window.getComputedStyle(elementText).fontFamily;

  // Clear previous input event listeners to avoid conflicts
  pTextInput.oninput = null;
  pTextSize.oninput = null;
  pTextColor.oninput = null;
  pTextFamily.oninput = null;

  // Add event listeners to update the specific element on input change
  pTextInput.oninput = () => {
    elementText.innerText = pTextInput.value;
  };

  pTextSize.oninput = () => {
    elementText.style.fontSize = pTextSize.value + 'px';
  };

  pTextColor.oninput = () => {
    elementText.style.color = pTextColor.value;
  };

  pTextFamily.oninput = () => {
    elementText.style.fontFamily = pTextFamily.value;
  };
}

changeWidthandheightforsoacer(elementid: string) {
  console.log("Element ID:", elementid);

  // Get the width and height input elements
  var widthInput = document.getElementById('width') as HTMLInputElement;
  var heightInput = document.getElementById('height') as HTMLInputElement;

  // Get the spacer element by ID
  var spacer = document.getElementById(elementid)as HTMLInputElement;

  // Remove any existing event listeners by replacing them with null
  widthInput.value=  window.getComputedStyle(spacer).width;
  heightInput.value= window.getComputedStyle(spacer).height;

  // Add event listeners to update the specific element on input change
  widthInput.oninput = () => {
      const width = widthInput.value; // Get the value from the width input
      spacer!.style.width =widthInput.value + 'px';
  };
  heightInput.oninput= () => {
      const height = heightInput.value; // Get the value from the height input
      spacer!.style.height = heightInput.value+ 'px';
  };
}


changeStyleforImage(elementid: string) {
  console.log("Element ID:", elementid);

  // Get the width and height input elements
  var widthInput = document.getElementById('Imagewidth') as HTMLInputElement;
  var heightInput = document.getElementById('Imageheight') as HTMLInputElement;
  var imagesrc = document.getElementById('Imagesrc') as HTMLInputElement;
  // Get the spacer element by ID
  var Image = document.getElementById(elementid)as HTMLInputElement;

  // Remove any existing event listeners by replacing them with null
  widthInput.value=  window.getComputedStyle(Image).width;
  heightInput.value= window.getComputedStyle(Image).height;
  
  // Add event listeners to update the specific element on input change
  widthInput.oninput = () => {
      const width = widthInput.value; // Get the value from the width input
      Image!.style.width =widthInput.value + 'px';
  };
  heightInput.oninput= () => {
      const height = heightInput.value; // Get the value from the height input
      Image!.style.height = heightInput.value+ 'px';
  };

  imagesrc.oninput= () => {
     // Get the value from the height input
    Image!.src = imagesrc.value;
};

}

changeStyleforVideo(elementid: string) {
  console.log("Element ID:", elementid);

  // Get the width and height input elements
  var widthInput = document.getElementById('Imagewidth') as HTMLInputElement;
  var heightInput = document.getElementById('Imageheight') as HTMLInputElement;
  var imagesrc = document.getElementById('Imagesrc') as HTMLInputElement;
  // Get the spacer element by ID
  var video = document.getElementById(elementid)as HTMLInputElement;

  // Remove any existing event listeners by replacing them with null
  widthInput.value=  window.getComputedStyle(video).width;
  heightInput.value= window.getComputedStyle(video).height;
  imagesrc.src="";
  // Add event listeners to update the specific element on input change
  widthInput.oninput = () => {
      const width = widthInput.value; // Get the value from the width input
      video!.style.width =widthInput.value + 'px';
  };
  heightInput.oninput= () => {
      const height = heightInput.value; // Get the value from the height input
      video!.style.height = heightInput.value+ 'px';
  };

  imagesrc.oninput= () => {
     // Get the value from the height input
     video.src = imagesrc.value;
};

}


changeStyleforbutton(elementid: string) {
  console.log("Element ID:", elementid);

  // Get the width and height input elements
  var widthInput = document.getElementById('TextSize') as HTMLInputElement;
  var buttoncolor = document.getElementById('button-color') as HTMLInputElement;
  var ActionButton = document.getElementById('ActionButton') as HTMLInputElement;
  var buttonText = document.getElementById('buttontext') as HTMLInputElement;
  // Get the spacer element by ID
  var button = document.getElementById(elementid)as HTMLInputElement;
var buttonTextColor=document.getElementById('button-Text-color')as HTMLInputElement
  // Remove any existing event listeners by replacing them with null
 // widthInput.value=  window.getComputedStyle(buttonText).width;

  ActionButton.value="";
  buttoncolor.value ="";
  buttonText.value = "";
  buttonTextColor.value = "";
  //pTextFamily.value = window.getComputedStyle(elementText).fontFamily;
  // Add event listeners to update the specific element on input change
 

  buttoncolor.oninput = null;
  ActionButton.oninput = null;
  buttonText.oninput = null;
 
  buttonTextColor.oninput = null;


  buttonText.oninput= () => {
       // Get the value from the height input
      button!.innerText = buttonText.value;
  };

  buttonTextColor.oninput=()=>{

    button!.style.color=buttonTextColor.value;
  }

  buttoncolor.oninput= () => {
     // Get the value from the height input
     button.style.backgroundColor = buttoncolor.value;
};



ActionButton.oninput= () => {
  // Get the value from the height input
  button.setAttribute('href', ActionButton.value);
};


}



changeStyleforBoard(elementid:string) {
  console.log("Element ID:", elementid);

  // Get the color input elements
  var BoardColor1 = document.getElementById('BoardColor1')as HTMLInputElement;
  var BoardColor2 = document.getElementById('BoardColor2')as HTMLInputElement;

  // Get the board element by ID
  var Board = document.getElementById(elementid)as HTMLInputElement;
  //var body = document.body;
  // Add event listeners to update the board's background gradient on input change
  function updateGradient() {
      const color1 = BoardColor1!.value;
      const color2 = BoardColor2!.value;
      Board!.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
     // body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  }

  // Attach the event listeners to both color inputs
  BoardColor1!.oninput = updateGradient;
  BoardColor2!.oninput = updateGradient;
}






  dragStart(event: DragEvent): void {
    const target = event.target as HTMLElement;
target.setAttribute("height","100px");


    event.dataTransfer?.setData('type', target.getAttribute('data-type') || '');
  }

  dragEnter(event: DragEvent): void {

const elements = this.board.nativeElement.querySelectorAll('.row'); // Select all elements with the class 'row'
const column = this.board.nativeElement.querySelectorAll('.col');
elements.forEach((element: HTMLElement) => {
  if(element.children.length==0)
  this.renderer.setStyle(element, 'height', '100px');
});

column.forEach((element: HTMLElement) => {
  if(element.children.length==0)
  this.renderer.setStyle(element, 'height', '50px');
});
    event.preventDefault();
  }

  dragOver(event: DragEvent): void {
    console.log(this.board.nativeElement.innerHTML)
    const elements = this.board.nativeElement.querySelectorAll('.row'); // Select all elements with the class 'row'
    const column = this.board.nativeElement.querySelectorAll('.col');
    column.forEach((element: HTMLElement) => {
      if(element.children.length==0)
      this.renderer.setStyle(element, 'height', '50px');
    });
    elements.forEach((element: HTMLElement) => {
      if(element.children.length==0)
      this.renderer.setStyle(element, 'height', '100px');
    });
    event.preventDefault();
  }

  drop(event: DragEvent): void {

    const elements = this.board.nativeElement.querySelectorAll('.row'); // Select all elements with the class 'row'


    const column = this.board.nativeElement.querySelectorAll('.col');
    column.forEach((element: HTMLElement) => {
      if(element.children.length==0)
      this.renderer.removeStyle(element, 'height');
    });
    elements.forEach((element: HTMLElement) => {
      this.renderer.removeStyle(element, 'height');
    });


   

    event.preventDefault();
    const type = event.dataTransfer?.getData('type');
    if (type) {
      const element = this.createElement(type);
      const closestRow = this.findClosest(event.target as HTMLElement, '.row');
      const closestCol = this.findClosest(event.target as HTMLElement, '.col');

      const position = this.findInsertPosition(event.clientY, event.target as HTMLElement, type === 'row' ? '.row' : '.col');

      if (type === 'row' && closestCol) {
        this.insertElement(closestCol, element, position);
      } else if (type === 'column' && closestRow) {
        this.insertElement(closestRow, element, position);
      } else if (type === 'row') {
        this.insertElement(this.board.nativeElement, element, position);
      } else {
        if (closestCol) {
          this.renderer.appendChild(closestCol, element);
        } else {
          window.alert('Please drop rows, columns, texts, images, or videos into appropriate containers.');
        }
      }
    }
  }

  findInsertPosition(clientY: number, container: HTMLElement, selector: string): { before: boolean, reference: HTMLElement | null } {
    let children = Array.from(container.querySelectorAll(selector)) as HTMLElement[];
    if (!children.length) return { before: false, reference: null };

    let closestChild = children[0];
    let closestDistance = Infinity;
    let before = true;

    children.forEach(child => {
      const rect = child.getBoundingClientRect();
      const distTop = Math.abs(rect.top - clientY);
      const distBottom = Math.abs(rect.bottom - clientY);

      if (distTop < closestDistance) {
        closestDistance = distTop;
        closestChild = child;
        before = true;
      }
      if (distBottom < closestDistance) {
        closestDistance = distBottom;
        closestChild = child;
        before = false;
      }
    });

    if (clientY < closestChild.getBoundingClientRect().top) {
      return { before: true, reference: closestChild };
    }

    return { before, reference: closestChild };
  }

  activateAllButtons() {
    // Get all elements with the data-type="button"
    const buttons = document.querySelectorAll('[data-type="button"]');
    
    // Iterate over each button and activate it
    buttons.forEach(button => {
        button.setAttribute('data-active', 'true');
       
    });
}


UnactiveAllButtons(){



  const buttons = document.querySelectorAll('[data-type="button"]');
    
  // Iterate over each button and activate it
  buttons.forEach(button => {
      button.setAttribute('data-active', 'false');
     
  });


}




  insertElement(container: HTMLElement, element: HTMLElement, position: { before: boolean, reference: HTMLElement | null }): void {
    if (position.reference) {
      if (position.before) {
        this.renderer.insertBefore(container, element, position.reference);
      } else {
        const nextSibling = position.reference.nextSibling as Node;
        if (nextSibling) {
          this.renderer.insertBefore(container, element, nextSibling);
        } else {
          this.renderer.appendChild(container, element);
        }
      }
    } else {
      this.renderer.appendChild(container, element);
    }
  }

  createElement(type: any): HTMLElement {
    let element: HTMLElement = this.renderer.createElement('div');
    switch (type) {
      case 'row':
    element = this.renderer.createElement('div');
    this.renderer.addClass(element, 'row');
    this.renderer.addClass(element, 'mt-2');
    this.renderer.setAttribute(element, 'draggable', 'true');
    this.renderer.setAttribute(element, 'data-type', 'row');
    this.renderer.setAttribute(element, 'name', 'row');
 
    const rowId = this.generateUniqueId();
    this.renderer.setAttribute(element, 'id', rowId);
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
    this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
    break;
case 'column':
    element = this.renderer.createElement('div');
    this.renderer.addClass(element, 'col');
    this.renderer.addClass(element, 'text-center');
    this.renderer.setAttribute(element, 'draggable', 'true');
    this.renderer.setAttribute(element, 'data-type', 'column');
    this.renderer.setAttribute(element, 'name', 'column');
    const colId = this.generateUniqueId();
    this.renderer.setAttribute(element, 'id', colId);
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
    this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
    break;
case 'text':
    element = this.renderer.createElement('span');
    this.renderer.setProperty(element, 'textContent', 'Sample text...');
    this.renderer.setAttribute(element, 'draggable', 'true');
    this.renderer.setAttribute(element, 'data-type', 'text');
    this.renderer.setAttribute(element, 'name', 'text');
    const textId = this.generateUniqueId();
    this.renderer.setAttribute(element, 'id', textId);
    this.renderer.listen(element, 'click', (event: any) => this.displayProperties(event));
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
    this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
    break;
case 'image':
    element = this.renderer.createElement('img');
    this.renderer.setProperty(element, 'src', 'https://via.placeholder.com/150');
    this.renderer.setAttribute(element, 'draggable', 'true');
    this.renderer.setAttribute(element, 'data-type', 'image');
    this.renderer.setAttribute(element, 'name', 'image');
    this.renderer.setStyle(element,'display','block');
    const imageId = this.generateUniqueId();
    this.renderer.setAttribute(element, 'id', imageId);
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
    this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
    break;
    case 'video':
      const videoUrl = prompt("Please enter the video URL:");
  
      if (!videoUrl) {
          alert("No video URL provided");
          break;
      }

      if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
          // Handle YouTube video
          element = this.renderer.createElement('iframe');
          let youtubeEmbedUrl = this.convertYouTubeUrl(videoUrl);
          this.renderer.setProperty(element, 'src', youtubeEmbedUrl);
          this.renderer.setAttribute(element, 'frameborder', '0');
          this.renderer.setAttribute(element, 'allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
          this.renderer.setAttribute(element, 'allowfullscreen', 'true');
      } else {
          // Handle direct video link
          element = this.renderer.createElement('video');
          this.renderer.setProperty(element, 'src', videoUrl);
          this.renderer.setProperty(element, 'controls', true);
      }
  
      this.renderer.setAttribute(element, 'data-type', 'video');
      this.renderer.setAttribute(element, 'draggable', 'true');
      this.renderer.setAttribute(element, 'name', 'video');
      this.renderer.setStyle(element, 'display', 'block');
      const videoId = this.generateUniqueId();
      this.renderer.setAttribute(element, 'id', videoId);
  
      // Add event listeners
      this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
      this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
      this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
      break;
      case 'button':
        element = this.renderer.createElement('a');
        this.renderer.addClass(element, 'btn');
        this.renderer.addClass(element, 'btn-primary');
        this.renderer.setProperty(element, 'textContent', 'Click Me');
        this.renderer.setProperty(element, 'href', ""); // Empty by default
        this.renderer.setAttribute(element, 'data-active', 'false'); // Inactive by default
        this.renderer.setAttribute(element, 'draggable', 'true');
        this.renderer.setAttribute(element, 'data-type', 'button');
        this.renderer.setStyle(element, 'display', 'block');
        this.renderer.setAttribute(element, 'name', 'button');
        const buttonId = this.generateUniqueId();
        this.renderer.setAttribute(element, 'id', buttonId);
    
        // Event listener to handle click event
        this.renderer.listen(element, 'click', (event: MouseEvent) => {
            if (element.getAttribute('data-active') === 'true') {
                // If active, allow the href to be followed
                window.location.href = element.getAttribute('href')!;
            } else {
                // If inactive, prevent the default action
                event.preventDefault();
               
            }
        });
    
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
        this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
        break;
case 'h1':
    element = this.renderer.createElement('h1');
    this.renderer.setProperty(element, 'textContent', 'h1');
    this.renderer.setAttribute(element, 'draggable', 'true');
    this.renderer.setAttribute(element, 'data-type', 'h1');
    this.renderer.setAttribute(element, 'name', 'h1');
    const h1Id = this.generateUniqueId();
    this.renderer.setAttribute(element, 'id', h1Id);
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
    this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
    this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
    break;

    case 'h2':
      element = this.renderer.createElement('h2');
      this.renderer.setProperty(element, 'textContent', 'h2');
      this.renderer.setAttribute(element, 'draggable', 'true');
      this.renderer.setAttribute(element, 'data-type', 'h2');
      this.renderer.setAttribute(element, 'name', 'h2');
      const h2Id = this.generateUniqueId();
      this.renderer.setAttribute(element, 'id', h2Id);
      this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
      this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
      this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
      break;

      case 'h3':
        element = this.renderer.createElement('h3');
        this.renderer.setProperty(element, 'textContent', 'h3');
        this.renderer.setAttribute(element, 'draggable', 'true');
        this.renderer.setAttribute(element, 'data-type', 'h3');
        this.renderer.setAttribute(element, 'name', 'h3');
        const h3Id = this.generateUniqueId();
        this.renderer.setAttribute(element, 'id', h3Id);
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
        this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
        break;
        case 'h4':
          element = this.renderer.createElement('h4');
          this.renderer.setProperty(element, 'textContent', 'h4');
          this.renderer.setAttribute(element, 'draggable', 'true');
          this.renderer.setAttribute(element, 'data-type', 'h4');
          this.renderer.setAttribute(element, 'name', 'h4');
          const h4Id = this.generateUniqueId();
          this.renderer.setAttribute(element, 'id', h4Id);
          this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
          this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
          this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
          break;
          case 'h5':
        element = this.renderer.createElement('h5');
        this.renderer.setProperty(element, 'textContent', 'h5');
        this.renderer.setAttribute(element, 'draggable', 'true');
        this.renderer.setAttribute(element, 'data-type', 'h5');
        this.renderer.setAttribute(element, 'name', 'h5');
        const h5Id = this.generateUniqueId();
        this.renderer.setAttribute(element, 'id', h5Id);
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
        this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
        break;
        case 'h6':
        element = this.renderer.createElement('h6');
        this.renderer.setProperty(element, 'textContent', 'h6');
        this.renderer.setAttribute(element, 'draggable', 'true');
        this.renderer.setAttribute(element, 'data-type', 'h6');
        this.renderer.setAttribute(element, 'name', 'h6');
        const h6Id = this.generateUniqueId();
        this.renderer.setAttribute(element, 'id', h6Id);
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
        this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
        this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
        break;


    case 'spacer':
      element = this.renderer.createElement('div');
      this.renderer.setStyle(element, 'height', '20px');  // Adjust height as needed
      this.renderer.setAttribute(element, 'draggable', 'true');
      this.renderer.setAttribute(element, 'data-type', 'spacer');
      this.renderer.setAttribute(element, 'name', 'spacer');
      this.renderer.listen(element, 'mouseover', () => {
        this.renderer.setStyle(element, 'border', '1px dotted blue');
      });
      
      this.renderer.listen(element, 'mouseout', () => {
        this.renderer.removeStyle(element, 'border');
      });
      const spacerId = this.generateUniqueId();
      this.renderer.setAttribute(element, 'id', spacerId);
      this.renderer.listen(element, 'click', (event: MouseEvent) => this.displayProperties(event));
      this.renderer.listen(element, 'click', (event: MouseEvent) => this.deleteElementById(event));
      this.renderer.listen(element, 'dragstart', (event: DragEvent) => this.dragStart(event));
      break;
    }
    return element;
  }


  convertYouTubeUrl(videoUrl: string): string {
    let videoId = '';
    if (videoUrl.includes('youtu.be')) {
        videoId = videoUrl.split('youtu.be/')[1];
    } else if (videoUrl.includes('youtube.com')) {
        videoId = videoUrl.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
    }
    return 'https://www.youtube.com/embed/' + videoId;
}

  findClosest(startingElement: HTMLElement, selector: string): HTMLElement | null {
    let currentEl: HTMLElement | null = startingElement;
    while (currentEl && !currentEl.matches(selector)) {
      currentEl = currentEl.parentElement;
    }
    return currentEl;
  }

  deleteElementById(event: Event): void {
    if (this.erase) {
      const target = event.target as HTMLElement;
      const element = document.getElementById(`${target.id}`);
      if (element) {
        element.style.display = 'none';
      }
    }
  }

  generateUniqueId(): string {
    return Date.now().toString();
  }
}
