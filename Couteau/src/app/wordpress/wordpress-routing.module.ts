import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordPressPage } from './wordpress.page';

const routes: Routes = [
  {
    path: '',
    component: WordPressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressPageRoutingModule {}
