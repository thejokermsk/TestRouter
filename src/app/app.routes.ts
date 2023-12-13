import { Routes } from '@angular/router';
import { UsersPageComponent } from './users-page/users-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

export const routes: Routes = [
    {path: 'users', component: UsersPageComponent},
    {path: 'price', component: PricePageComponent},
    {path: 'profile/:username', component: ProfilePageComponent},
];
