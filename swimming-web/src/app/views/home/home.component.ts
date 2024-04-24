import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/shared/models/news.type';
import { HomeService } from './home.service';

@Component({
  selector: 'swim-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public news$: Observable<News[]> = this.homeService.getNews$();

  constructor(private homeService: HomeService) {}
}
