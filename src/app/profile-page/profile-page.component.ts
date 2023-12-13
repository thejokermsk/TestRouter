import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {
  @Input() username!: string;
}
