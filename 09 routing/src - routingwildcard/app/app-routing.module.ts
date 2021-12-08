import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { FirstComponent } from './first/first.component';
import { InvalidcompComponent } from './invalidcomp/invalidcomp.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: "", component: EmptyComponent },
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
  //wildcard component
  { path: "**", component: InvalidcompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
