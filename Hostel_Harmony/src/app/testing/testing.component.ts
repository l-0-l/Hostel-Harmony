import { Component, OnInit } from '@angular/core';
import { test } from '../models/test.model';
import { resident } from '../models/resident.model';
import { staff } from '../models/staff.model';
import { UserService } from '../services/user/user.service';
import { AuthService } from '../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule, Response } from '@angular/http';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent implements OnInit {
  
  constructor(private userService: UserService, private authService: AuthService) {     this.userService.getStaff();this.userService.getEventTypes();}
  bla: test;
  resident: resident;
  staff: staff;
  staffUsers: staff[] = []
  
  staa: staff[] = [];
  ngOnInit() {
    
    this.resident;// = new resident("Rami from test", "Ami2", 542, true, "4/2/3", 2, "Benni", true, false) // According to resident.option #2
    this.staff = new staff("avi from test","ron2",8651, true, "2/4/6", 2, "sadsadsadsa", "supervisor"); // According to staff.option #2
    
    //this.userService.testing.push(this.bla);
    //this.userService.residentsUsers.push(this.resident);
    //this.userService.staffUsers.push(this.staff);
    
    // localStorage.setItem("residentUsers", JSON.stringify(this.userService.residentsUsers));
    
  }
  
  getUserLoggedIn(){
    var answer = this.authService.isLoggedIn;
    alert(answer);
  }
  
  storeAtFirebase(){
    
    this.userService.storeAtFirestorme();
    
  }
  
  getDataFromFirestome(){
    //log(this.userService.getStaffNames());
    // this.userService.getDataFromFirestome();
    //this.userService.getResidents();
    //console.log(this.userService.setMetaData());
    //this.staa =this.userService.getStaff();

    //console.log(this.userService.getStaff());
    //console.log(this.userService.getResidents());
    //console.log("-----");
    // console.log(this.staa);
    // console.log(this.staa[0])
    // console.log(this.staa[0].firstName)
    //console.log(this.userService.check());
   // this.userService.updateListing("52");   
    //this.userService.setMetaData();
    //console.log(this.userService.getStaff());
//this.userService.residentsCollection.doc(JSON.parse(JSON.stringify("zJ0SMqxj43ZaJgz02NPE"))).update(JSON.parse(JSON.stringify(per)));

console.log(this.userService.getEventTypes());
console.log(this.userService.eventTypes);
  }
  
  passTest(){
    
    //this.userService.updateStaff(this.staff);
    
  }
}


