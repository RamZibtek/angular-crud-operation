import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./Pages/homepage/homepage.component";
import { AboutpageComponent } from "./Pages/aboutpage/aboutpage.component";
import { ContactpageComponent } from "./Pages/contactpage/contactpage.component";
import { WebComponent } from "./service/web/web.component";
import { MobileComponent } from "./service/mobile/mobile.component";
import { UiUxComponent } from "./service/ui-ux/ui-ux.component";
import { ServicesComponent } from "./service/services.component";
import { StudentPageComponent } from "./Pages/student-page/student-page.component";
import { StudentCreateComponent } from "./Pages/student-create/student-create.component";
import { StudentEditComponent } from "./Pages/student-edit/student-edit.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    title: "Homepage",
  },
  {
    path: "about",
    component: AboutpageComponent,
  },
  {
    path: "contact",
    component: ContactpageComponent,
  },
  {
    path: "services",
    component: ServicesComponent,
  },
  {
    path: "web",
    component: WebComponent,
  },
  {
    path: "mobile",
    component: MobileComponent,
  },
  {
    path: "ui-ux",
    component: UiUxComponent,
  },
  {
    path: "students",
    component: StudentPageComponent,
    title: "Student Create",
  },
  {
    path: "students/create",
    component: StudentCreateComponent,
    title: "Student  Lists",
  },
  {
    path: "students/:id/edit",
    component: StudentEditComponent,
    title: "Student  Edit",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
