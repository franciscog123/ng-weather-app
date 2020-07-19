import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
