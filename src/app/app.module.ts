import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityComponent } from './entity/entity.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { StemplateComponent } from './stemplate/stemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityComponent,
    EvaluationComponent,
    StemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
        path:'',
        component:EntityComponent
      },
      {
        path:'select-template',
        component:StemplateComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
