import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  templateUrl: './primary-button.component.html',

})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();
}
