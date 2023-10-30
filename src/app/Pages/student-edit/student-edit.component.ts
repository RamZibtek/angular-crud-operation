import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from "src/app/services/student.service";

@Component({
  selector: "app-student-edit",
  templateUrl: "./student-edit.component.html",
  styleUrls: ["./student-edit.component.css"],
})
export class StudentEditComponent implements OnInit {
  student!: any;
  studentId!: any;
  isLoading: boolean = false;
  loadingTitle: string = "Loading....";
  errors: any = [];
  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {}
  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get("id");
    // alert(this.studentId);
    this.isLoading = false;
    this.student = this.serviceService
      .getStudent(this.studentId)
      .subscribe((res) => {
        console.log(res);
        this.student = res.student;
        this.isLoading = true;
      });
  }
  UpdateStudent() {
    var inputData = {
      name: this.student.name,
      course: this.student.course,
      email: this.student.email,
      phone: this.student.phone,
    };
    this.isLoading = true;
    this.serviceService.updateStudent(inputData, this.studentId).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res.message);
        this.isLoading = false;
      },
      error: (err: any) => {
        console.log(err);
        this.errors = err.error.errors;
        this.isLoading = false;
      },
    });
  }
}
