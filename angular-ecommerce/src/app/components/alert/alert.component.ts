import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Show a red banner if message is not null or empty -->
    <div *ngIf="message" class="bg-red-500 text-white p-3 rounded-md mb-2">
      {{ message }}
    </div>
  `
})
export class AlertComponent {
  @Input() message: string | null = null;
}
