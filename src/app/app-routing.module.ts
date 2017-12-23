import { SpellsUseComponent } from './spells-use/spells-use.component';
import { SpellsSetupComponent } from './spells-setup/spells-setup.component';
import { SpellPerDayComponent } from './spell-per-day/spell-per-day.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: SpellPerDayComponent},
  { path: 'spells-per-day', component: SpellPerDayComponent },
  { path: 'spells-setup', component: SpellsSetupComponent },
  { path: 'spells-use', component: SpellsUseComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
