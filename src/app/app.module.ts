import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {UsersComponent} from './containers/users.component';
import {PostComponent} from './containers/posts.component';
import {DashboardComponent} from './components/layout/dashboard.component';
import {HeaderComponent} from './components/layout/header.component';
import {LayoutComponent} from './components/layout/youtube-layout.component';
import {MaterialModule} from './material.module';
import {HttpService} from './services/http.service';
import {ApiService} from './services/api.service';
import {UserCardComponent} from './components/user-card.component';
import {UserListComponent} from './components/user-list.component';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from '../reducers';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    DebounceComponent,
    UsersComponent,
    PostComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    UserCardComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
