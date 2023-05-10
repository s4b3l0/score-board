import { Component, OnInit } from '@angular/core';
import {NbDialogConfig, NbDialogRef, NbDialogService} from "@nebular/theme";
import {ItemManagementComponent} from "../../../share-components/item-management/item-management.component";
import {PatientControllerService} from "../../../api/services/patient-controller.service";
import {map, Observable} from "rxjs";
import {Patient} from "../../../api/models/patient";
import {SessionService} from "../../../util/session.service";
import {UserAccount} from "../../../api/models/user-account";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string =  'John Doe';
  patientName: string = '';
  patients$: Observable<Array<Patient>> | undefined;

  columns = [{ prop: 'email' }, { name: 'userName' }, { name: 'accountType', sortable: false }];
  accounts: (UserAccount | undefined)[] = [];

  constructor(private nbDialogService: NbDialogService,
              private sessionService: SessionService,
              private patientControllerService:PatientControllerService) { }

  ngOnInit(): void {
    this.patients$ = this.patientControllerService.getAllUsingGET3();
    this.patients$.subscribe(value => {
      this.accounts = [...value.map(m => m.userAccount)];
    })
  }


  getPatient() {
    //get patient
    const config : Partial<NbDialogConfig> = {
      hasBackdrop:true,
      closeOnBackdropClick:true,
    }
    this.nbDialogService.open(ItemManagementComponent, config)
  }

  selectedPatient : Patient | undefined;

  selectRow($event: any) {
    if ($event?.type != 'click') return;
    this.patients$?.subscribe((value: Patient[]) => {
      this.selectedPatient = value.find(p => p.email == $event.row.email)
      this.sessionService.patient.next(this.selectedPatient);
    });
  }

  userAccounts(p: Array<Patient> | null) {
    return p?.map(value => value.userAccount);
  }
}
