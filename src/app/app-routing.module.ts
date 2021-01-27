import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:PortfolioComponent,pathMatch: 'full',},
  // { path: 'skills', redirectTo: '/home#skills',pathMatch: 'full',},
  // { path: 'experience', redirectTo: '/home#experience',pathMatch: 'full',},
  // { path: 'projects', redirectTo: '/home#projects',pathMatch: 'full',},
  // { path: 'contact', redirectTo: '/home#contact',pathMatch: 'full',},
  { path: 'feedback', component: FeedbackComponent,pathMatch: 'full',},
  { path: 'blogs', component: BlogsComponent,pathMatch: 'full',},
  { path: '**', redirectTo: '/home',pathMatch: 'full',},
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
