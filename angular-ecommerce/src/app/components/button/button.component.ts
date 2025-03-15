/**
 * ButtonComponent
 *
 * Purpose:
 *   A basic reusable button component.
 *
 * How It Works:
 *   - It accepts an input "label" that defines the button text.
 *   - It emits a "btnClicked" event when the button is clicked.
 *
 */
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
