import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./Pages/homepage/homepage.component";
import { AboutpageComponent } from "./Pages/aboutpage/aboutpage.component";
import { ContactpageComponent } from "./Pages/contactpage/contactpage.component";
import { NavbarComponent } from "./partials/navbar/navbar.component";
import { WebComponent } from "./service/web/web.component";
import { MobileComponent } from "./service/mobile/mobile.component";
import { StudentPageComponent } from "./Pages/student-page/student-page.component";
import { LoaderComponent } from './partials/navbar/loader/loader.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    ContactpageComponent,
    NavbarComponent,
    WebComponent,
    MobileComponent,
    StudentPageComponent,
    LoaderComponent,
    StudentCreateComponent,
    StudentEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
