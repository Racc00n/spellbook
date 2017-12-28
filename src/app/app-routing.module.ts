import { SpellsUseComponent } from './spells-use/spells-use.component';
import { SpellsSetupComponent } from './spells-setup/spells-setup.component';
import { SpellPerDayComponent } from './spell-per-day/spell-per-day.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo:'/spells-per-day', pathMatch: 'full'},
  { path: 'spells-per-day', loadChildren: './spell-per-day/spell-per-day.module#SpellPerDayModule'},
  { path: 'spells-setup', loadChildren: './spells-setup/spells-setup.module#SpellsSetupModule' },
  { path: 'spells-use', loadChildren: './spells-use/spells-use.module#SpellsUseModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
