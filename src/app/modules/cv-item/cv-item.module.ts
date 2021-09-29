import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvItemRoutingModule } from './cv-item-routing.module';
import { CvItemComponent } from './cv-item.component';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CvItemComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    CvItemRoutingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class CvItemModule { }
