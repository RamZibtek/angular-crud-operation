import { Component } from "@angular/core";
import { ServiceService } from "src/app/services/student.service";

@Component({
  selector: "app-student-page",
  templateUrl: "./student-page.component.html",
  styleUrls: ["./student-page.component.css"],
})
export class StudentPageComponent {
  constructor(private studentService: ServiceService) {}
  name!: string;
  course!: string;
  email!: string;
  phone!: string;
  isLoading: boolean = false;
  loadingTitle: string = "Loading...";
  errors: any = [];
  saveStudent() {
    this.isLoading = true;
    this.loadingTitle = " Saving...";
    var inputData = {
      name: this.name,
      course: this.course,
      email: this.email,
      phone: this.phone,
    };
    this.studentService.saveStudent(inputData).subscribe({
      next: (res: any) => {
        console.log(res, "response");
        this.isLoading = false;
        // alert(res.message);
        this.name = "";
        this.course = "";
        this.email = "";
        this.phone = "";
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading = false;
        console.log(err.error.errors, "errors");
      },
    });
  }
}
