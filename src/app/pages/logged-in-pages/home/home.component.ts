import { Component, OnInit } from '@angular/core';
import {NbDialogConfig, NbDialogRef, NbDialogService} from "@nebular/theme";
import {ItemManagementComponent} from "../../../share-components/item-management/item-management.component";
import {PatientControllerService} from "../../../api/services/patient-controller.service";
import {map, Observable} from "rxjs";
import {Patient} from "../../../api/models/patient";
import {SessionService} from "../../../util/session.service";
import {UserAccount} from "../../../api/models/user-account";
import {UserAccountControllerService} from "../../../api/services/user-account-controller.service";

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
  allAccounts: (UserAccount | undefined)[] = [];

  constructor(private nbDialogService: NbDialogService,
              private sessionService: SessionService,
              private userAccountControllerService:UserAccountControllerService,
              private patientControllerService:PatientControllerService) { }

  ngOnInit(): void {
    this.patients$ = this.patientControllerService.getAllUsingGET3();
    if (this.sessionService.getType() == 'PATIENT'){
      this.patientControllerService.getOneUsingGET3(this.sessionService.getAccount().email || '').subscribe(value => {
        if (!value) return;
        this.selectedPatient = value;
      });
    } else {
      this.getPatients();
    }
  }

  getPatients() {
    this.patients$?.subscribe(value => {
      this.accounts = [...value.map(m => m.userAccount).filter(value => value?.accountType ==='PATIENT')];
      this.allAccounts = [...value.map(m => m.userAccount)];
      let num = this.allAccounts.findIndex(value1 => value1?.email == this.sessionService.getAccount().email);
      this.allAccounts.splice(num, 1);
    });
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
    if (!$event) return;
    this.patients$?.subscribe((value: Patient[]) => {
      this.selectedPatient = value.find(p => p.email == $event.email)
      this.sessionService.patient.next(this.selectedPatient);
    });
  }

  userAccounts(p: Array<Patient> | null) {
    return p?.map(value => value.userAccount);
  }

  cloneDeep(value : any) {
    return JSON.parse(JSON.stringify(value));
  }

  makeAdmin(account: UserAccount | undefined) {
    const accountCopy : UserAccount = this.cloneDeep(account);
    accountCopy.accountType= 'ADMIN';
    this.changeType(accountCopy);
  }

  makePatient(account: UserAccount| undefined) {
    const accountCopy : UserAccount = this.cloneDeep(account);
    accountCopy.accountType= 'PATIENT';
    this.changeType(accountCopy);
  }

  makeDoctor(account: UserAccount | undefined) {
    const accountCopy : UserAccount = this.cloneDeep(account);
    accountCopy.accountType= 'DOCTOR';
    this.changeType(accountCopy);
  }

  changeType(account : UserAccount) {
    let params: UserAccountControllerService.UpdateUsingPUT4Params = {
      id: account.email || '',
      item: account
    }
    this.userAccountControllerService.updateUsingPUT4(params).subscribe(value => {
      if (value) {
        this.getPatients();
      }
    })
  }

  allowUserTypes() {
    return this.sessionService.getType() == 'ADMIN' || this.sessionService.getAccount().userName?.includes('adm');
  }

  isDoctor() {
    return this.sessionService.getType() == 'DOCTOR';
  }
}
