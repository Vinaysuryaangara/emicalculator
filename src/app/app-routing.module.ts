import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifiedCalculatorComponent } from './modified-calculator/modified-calculator.component';

const routes: Routes = [{path:"modified", component:ModifiedCalculatorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
