import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, NgZone } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { SelectClientComponent } from './select-client/select-client.component';
import { AppTranslationModule } from '../../../app.translation.module';
import {Router} from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
//import moment = require('moment');
import * as moment from 'moment';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  isSameWeek,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
} from 'angular-calendar';

import { CalendarService, Calendar } from '../../../services/calendars.service';
import { ServicesService, Service } from '../../../services/services.service';
import { ClientsService, Client } from '../../../services/clients.service';
import { AppointmentService, Appointment } from '../../../services/appointment.service';
import { OpeningHoursService, OpeningHours } from '../../../services/openinghours.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { User } from '../../../services/users.service';
import { LanguageService } from '../../../services/language.service';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointments.html',
  host: {'(window:keydown)': 'hotkeys($event)'},
  styleUrls:['angular-calendar.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentComponent {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'week';

  viewDate: Date = new Date();

  tempviewDate: Date = new Date();


  modalData: {
    action: string,
    event: CalendarEvent,
  };

  actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  }];

  refresh: Subject<any> = new Subject();
  
  tempEvents: any[];
  events: any[];

  activeDayIsOpen: boolean = true;

  currentUser: any; 
  calendars: any;
  services: any;
  clients: any;
  selectedService: string;
  selectedCalender: string;
  selectedClient: string;
  appointments: any;
  busyshow: boolean = true;
  openingHours: any;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
  dayString; string;
  dayStart: string;
  dayEnd: string;
  clickedDate: Date;
  eventEditTitle: string = '';
  currentlang: string;
  public loading: boolean; 
  language;
  options = {
      position:["top", "right"],
      timeOut:3000,
      lastOnBottom: true,
      clickToClose: true,
      animation: 'scale',
      showProgressBar: false,
      maxLength: 100
    }

  constructor(private modal: NgbModal, 
              private calendarService: CalendarService, 
              private servicesService: ServicesService,
              private clientService: ClientsService,
              private appointmentService: AppointmentService,
              private openingHoursService: OpeningHoursService,
              private completerService: CompleterService,
              private slimLoader: SlimLoadingBarService,
              private zone: NgZone,
              private translate: AppTranslationModule,
              private router: Router,
              private _service: NotificationsService,
              private _langService: LanguageService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     
    this.startHour = '9';
    this.startMinute = '30';
    this.endHour = '17';
    this.endMinute = '30';

    this.currentlang = localStorage.getItem('lang');
    this.translate.setDefaultLang(localStorage.getItem('lang'));
    if(localStorage.getItem('lang')=='de'){
        this._langService.getDEJSON().then(data => {
        console.log("12345678", data);  
        this.language=data;
      })
    } else {
      this._langService.getENJSON().then(data => {
        console.log("12345678", data);  
        this.language=data;
      })
    }


  }

   hotkeys(event){
     // event.key
     // selectedService

     for(var i=0; i< this.services.length; i++){
       if(this.services[i].shortKey.toString().toLocaleLowerCase()==event.key) {
         this.selectedService = this.services[i]._id;
       }
     }

     if(event.keyCode==37) {
       // navigating to previous
       document.getElementById("prevNavMove").click();
     }

     if(event.keyCode==39) {
       // navigating to next
       document.getElementById("nextNavMove").click();
     }

     if(event.keyCode==38) {
       var curindex = this.getServiceIndex(this.selectedService);

       if(typeof this.services[(curindex - 1)]!='undefined') {
         this.selectedService = this.services[(curindex - 1)]._id;
       } else {
         this.selectedService = "";
       }

       event.preventDefault();
     }

     if(event.keyCode==40) {
       var curindex = this.getServiceIndex(this.selectedService);

       if(typeof this.services[(curindex + 1)]!='undefined') {
         this.selectedService = this.services[(curindex + 1)]._id;
       }

       event.preventDefault();
     }

   }

  getServiceIndex(service) {
    var index = 0;
    for(var i=0; i< this.services.length; i++){
       if(this.services[i]._id==service) {
         index = i;
       }
     }

     return index;
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {


    this.clickedDate = date;
    if(localStorage.getItem('lang')==="en"){
      this.eventEditTitle = "Edit Event";
    } else {
      this.eventEditTitle = "Termin Bearbeiten";
    }

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;

      } else {
        this.viewDate = date;
      }

      //forcefull changes
      this.tempviewDate = date;

    }

    this.tempEvents = [];

    for(var i=0; i< this.events.length; i++){
      if(isSameMonth(date, this.events[i].start) && isSameDay(date, this.events[i].start)) {
         
         this.tempEvents.push(this.events[i]);
      }
    }

    this.refresh.next();

    console.log(this.viewDate);
  }

  ngOnInit() {
    if(this.currentUser==null || this.currentUser.user.role !== "company" || this.currentUser.user.active!== true){
        this.router.navigate(['']);
      }
    this.initial();
  }

  initial() {
    this.loading = true;
    this.clickedDate = new Date();

    this.calendarService.getStatusCalendars(this.currentUser.user.companyID).then((data) => {
        this.calendars = data;
        this.servicesService.getStatusServices(this.currentUser.user.companyID).then((data) => {
          this.services = data;
          this.clientService.getAllClients().then((data) => {
            this.clients = data;
            this.openingHoursService.getOpeningHourse(this.currentUser.user.companyID)
              .then((data) => {
                this.openingHours = data;
                this.loading = false;
              // console.log(this.openingHours);
              this.appointmentService.getAppointments(this.currentUser.user.companyID)
                .then((data) => {
                  
                    this.appointments = data;
                    this.analyAppointment(this.appointments);
                    // console.log(this.appointments);
                   
                });
              });
          });
       });
      });

      this.slimLoader.start();
  }

  analyAppointment(appointment) {

    this.tempEvents = [];
    this.events = [];
    if(appointment.length==0) return;
    for(var i=0; i< appointment.length; i++){
      let t = "Calendar:";
      for(var j=0; j < this.calendars.length; j++)
      {
        if (this.calendars[j]._id == appointment[i].calendarID)
        {
          t += this.calendars[j].description+"<br>";
        }
      }
      for (var j=0; j < this.services.length; j++)
      {
        if(this.services[j]._id == appointment[i].serviceID)
        {
          t += "Service:"+this.services[j].description+"<br>";
        }
      }
      for (var j=0; j < this.clients.length; j++) {
        if(this.clients[j]._id == appointment[i].clientID)
        {
          t += "Client:"+this.clients[j].firstName+" "+this.clients[j].lastName;
        }
      }

      if(appointment[i].type == "Busy"){
        t="Busy";
      }

      let result = this.clients.filter(function( obj ) {
        return obj._id === appointment[i].clientID;
      });

      if(result.length==0) {
        var c_email = '';
        var c_id = '';
      } else {
        c_email = result[0].email;
        c_id = result[0]._id;
      }

      this.events.push({
        _id: appointment[i]._id,
        selectedCalender: appointment[i].calendarID,
        selectedClientEmail: c_email,
        selectedClient: c_id,
        selectedService: appointment[i].serviceID,
        title: t,
        start: new Date(appointment[i].start),
        end: new Date(appointment[i].end),
        color: colors.red,
        draggable: false,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        }
      });

    }

    this.refresh.next();
  }


  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event): void {
    // this.modalData = {event, action};
    // this.modal.open(this.modalContent, {size: 'lg'});
    this.tempEvents = [];

    console.log(action);
    console.log(event);


    this.selectedCalender = event.selectedCalender;
    this.selectedService = event.selectedService;
    if(action !== 'Clicked')
    {
      this.saveAppointment(event);
    }
    this.tempEvents.push(event);

  }

  addBusyTime() {

    let calendarName;

    for(var i=0; i< this.calendars.length; i++){
      if(this.selectedCalender == this.calendars[i]._id){
        calendarName = this.calendars[i].description;
      }
    }
    
    if(calendarName === undefined) {
      this.showErrorToast(this.language.message.info, this.language.message.selectcalendar);
      return;
    } else {

      if(localStorage.getItem('lang')==="en"){
        this.eventEditTitle = "Add Busy Time (Calendar: "+calendarName+")";
      } else {
        this.eventEditTitle = "Belegtzeit hinzufügen (Kalendar: "+calendarName+")";
      }
    
      this.tempEvents = [];

      this.tempEvents.push({
        title: 'Busy',
        start: startOfDay(this.clickedDate),
        end: endOfDay(this.clickedDate),
        color: colors.red,
        draggable: false,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        }
      });

    }

  }

  selectClient() {
    const activeModal = this.modal.open(SelectClientComponent, { size: 'lg' });
    activeModal.componentInstance.modalHeader = 'Select Client';
    activeModal.componentInstance.modalType = 'add';
    activeModal.componentInstance.modalData = {};
    activeModal.result.then((result) => {
      
      if ( result.length > 0 ) {
        this.zone.run(() => {
          this.tempEvents[0].selectedClientEmail = result[0].email;
          this.tempEvents[0].selectedClient = result[0]._id;
        });
        this.refresh.next();
      }
        
    })
     .catch(() => {});
  }

  addEvent(): void {
    let calendarName;
    let serviceName;
    let serviceDuration;
    let servicePrice;
    for(var i=0; i< this.calendars.length; i++){
      if(this.selectedCalender == this.calendars[i]._id){
        calendarName = this.calendars[i].description;
      }
    }
    for(var i=0; i< this.services.length; i++){
      if(this.selectedService == this.services[i]._id){
        serviceName = this.services[i].description;
        serviceDuration = this.services[i].duration;
        servicePrice =  this.services[i].price;
      }
    }
    if(calendarName === undefined) {
      this.showErrorToast(this.language.message.info, this.language.message.selectcalendar);
      return;
    } else if(serviceName === undefined){
      this.showErrorToast(this.language.message.info, this.language.message.selectservice);
      return;
    } else {

      // changing to day view with selected day
      this.daySelected();

      if(localStorage.getItem('lang')==="en"){
        this.eventEditTitle = "Add New Appointment (Calendar: "+calendarName+
                            ", Service:"+serviceName+
                            ", Price:"+servicePrice+
                            ", Duration:"+serviceDuration+
                            ")";
      } else {
        this.eventEditTitle = "Termin erstellen(Kalendar: "+calendarName+
                            ", Service(DE): "+serviceName+
                            ", Preis: "+servicePrice+
                            ", Dauer: "+serviceDuration+
                            ")";
      }

      this.tempEvents = [];

      this.tempEvents.push({
        title: 'New Appointment',
        start: startOfDay(this.clickedDate),
        end: endOfDay(this.clickedDate),
        selectedClientEmail : this.language.appointment.selectclient,
        selectedClient : this.language.appointment.selectclient,
        color: colors.blue,
        draggable: false,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        }
      });
      
    }


  }

  saveAppointment(e): void {
      let saveData = new Appointment();
      let clientID: any;
      
      if(e.selectedClient === this.language.appointment.selectclient) {
        this.showErrorToast(this.language.message.info, this.language.message.selectclient); return;
      }
      let result = this.clients.filter(function( obj ) {
          return obj.email === e.selectedClient;
        });
        console.log(result);
      if ( result.length === 0 ) {
        clientID = e.selectedClient;
      } else {
        clientID = result[0]._id;
      }
      console.log(clientID);
      if(e.title == 'Busy'){
        saveData.companyID = this.currentUser.user.companyID;
        saveData.calendarID = this.selectedCalender;
        // saveData.serviceID = "";
        // saveData.clientID = "";
        saveData.start = e.start;
        saveData.end = e.end;
        saveData.type = "Busy";
      } else {
        saveData.companyID = this.currentUser.user.companyID;
        saveData.calendarID = this.selectedCalender;
        saveData.serviceID = this.selectedService;
        saveData.clientID = clientID;
        saveData.start = e.start;
        saveData.end = e.end;
        saveData.type = "Appointment";
      }
      if (e._id === undefined) {
          this.appointmentService.create(saveData).then(appointment => {
            this.initial();
            this.refresh.next();
            this.showSuccessToast(this.language.message.success, this.language.message.appointmentcreated);
        });
      } else {
        this.appointmentService.update(saveData, e._id, this.currentUser.user.companyID).then(appointment => {
          this.initial();
          this.refresh.next();
          this.showSuccessToast(this.language.message.success, this.language.message.appointmentupdated);
        });
      }
  }

  deleteAppointment(e, index): void {
     if (window.confirm(this.language.message.deleteconfirm)) {
        this.appointmentService.delete(e._id, this.currentUser.user.companyID);
        if(index>-1){
          for(var i=0; i<this.events.length; i++){
            if(this.events[i]._id === e._id){
              this.events.splice(i, 1)
            }
          }
          this.tempEvents.splice(index, 1);
          
          this.refresh.next();
          this.showSuccessToast(this.language.message.success, this.language.message.appointmentremoved);
        }
     } 
     
  }

  onChangeCalender(calender) {
    this.selectedCalender = calender;
    this.tempEvents = [];
    console.log(this.viewDate);
    console.log(this.view);

    for(var i=0; i<this.events.length; i++){
      // if ( this.selectedService === undefined ) {
        if ( this.view === 'month') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                isSameMonth(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'week') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                isSameWeek(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'day') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                isSameDay(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
 
    }

    this.refresh.next();
  }

  onChangeService(service) {
    this.selectedService = service;
    this.refresh.next();
  }

  eventDropped($event, segment) {
    console.log("Dropped In Segment");
    console.log($event);
    console.log(segment);
  }

  showBusy(e) {
    if ( e.target.checked ) {
      this.busyshow = true;
      this.selectedService = undefined;
      this.refresh.next();
    } 
    else {
      this.busyshow = false;
    }
  }

  daySelected() {
    this.view = 'day';

    this.viewDate = this.tempviewDate;

    this.setStartEndHour();
    this.refreshGetEvents();
  }

  weekSelected() {
    this.view = 'week';
    this.refreshGetEvents();
  }

  monthSelected() {
    this.view = 'month';
    this.refreshGetEvents();
  }
  nextDayClicked() {
    this.setStartEndHour();
    this.refreshGetEvents();


  }
  prevDayClicked() {
    this.setStartEndHour();
    this.refreshGetEvents();
  }
  toDayClicked() {
    this.setStartEndHour();
    this.refreshGetEvents();
  }
  setStartEndHour() {

    switch (this.viewDate.getDay().toString()) {
      case '0': 
          this.dayStart = this.openingHours['sunfrom'];
          this.dayEnd = this.openingHours['sunto']; 
        break;
      case '1': 
          this.dayStart = this.openingHours['monfrom'];
          this.dayEnd = this.openingHours['monto'];
        break;
      case '2': 
          this.dayStart = this.openingHours['tuefrom'];
          this.dayEnd = this.openingHours['tueto'];
        break;
      case '3':
          this.dayStart = this.openingHours['wedfrom'];
          this.dayEnd = this.openingHours['wedto'];
        break;
      case '4':
          this.dayStart = this.openingHours['thufrom'];
          this.dayEnd = this.openingHours['thuto'];
        break;
      case '5':   
          this.dayStart = this.openingHours['frifrom'];
          this.dayEnd = this.openingHours['frito'];
        break;
      case '6': 
          this.dayStart = this.openingHours['satfrom'];
          this.dayEnd = this.openingHours['satto'];
        break;
    }
    this.startHour = this.dayStart.split(":")[0];
    this.startMinute = this.dayStart.split(":")[1];
    this.endHour = this.dayEnd.split(":")[0];
    this.endMinute = this.dayEnd.split(":")[1];
  }

  refreshGetEvents() {
    this.tempEvents = [];
    for(var i=0; i<this.events.length; i++){
      if ( this.selectedCalender === undefined ) {
        if ( this.view === 'month') {
          if ( this.selectedService === this.events[i].selectedService && 
                isSameMonth(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'week') {
          if ( this.selectedService === this.events[i].selectedService && 
                isSameWeek(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'day') {
          if ( this.selectedService === this.events[i].selectedService && 
                isSameDay(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
      } else if ( this.selectedService === undefined ) {
        if ( this.view === 'month') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                isSameMonth(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'week') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                isSameWeek(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'day') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                isSameDay(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
        }
      } else {
        if ( this.view === 'month') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                this.selectedService === this.events[i].selectedService &&
                isSameMonth(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                this.events[i].title === 'Busy' &&
                isSameMonth(this.viewDate, this.events[i].start) ) {
             this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'week') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                this.selectedService === this.events[i].selectedService &&
                isSameWeek(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                this.events[i].title === 'Busy' &&
                isSameWeek(this.viewDate, this.events[i].start) ) {
             this.tempEvents.push(this.events[i]);
          }
        }
        if ( this.view === 'day') {
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                this.selectedService === this.events[i].selectedService &&
                isSameDay(this.viewDate, this.events[i].start) ) {
            this.tempEvents.push(this.events[i]);
          }
          if ( this.selectedCalender === this.events[i].selectedCalender && 
                this.events[i].title === 'Busy' &&
                isSameDay(this.viewDate, this.events[i].start) ) {
             this.tempEvents.push(this.events[i]);
          }
        }
      }
    }
    this.refresh.next();
  }

  ngOnDestroy() {
  }

  showSuccessToast(title, content){
    this._service.success(
      title,
      content,
      this.options
    )
  }

  showErrorToast(title, content){
    this._service.info(
      title,
      content,
      this.options
    )
  }

  startDateChange(event,startDate){

    //var enddate =  moment(startDate).add(2, 'hours');

    


    this.zone.run(() => {


      // event.end = event.start;

      var _THIS = this;
      // _THIS.calculateEndDateTime(event);
      
      // this.refresh.next();

      var serviceTemp = null;
      for(var i=0; i< this.services.length; i++){
        if(this.selectedService == this.services[i]._id){
          serviceTemp = this.services[i];
        }
      }

      var enddate = moment(this.tempEvents[0].start).add(serviceTemp.duration, 'minutes').toDate();

      console.log(this.tempEvents[0].start)
      console.log(serviceTemp.duration)
      console.log(enddate)

      this.tempEvents[0].end = enddate;

    });

    // this.refresh.next();
  }

  handleHourClicked(event,event2) {
    console.log("Clicked on hour")
    if(this.tempEvents.length > 0) {
      this.tempEvents[0].start = event.date;
      this.startDateChange(this.tempEvents[0], null);
      // this.refresh.next();
    }
  }

  calculateEndDateTime(event) {

    var serviceTemp = null;
    for(var i=0; i< this.services.length; i++){
      if(this.selectedService == this.services[i]._id){
        serviceTemp = this.services[i];
      }
    }

    var enddate = moment(this.tempEvents[0].start).add(serviceTemp.duration, 'minutes').toDate();

    console.log(event.start)
    console.log(serviceTemp.duration)
    console.log(enddate)

    this.tempEvents[0].end = enddate;

    // this.tempEvents[0] = event;

    this.refresh.next();

  }

  endDateChange(event,startDate){
    console.log("asf404ru3w4tyqwhyasdfahjlksdfna")
  }

}