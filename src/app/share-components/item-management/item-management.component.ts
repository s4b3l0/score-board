import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbComponentSize} from "@nebular/theme";
import {Appointment} from "../../api/models/appointment";
import {Feedback} from "../../api/models/feedback";
import {Disease} from "../../api/models/disease";
import {SessionService} from "../../util/session.service";

export enum Mode  {
  APPOINTMENT,
  DISEASE,
  FEEDBACK,

}

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css'],
})
export class ItemManagementComponent implements OnInit {

  enableEdit = true;

  constructor(private sessionService: SessionService) {
    if (this.sessionService.getType() == 'PATIENT') {
      this.enableEdit = false;
    }
  }

  ngOnInit(): void {
  }

  private _rows : any[] | undefined | null | Appointment[];
  loadingIndicator = true;
  reorderable = true;
  @Output()
  openAdd = new EventEmitter<String>();

  @Output()
  deleteItem : EventEmitter<Disease | Appointment | Feedback>=  new EventEmitter<Feedback>();

  @Input()
  columns : {prop: string} | any = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company', sortable: false }];

  @Input()
  title: string  = '';

  @Input()
  size: NbComponentSize = 'small';

  @Input()
  mode: Mode | undefined;
  Mode= Mode;

  edit(value: any | undefined) {
  }

  delete(value: any) {
    this.deleteItem.emit(value);
  }

  clickAdd() {
    this.openAdd.emit('add');
  }

  onSelectRed(row: any) {
    console.log(row)
  }

  onSelectBlue(value: any) {
   console.log(value)
  }


  @Input()
  get rows(): any[] | undefined | null | Appointment[] | Feedback[] {
    return this._rows;
  }

  set rows(value: any[] | undefined | null) {
    if (value) this._rows = [...value];
  }

  getCount(rows: any[] | Appointment[]) {
    if (rows) {
      if(rows.length > 1) {
        return `${rows.length} rows`
      } else if (rows.length == 1) {
        return `${rows.length} row`
      }
    }
    return 0;
  }
}
