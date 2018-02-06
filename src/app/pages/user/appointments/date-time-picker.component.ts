import { NgZone } from '@angular/core';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import {
  getSeconds,
  getMinutes,
  getHours,
  getDate,
  getMonth,
  getYear,
  setSeconds,
  setMinutes,
  setHours,
  setDate,
  setMonth,
  setYear
} from 'date-fns';
import {
  NgbDateStruct,
  NgbTimeStruct
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mwl-demo-utils-date-time-picker',
  template: `
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <input
            readonly
            class="form-control"
            [placeholder]="placeholder"
            name="date"
            [(ngModel)]="dateStruct"
            (ngModelChange)="updateDate()"
            ngbDatepicker
            #datePicker="ngbDatepicker" />
            <div class="input-group-addon" (click)="datePicker.toggle()" >
              <i class="fa fa-calendar"></i>
            </div>
        </div>
      </div>
    </form>
    <ngb-timepicker [(ngModel)]="timeStruct" (ngModelChange)="updateTime()" [meridian]="false"></ngb-timepicker>
  `,
  styles: [`
    .form-group {
      width: 100%;
    }
  `]
})
export class DateTimePickerComponent implements OnChanges {

  @Input() placeholder: string;

  @Input() date: Date;

  @Output() dateChange: EventEmitter<Date> = new EventEmitter();

  dateStruct: NgbDateStruct;

  timeStruct: NgbTimeStruct;

  constructor(private _zone: NgZone){

  }

  ngOnChanges(changes: SimpleChanges): void {
     this._zone.run(() => {
        if (changes['date']) {
          this.dateStruct = {
            day: getDate(this.date),
            month: getMonth(this.date) + 1,
            year: getYear(this.date)
          };
          this.timeStruct = {
            second: getSeconds(this.date),
            minute: getMinutes(this.date),
            hour: getHours(this.date)
          };
        }
     });
  }

  updateDate(): void {
    this._zone.run(() => {
      const newDate: Date = setYear(setMonth(setDate(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
      this.dateChange.next(newDate);
    });
  }

  updateTime(): void {
    this._zone.run(() => {
      const newDate: Date = setHours(setMinutes(setSeconds(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
      console.log("newDate===>", newDate);
      this.dateChange.next(newDate);
    });
  }

}