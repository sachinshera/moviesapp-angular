import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { MoviesComponent } from './home/movies/movies.component';
import { SeriesComponent } from './home/series/series.component';
import { NavbarComponent } from './includes/home/navbar/navbar.component';
import { BacktotopComponent } from './others/backtotop/backtotop.component';
import { FooterComponent } from './includes/home/navbar/footer/footer.component';
import { HomepagebannerComponent } from './home/homepage/homepagebanner/homepagebanner.component';
import { Top10Component } from './home/homepage/top10/top10.component';
import { OnlyOnComponent } from './home/homepage/only-on/only-on.component';
import { FeaturesComponent } from './home/homepage/features/features.component';
import { FavroitePersonComponent } from './home/homepage/favroite-person/favroite-person.component';
import { SeriesFeaturesComponent } from './home/homepage/series-features/series-features.component';
import { GenresComponent } from './home/homepage/genres/genres.component';
import { RecomendsComponent } from './home/homepage/recomends/recomends.component';
import { ToppicksComponent } from './home/homepage/toppicks/toppicks.component';
import { DetailsComponent } from './home/series/details/details.component';
import { SmallSliderComponent } from './home/series/small-slider/small-slider.component';
import { SideheaderComponent } from './includes/home/navbar/sideheader/sideheader.component';
import { MovieDetailsComponent } from './home/movies/movie-details/movie-details.component';
import { MoviePlayerComponent } from './home/movies/movie-details/movie-player/movie-player.component';
import { SeriesPlayerComponent } from './home/series/details/series-player/series-player.component';
import { MenusComponent } from './includes/home/navbar/menus/menus.component';
import { UserWidgetComponent } from './includes/home/navbar/user-widget/user-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviesComponent,
    SeriesComponent,
    NavbarComponent,
    BacktotopComponent,
    FooterComponent,
    HomepagebannerComponent,
    Top10Component,
    OnlyOnComponent,
    FeaturesComponent,
    FavroitePersonComponent,
    SeriesFeaturesComponent,
    GenresComponent,
    RecomendsComponent,
    ToppicksComponent,
    DetailsComponent,
    SmallSliderComponent,
    SideheaderComponent,
    MovieDetailsComponent,
    MoviePlayerComponent,
    SeriesPlayerComponent,
    MenusComponent,
    UserWidgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
