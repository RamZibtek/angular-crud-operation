import { Component, OnInit } from "@angular/core";
import {
  ServiceService,
  StudentResponse,
} from "src/app/services/student.service";

@Component({
  selector: "app-student-create",
  templateUrl: "./student-create.component.html",
  styleUrls: ["./student-create.component.css"],
})
export class StudentCreateComponent implements OnInit {
  constructor(private serviceService: ServiceService) {}
  students!: StudentResponse[];
  isLoading: boolean = false;

  ngOnInit() {
    this.getStudentLists();
  }

  getStudentLists() {
    this.isLoading = true;
    this.serviceService.getStudents().subscribe((res: any) => {
      console.log(res.students);
      this.students = res;
      this.isLoading = false;
    });
  }
  deleteStudent(event: any, studentId: number) {
    if (confirm("Are you sure you want to delete")) {
      event.target.innerText = "Deleting.....";
      this.serviceService.destroyStudent(studentId).subscribe((res: any) => {
        this.getStudentLists();
        alert(res.message);
      });
    }
  }
}
