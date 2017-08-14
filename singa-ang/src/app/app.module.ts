import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {MaterializeModule} from 'ng2-materialize';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { ProgrammesComponent } from './Components/programmes/programmes.component';
import { AnnouncementsComponent } from './Components/announcements/announcements.component';
import { StoriesComponent } from './Components/stories/stories.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SubscriptionPageComponent } from './Components/subscription-page/subscription-page.component';
import { StoriesPageComponent } from './Components/stories-page/stories-page.component';
import { StoriesAddComponent } from './Components/stories-add/stories-add.component';
import { ProfileNavComponent } from './Components/profile-nav/profile-nav.component';
import { ProfileInfoComponent } from './Components/profile-info/profile-info.component';
import { ProfilMeetSuggestsComponent } from './Components/profile-meet-suggests/profil-meet-suggests.component';
import { ProfileProposalsComponent } from './Components/profile-proposals/profile-proposals.component';
import { ProfileGroupComponent } from './Components/profile-group/profile-group.component';
import { EventsComponent } from './Components/events/events.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubscriptionComponent,
    ProgrammesComponent,
    AnnouncementsComponent,
    StoriesComponent,
    LocationsComponent,
    FooterComponent,
    SidebarComponent,
    SubscriptionPageComponent,
    StoriesPageComponent,
    StoriesAddComponent,
    ProfileNavComponent,
    ProfileInfoComponent,
    ProfilMeetSuggestsComponent,
    ProfileProposalsComponent,
    ProfileGroupComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
