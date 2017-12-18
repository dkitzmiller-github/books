import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorFormComponent } from './authors/author-form/author-form.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth.guard';

// books/59767ef7274662debe386fea
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'authors',
    children: [
      {
        path: '',
        component: AuthorListComponent,
      },
      {
        path: 'new',
        component: AuthorFormComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/new',
    component: BookFormComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'books/:_id',
    component: BookDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
