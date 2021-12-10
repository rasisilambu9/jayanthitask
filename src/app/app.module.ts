import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// routing
import { AppRoutingModule } from './app-routing.module';
// application
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// pages
import { LendComponent } from './lend/lend.component';
import { ReturnComponent } from './return/return.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
// materials
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from  '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    LendComponent,
    ReturnComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
