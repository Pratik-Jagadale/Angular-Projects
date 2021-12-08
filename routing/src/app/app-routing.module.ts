import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { EmptyComponent } from './empty/empty.component';
import { InvalidcompComponent } from './invalidcomp/invalidcomp.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: "", component: TechnologyComponent },
  { path: "books", component: BookComponent },
  { path: "technology", component: TechnologyComponent },

  //wildcard component
  { path: "**", component: InvalidcompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
