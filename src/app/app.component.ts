import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main class="container">
    <input 
          class="form-control form-control-lg d-flex justify-content-center" 
          type="text" 
          placeholder="Start typing..." 
          aria-label="Start typing... example"
          [ngStyle]="{
            'width': '100%',
            'max-width': '330px',
            'padding': '15px',
            'margin': 'auto'
          }"
          appRainbow>
  </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
