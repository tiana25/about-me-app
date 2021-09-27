import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvItemRoutingModule } from './cv-item-routing.module';
import { CvItemComponent } from './cv-item.component';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    CvItemComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    CvItemRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class CvItemModule { }
