import { DetailsComponent } from './home/series/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { MoviesComponent } from './home/movies/movies.component';
import { SeriesComponent } from './home/series/series.component';
import { MovieDetailsComponent } from './home/movies/movie-details/movie-details.component';
import { MoviePlayerComponent } from './home/movies/movie-details/movie-player/movie-player.component';
import { SeriesPlayerComponent } from './home/series/details/series-player/series-player.component';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'movies/:id/player',
    component: MoviePlayerComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'series/:id',
    component: DetailsComponent,
  },
  {
    path: 'series/:id/player',
    component: SeriesPlayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
