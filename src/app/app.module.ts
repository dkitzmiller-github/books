import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorFormComponent } from './authors/author-form/author-form.component';

import { AuthGuard } from './auth.guard';

import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';

// TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    TitleizePipe,
    SearchPipe,
    BookFormComponent,
    BookDetailsComponent,
    NavComponent,
    NotFoundComponent,
    AuthorListComponent,
    AuthorFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [
    BookService,
    AuthorService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
