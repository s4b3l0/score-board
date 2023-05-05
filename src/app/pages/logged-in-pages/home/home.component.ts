import { Component, OnInit } from '@angular/core';
import {NbDialogConfig, NbDialogRef, NbDialogService} from "@nebular/theme";
import {ItemManagementComponent} from "../../../share-components/item-management/item-management.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string =  'John Doe';
  patientName: string = '';

  constructor(private nbDialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  getPatient() {
    //get patient
    const config : Partial<NbDialogConfig> = {
      hasBackdrop:true,
      closeOnBackdropClick:true,
    }
    this.nbDialogService.open(ItemManagementComponent, config)
  }
}
