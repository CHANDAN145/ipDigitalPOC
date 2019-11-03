import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/pages/home/home.component";
import { IndustriesComponent} from "src/app/pages/industries/industries.component";
import { DatacenterComponent } from "src/app/pages/solutions/datacenter/datacenter.component";
import { ItEnablementComponent } from "src/app/pages/solutions/it-enablement/it-enablement.component";
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'industries',component: IndustriesComponent},
  {path: 'services/it-enablement', component: ItEnablementComponent},
  {path: 'services/datacenter', component: DatacenterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
