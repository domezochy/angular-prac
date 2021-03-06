import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './studentlist/studentlist.component';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component';
import { StudentDetailComponent } from './student-detail/student-detail.component'

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home' , component : HomeComponent },
  { path: 'students', component: StudentListComponent },
  { path : 'students/:id', component : StudentDetailComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: '**', component : NopagetodisplayComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HomeComponent,
    NopagetodisplayComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
