import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './components/tasks/tasks.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent
    ], //declare and register all components that need to work together
    bootstrap: [AppComponent], //only exists in the root module of the app
    imports: [BrowserModule, SharedModule, TasksModule], //standalone components
})
export class AppModule { }
