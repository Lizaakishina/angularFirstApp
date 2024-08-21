import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { ProfileService } from '../../data/services/profile.service';

/*@for (profile of subscribers$ | async; track profile.id) {
  <app-subscriber-card
    [profile]="profile">
  </app-subscriber-card>
}*/

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgForOf, RouterLink, JsonPipe, SubscriberCardComponent, AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService)

  subscribers$ = this.profileService.getSubscribersShortList()

  menuItems = [
    {
      label: 'Моя страница',
      link: ''
    },
    {
      label: 'Чаты',
      link: 'chats'
    },
    {
      label: 'Поиск',
      link: 'search'
    }
  ]
}
