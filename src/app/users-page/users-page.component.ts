import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [],
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent {
  @Input() user!: string;
}
