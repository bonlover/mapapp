import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { EmailComponent } from './_partials/components/email/email.component';
import { TextComponent } from './_partials/components/text/text.component';
import { DropdownComponent } from './_partials/components/dropdown/dropdown.component';
import { FileComponent } from './_partials/components/file/file.component';
import { TextareaComponent } from './_partials/components/textarea/textarea.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { CheckboxComponent } from './_partials/components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './_partials/components/radiobutton/radiobutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailComponent,
    TextComponent,
    DropdownComponent,
    FileComponent,
    TextareaComponent,
    LoginComponent,
    LocationComponent,
    CheckboxComponent,
    RadiobuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
