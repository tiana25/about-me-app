import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvItemComponent } from './cv-item.component';

const routes: Routes = [{ path: '', component: CvItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvItemRoutingModule { }
