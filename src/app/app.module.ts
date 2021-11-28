import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { VisionComponent } from './components/vision/vision.component';
import { NewsComponent } from './components/news/news.component';
import { CollectionComponent } from './components/collection/collection.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    StoryComponent,
    AboutUsComponent,
    RoadmapComponent,
    VisionComponent,
    NewsComponent,
    CollectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
