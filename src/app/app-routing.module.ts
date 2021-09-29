import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  { path: 'about',
   loadChildren: () => import('./modules/about/about.module')
   .then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: '', loadChildren: () => import('./modules/cv-item/cv-item.module').then(m => m.CvItemModule) },
  { path: 'feedback', loadChildren: () => import('./modules/feedback/feedback.module').then(m => m.FeedbackModule) },
  // { path: '/projects', loadChildren: () => import('./modules/cv-item/projects/projects.component').then(m => m.ProjectsComponent) }
  
  // {path: '', component: CvItemComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
