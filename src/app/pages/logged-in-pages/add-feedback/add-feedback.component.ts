import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Feedback} from "../../../api/models/feedback";
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  form: FormGroup = this.fb.group({
    title: this.fb.control("", Validators.required),
    text: this.fb.control("", Validators.required)
  });

  constructor(private fb: FormBuilder,
              private dialogRef: NbDialogRef<AddFeedbackComponent>) { }

  ngOnInit(): void {
  }

  saveFeeback() {
    let feedback: Feedback = {
      title: this.form.value.title,
      text: this.form.value.text
    }
    this.dialogRef.close(feedback);
  }
}
