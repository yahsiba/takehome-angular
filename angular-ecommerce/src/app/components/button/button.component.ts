import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',

})
export class ButtonComponent {
  label = input('');
  btnClicked = output();
}
