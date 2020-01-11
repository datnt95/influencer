import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MainComponent } from './core/main/main.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: MainComponent},
    // { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
    // { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
    // { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
    // { path: 'charts', loadChildren: './charts/charts.module#ChartsDataModule' }
  ]},
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
