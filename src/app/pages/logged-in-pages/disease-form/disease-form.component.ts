import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbDialogRef} from "@nebular/theme";
import {Disease} from "../../../api/models/disease";

@Component({
  selector: 'app-disease-form',
  templateUrl: './disease-form.component.html',
  styleUrls: ['./disease-form.component.scss']
})
export class DiseaseFormComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control("", Validators.required),
    type: this.formBuilder.control("", Validators.required)
  });


  constructor(private formBuilder:FormBuilder,
              private dialogRef:NbDialogRef<DiseaseFormComponent>) { }

  ngOnInit(): void {
  }

  addDisease() {
    const disease : Disease ={
      name : String(this.formGroup.value.name),
      type : String(this.formGroup.value.type)
    }
    this.dialogRef.close(disease);
  }
}
