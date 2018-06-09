/**Sources for this component:
* - https://angular.io/guide/forms for general form
* - https://material.angular.io/components/select for activity select
* - https://material.angular.io/components/checkbox for check if needs assignee
* - https://github.com/DanielYKPan/date-time-picker for date and time pick
*/

import { Component, OnInit } from '@angular/core';
import {CalEvent} from '../models/event.model';
import { Router ,RouterEvent} from '@angular/router';
import {NgModel} from '@angular/forms';
import {NameSelectService} from '../services/nameSelect/name-select.service';
import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { UserService } from '../services/user/user.service';
import { ActivityTypes } from '../models/activity-types.model'
import { staff } from '../models/staff.model';
import { resident } from '../models/resident.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
// TODO: check required fields
//       try to extract time or date from ISO format in json - use Date function!
export class EventComponent implements OnInit {
  private model: CalEvent ;
  private submitted: boolean;
  private customActivity:string;
  private newEventTypeSubmited:boolean=false;
  user:staff|resident;
  types :ActivityTypes[]=[];
  private newEventIndex = -1;
  /*
  [
    {value: 'general-0', viewValue: 'כללי',color:'green'},
    {value: 'staff-1', viewValue: 'איש צוות',color: 'blue'},
    {value: 'res-2', viewValue: 'דייר', color:'yellow'},
  ];
  */
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
  constructor( private nameSel: NameSelectService, private userService: UserService, public router: Router) {
    this.userService.getEventTypes().then(()=> this.types = this.userService.eventTypes);
    this.submitted = false;
    this.customActivity=null;
    this.model = new CalEvent(
      {date:'',start:'',end:''},
      false, 
      '',
      '',
      '' 
    );
  }
  ngOnInit() {
    this.nameSel.cm.subscribe(user => this.user = user);

  }
  addActivity(val:string,color:string){
    this.newEventIndex = this.types.length;
    this.types.push(new ActivityTypes(val,val,color));
    this.newEventTypeSubmited=true;
    console.log(this.newEventIndex);
  }  
  subEvent() {
    this.submitted = true;/*do something*/
    //alert(this.submitted);
    // console.log(obj);
    //console.log(this.user)
    if (this.newEventTypeSubmited){
      console.log(this.types);
      console.log(this.types.length);

      for (let i=this.newEventIndex; i < this.types.length ; i++){
        console.log[i];
        this.userService.updateEventTypes(this.types[i]);
      }

      //console.log(this.types.values());
     // console.log(this.types.filter(type => this.types[3] != this.types[4]));
//console.log(this.userService.getEventTypes());

     // this.userService.updateEventTypes(this.types[2]);
    }

    this.userService.addEvent(this.user, this.model);
    alert("האירוע נוסף בהצלחה");
    this.router.navigateByUrl('menu');
  }

}