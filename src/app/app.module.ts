import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SuiModule} from 'ng2-semantic-ui';
import SubscriptionComponent from './subscription.component';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardDescriptionComponent } from './card-description/card-description.component';
import { CardLinkComponent } from './card-link/card-link.component';
import { CardTimePostComponent } from './card-time-post/card-time-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    CardImageComponent,
    CardDescriptionComponent,
    CardLinkComponent,
    CardTimePostComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
