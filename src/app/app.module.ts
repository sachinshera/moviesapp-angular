import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { MoviesComponent } from './home/movies/movies.component';
import { SeriesComponent } from './home/series/series.component';
import { NavbarComponent } from './includes/home/navbar/navbar.component';
import { SideheaderComponent } from './home/navbar/sideheader/sideheader.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviesComponent,
    SeriesComponent,
    NavbarComponent,
    SideheaderComponent,
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
    ToppicksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
