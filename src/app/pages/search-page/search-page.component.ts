import { Component, inject } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor() {
    this.profileService.getTestAccounts()
    .subscribe( val => { //"подписаться" на ответ; что будет происходить, если ответ придет
      this.profiles = val
    })
  }
}
