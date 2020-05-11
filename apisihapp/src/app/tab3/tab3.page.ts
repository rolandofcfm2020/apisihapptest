import { Component } from '@angular/core';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public patientService: PatientService) {
    this.ionViewDidLoad();

  }

  patients: any[] = [];
  patientsCount : number;

  ionViewDidLoad(){
    console.log("hey");
    this.patientService.getPatients()
    .subscribe(
      (data) => { // Success
        console.log("hey!");
        this.patients = data['Patients'];
        this.patientsCount = data['PatientsQuantity']
      },
      (error) =>{
        console.log(error);
      }
    )
    }
}
