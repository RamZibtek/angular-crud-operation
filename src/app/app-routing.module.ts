import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./Pages/homepage/homepage.component";
import { AboutpageComponent } from "./Pages/aboutpage/aboutpage.component";
import { ContactpageComponent } from "./Pages/contactpage/contactpage.component";

const routes: Routes = [
  {
    path: "/",
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
