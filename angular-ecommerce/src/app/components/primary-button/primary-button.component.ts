/**
 * PrimaryButtonComponent
 *
 * Purpose:
 *   A reusable button component for primary actions.
 *
 * How It Works:
 *   - Accepts an input "label" for button text.
 *   - Emits a "btnClicked" event when clicked.
 *
 */
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
