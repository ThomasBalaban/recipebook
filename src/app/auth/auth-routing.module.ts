import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRouters: Routes = [
  { path: 'sign-up', component: SignupComponent },
  { path: 'sign-in', component: SigninComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRouters)
    ],
    exports: [
        RouterModule
    ]

})
export class AuthRoutingModule { }
