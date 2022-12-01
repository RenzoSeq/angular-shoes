import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ShoeAppComponent } from './shoe-app/shoe-app.component';
import { ShoesAboutComponent } from './shoes-about/shoes-about.component';

const routes : Routes = [
    {
        path: '',
        redirectTo: 'shoes',
        pathMatch :'full',
    },
   
    
    {
        path: 'shoes',
        component: ShoeAppComponent
    },
    {
        path: 'abouth',
        component: ShoesAboutComponent
    },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {}