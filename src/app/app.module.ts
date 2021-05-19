import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateComponent } from './components/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatSliderModule } from '@angular/material/slider';
import { InputImgComponent } from './components/input-img/input-img.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import * as $ from 'jquery';
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';
import { AlertMsgComponent } from './components/alert-msg/alert-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorComponent,
    CreateComponent,
    InputImgComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective,
    AlertMsgComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
