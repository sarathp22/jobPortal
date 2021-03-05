import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-complete2',
  templateUrl: './profile-complete2.component.html',
  styleUrls: ['./profile-complete2.component.css']
})
export class ProfileComplete2Component implements OnInit {
  skill;
  userData;
  userId;
  tempData;
  dataNew;
  skilltemp = null;
  skills=["Php","Java","Javascript","Html","Css"];
  skillsData;
  x=1;
  constructor(private _jobSeeker:JobseekerService,private _route:Router) { }

  ngOnInit(): void {
    this.userId=JSON.parse(localStorage.getItem('jobPortal')).id;
    this._jobSeeker.getUserData(this.userId).subscribe(data=>{this.userData=data;console.log(this.userData);this.xValue()},err=>{console.log(err)})
    // let row = document.createElement('div');   
    //   row.className = 'row'; 
    //   row.innerHTML = ` 
    //   <br> 
    //   <input type="text" id="tst1" class="m-3">`; 
    //   document.querySelector('.showInputField').appendChild(row);

    
  }
  dataSend(event)
  {
    console.log(event);
  }
  
  search(event)
  {
    // console.log(data.target.value);
    // this.skilltemp = data.target.value;
    var len=event.target.value.length;
    var data=event.target.value.toUpperCase(); 
    
    this.dataNew=this.skills.filter(i=>i.slice(0,len).toUpperCase()==data);
    console.log(this.dataNew);
    if(len==0)
    {
      this.dataNew=[];
    }
  }
  
  



  update2()
  {
    // var temp = {skills:JSON.stringify(this.skillsData)};
    // this.userData.skills = temp;
    var cName;
    var jRole;
    var from;
    var to;
    var data=[];

    if(this.userData.workExperience.length != 0)
      {
        // this.x = this.userData.workExperience.length;
     
    if(this.x>=1)
    {
      
       for(var i=0;i<=this.x-1;i++)
      {
        cName=(document.getElementById('cName'+i) as HTMLInputElement).value;
        jRole=(document.getElementById('jRole'+i) as HTMLInputElement).value;
        from=(document.getElementById('from'+i) as HTMLInputElement).value;
        to=(document.getElementById('to'+i) as HTMLInputElement).value;
        var obj = {companyName:cName,role:jRole,from:from,to:to};
        data.push(obj);
        // statusTemp.push(false);
        // console.log(data);
      }
    }
    else
    {
      cName=(document.getElementById('cName'+0) as HTMLInputElement).value;
        jRole=(document.getElementById('jRole'+0) as HTMLInputElement).value;
        from=(document.getElementById('from'+0) as HTMLInputElement).value;
        to=(document.getElementById('to'+0) as HTMLInputElement).value;
        var obj = {companyName:cName,role:jRole,from:from,to:to};
        data.push(obj);
        // statusTemp.push(false);
        console.log(data);
    }


  }
  else{

    for(var i=0;i<=this.x-1;i++)
      {
        cName=(document.getElementById('cName'+i) as HTMLInputElement).value;
        jRole=(document.getElementById('jRole'+i) as HTMLInputElement).value;
        from=(document.getElementById('from'+i) as HTMLInputElement).value;
        to=(document.getElementById('to'+i) as HTMLInputElement).value;
        var obj = {companyName:cName,role:jRole,from:from,to:to};
        data.push(obj);
        // statusTemp.push(false);
        // console.log(data);
      }
    
  }
  this.userData.workExperience = data;
    console.log("data",this.userData);
    this._jobSeeker.updateUserData2(this.userId,this.userData).subscribe(data=>{this.userData= data;this._route.navigate(['/jobseeker/profile'])},err=>{console.log(err)})
    // window.location.reload();
  }

  // addTask()
  // {

  //     console.log(this.x);
  //     this.tasks.from=this.fromUser;
  //     var temp;
  //     var dataTasks=[];
  //     var statusTemp=[];
  //    for(var i=1;i<=this.x-1;i++)
  //     {
  //       temp=(document.getElementById('tst'+i) as HTMLInputElement).value
  //       dataTasks.push(temp);
  //       statusTemp.push(false);
  //     }
      
  //     console.log(dataTasks);
  //     this.tasks.task=dataTasks;
  //     this.tasks.status=statusTemp;
  //     console.log(this.tasks);
  //     this._task.taskInsert(this.tasks).subscribe(data =>{
  //     console.log(data)},
  //     err=>{
  //       console.log(err.error.error);
        
  //       this.errData=err.error.error}
  //     )
  //     // this._router.navigate(['/']);
      
  //     window.location.reload();
      
  // }

  add()
  {
    
    let row = document.createElement('div');   
      row.className = 'row'; 
      row.innerHTML = ` 
      <div class=" col-md-3 my-3">
          
         <input type="text" name="cName" id="cName${this.x}" class="form-control" >
      </div>
      <div class=" col-md-3 my-3">
          
          <input type="text" name="jRole" id="jRole${this.x}" class="form-control">
      </div>
      <div class=" col-md-3 my-3">
          
          <input type="date" name="from" id="from${this.x}" class="form-control">
      </div>
      <div class=" col-md-3 my-3">
         
          <input type="date" name="to" id="to${this.x}" class="form-control">
      </div>
                      `;
      this.x++; 
      document.querySelector('.showInputField').appendChild(row);
  }
  xValue(){
    if(this.userData.workExperience.length != 0)
    {
      this.x = this.userData.workExperience.length;
      
    }
  }

}
