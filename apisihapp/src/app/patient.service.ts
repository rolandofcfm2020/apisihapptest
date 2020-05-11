import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) { 
    
  }

 

  getPatients() {
    debugger;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InJvbGFuZG98OTE0MDJhOGItZGNlMy00MDQ1LWJlMjQtY2VhMDBlYjIwNTFjIiwibmJmIjoxNTg5MTc0NDAzLCJleHAiOjE4MjkxNzQ0MDMsImlhdCI6MTU4OTE3NDQwMywiaXNzIjoiU2loYXBwUlZTb2x1dGlvbnMiLCJhdWQiOiJTaWhhcHBSVlNvbHV0aW9ucyJ9.6_1F113StF-lfuV-FIYtVyQ7M-lehkbSVHgeb7CFc_0'
   'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRlbW98MDQxOWYxMTEtNWI4ZC00YjY5LTk4NmItYzI0YmY2MWMwOTA5IiwibmJmIjoxNTg5MTY4NDgwLCJleHAiOjE4MjkxNjg0ODAsImlhdCI6MTU4OTE2ODQ4MCwiaXNzIjoiU2loYXBwUlZTb2x1dGlvbnMiLCJhdWQiOiJTaWhhcHBSVlNvbHV0aW9ucyJ9.S3zuwwUBgHIOP_UCperVm6TbWGdZU3FjhIWew3wdrNs'
  })
};

    return this.http.get("http://apisihapp.azurewebsites.net/api/patients/GetMyPatients", httpOptions)
    .pipe(
      
    );
    //return this.http.get('https://randomuser.me/api/?results=25');
  }
}
