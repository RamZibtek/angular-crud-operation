import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { HttpStatusCode } from "@angular/common/http";

export interface StudentResponse {
  id: number;
  name: "string";
  course: "string";
  email: "string";
  phone: "number";
  created_at: "string";
  update_at: "string";
}
export interface StudentResponseType {
  status: Number;
  students: StudentResponse[];
}

export interface StudentEditResponse {
  status: Number;
  student: object;
}
@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}
  getStudents() {
    return this.httpClient.get<StudentResponseType>(`http://localhost:8000`);
  }
  getStudent(studentId: number) {
    return this.httpClient.get<StudentEditResponse>(
      `http://localhost:8000/students/${studentId}/edit`
    );
  }
  saveStudent(InputData: object) {
    return this.httpClient.post(`http://localhost:8000/users`, InputData);
  }
  updateStudent(inputData: object, studentId: number) {
    return this.httpClient.put(
      `http://localhost:8000/students/${studentId}/edit`,
      inputData
    );
  }
  destroyStudent(studentId: Number) {
    return this.httpClient.delete(
      `http://localhost:8000/student/${studentId}/delete`
    );
  }
}
