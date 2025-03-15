/**
 * AlertComponent
 *
 * Purpose:
 *   Displays a global alert banner when an alert message is provided.
 *
 * How It Works:
 *   - Accepts an input property "message" (a string or null).
 *   - If "message" isnt null, it renders a div with the class "alert-banner", from the shared styles file.
 *   - This component is typically placed in the AppComponent to show alerts globally.
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="alert-banner">
      {{ message }}
    </div>
  `
})
export class AlertComponent {
  @Input() message: string | null = null;
}
