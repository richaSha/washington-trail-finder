import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailDetailComponent } from './trail-detail/trail-detail.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
      path: '',
      component: ResultComponent
  },
  {
      path: 'detail/:id',
      component: TrailDetailComponent
   }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
