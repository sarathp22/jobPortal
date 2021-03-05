import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-profile-complete1',
  templateUrl: './profile-complete1.component.html',
  styleUrls: ['./profile-complete1.component.css']
})
export class ProfileComplete1Component implements OnInit {
  userId;
  userData:any
  profilePic;
  resumeFile;
  tempData;
  x=1;
  y;
  tempObj={qualification:'',university:'',marks:''};
  qual;
  uni;
  marks;
  row;
  constructor(private _jobSeeker:JobseekerService, private _route:Router) { }

  ngOnInit(): void {
    
    this.userId=JSON.parse(localStorage.getItem('jobPortal')).id;
    this._jobSeeker.getUserData(this.userId).subscribe(data=>{this.tempData=data;this.check(data);this.userData=data;console.log(this.userData);this.xValue()},err=>{console.log(err)});
  
  }

  

  update1()
  {
    // const fd = new FormData();
    // fd.append('profilePic',this.profilePic,this.profilePic.name);
    // console.log(fd);
    // console.log("Hai");
    console.log(this.x);
    var tempQual;
    var tempUni;
    var tempMark;
    
    var data=[]
    // var tempObj = {qualification:this.qual,university:this.uni,marks:this.marks};
    // data.push(this.tempObj);
    // console.log(data);

    // if((document.getElementById('qual'+1) as HTMLInputElement) != null)
    
    if(this.userData.qualification.length != 0)
      {
        // this.y = this.userData.qualification.length;
        // this.x=this.x+this.y;
     
    if(this.x>=1)
    {
      
       for(var i=0;i<=this.x-1;i++)
      {
        tempQual=(document.getElementById('qual'+i) as HTMLInputElement).value;
        tempUni=(document.getElementById('uni'+i) as HTMLInputElement).value;
        tempMark=(document.getElementById('mark'+i) as HTMLInputElement).value;
        var obj = {qualification:tempQual,university:tempUni,marks:tempMark};
        data.push(obj);
        // statusTemp.push(false);
        console.log(data);
      }
    }
    else
    {
      tempQual=(document.getElementById('qual'+0) as HTMLInputElement).value;
        tempUni=(document.getElementById('uni'+0) as HTMLInputElement).value;
        tempMark=(document.getElementById('mark'+0) as HTMLInputElement).value;
        var obj = {qualification:tempQual,university:tempUni,marks:tempMark};
        data.push(obj);
        // statusTemp.push(false);
        console.log(data);
    }


  }
  else{
    for(var i=0;i<=this.x-1;i++)
    {
      tempQual=(document.getElementById('qual'+i) as HTMLInputElement).value;
      tempUni=(document.getElementById('uni'+i) as HTMLInputElement).value;
      tempMark=(document.getElementById('mark'+i) as HTMLInputElement).value;
      var obj = {qualification:tempQual,university:tempUni,marks:tempMark};
      data.push(obj);
      // statusTemp.push(false);
      console.log(data);
    }
  }
    

    this.userData.qualification = data;
    console.log(this.userData);

    this._jobSeeker.updateUserData(this.userId,this.userData).subscribe(data=>{console.log(data);this._route.navigate(['profile/complete2'])},err=>{console.log(err)})

  }

  profilePicChange(event)
  {
    // console.log(data);
    console.log(event.target.files[0]);
    this.profilePic = <File> event.target.files[0];
    const fd = new FormData();
    fd.append('profilePic',this.profilePic,this.profilePic.name);
    console.log(fd);
    this._jobSeeker.uploadprofileImage(this.userId,fd).subscribe(data=>{},err=>{console.log(err)})
  }
  check(data)
  {
    console.log(data);
    if(data.completed == true)
    {
      this._route.navigate(['/jobseeker/profile']);
    }
  }

  resumeUpload(event)
  {
    this.resumeFile = <File> event.target.files[0];
    const fd1 = new FormData();
    fd1.append('resume',this.resumeFile,this.resumeFile.name);
    this._jobSeeker.uploadResume(this.userId,fd1).subscribe(data=>{},err=>{console.log(err)})

  }
   add()
  {
    
    console.log("ok");
    let row = document.createElement('div');   
      row.className = 'row'; 
      // row.innerHTML = ` 
      // <br> 
      // <input type="text" id="tst${this.x}" class="m-3">`;
      row.innerHTML = ` 
      <div class="col-md-5 my-3">
          <select name="" id="qual${this.x}" class="test form-control">
          <option value="">Select</option>
          <option value="SSLC">SSLC</option>
          <option value="PLUS TWO">PLUS TWO</option>
          <option value="Diploma">Diploma</option>
          <option value="B Tech">B Tech</option>
          <option value="B Com">B Com</option>
          <option value="BA">BA</option>
          <option value="BCA">BCA</option>
          <option value="B eD">B ed</option>
          <option value="B Com">M Com</option>
          <option value="BCA">MCA</option>
          <option value="M Tech">M Tech</option>
          <option value="M eD">M ed</option>
          <option value="M Tech">PHD</option>
          </select>
      </div>
      <div class="col-md-5 my-3">
        
          <select name="" id="uni${this.x}" class="form-control">
              <option value="">Select University</option>
              <option value="">Select University</option>
              <option value="Amrita Vishwa Vidyapeetham">Amrita Vishwa Vidyapeetham</option>
              <option value="Anna University">Anna University</option>
              <option value="APJ Abdul Kalam Technological University">APJ Abdul Kalam Technological University</option>
              <option value="Avinashilingam University">Avinashilingam University</option>
              <option value="Azim Premji University">Azim Premji University</option>
              <option value="B.S. Abdur Rahman Crescent Institute of Science and Technology">B.S. Abdur Rahman Crescent Institute of Science and Technology</option>
              <option value="Bangalore University">Bangalore University</option>
              <option value="Bharath Institute of Higher Education and Research">Bharath Institute of Higher Education and Research</option>
              <option value="Bharathiar University">Bharathiar University</option>
              <option value="Central University of Kerala">Central University of Kerala</option>
              <option value="CMR University">CMR University</option>
              <option value="Cochin University of Science and Technology">Cochin University of Science and Technology</option>
              <option value="	Dr. M.G.R. Educational and Research Institute">	Dr. M.G.R. Educational and Research Institute</option>
              <option value="Hindustan Institute of Technology and Science">Hindustan Institute of Technology and Science</option>
              <option value="Indian Institute of Information Technology, Kottayam">Indian Institute of Information Technology, Kottayam</option>
              <option value="Indian Institute of Science">Indian Institute of Science</option>
              <option value="Indian Institute of Science Education and Research, Thiruvananthapuram">Indian Institute of Science Education and Research, Thiruvananthapuram</option>
              <option value="Indian Institute of Space Science and Technology">Indian Institute of Space Science and Technology</option>
              <option value="Indian Institute of Technology Madras">Indian Institute of Technology Madras</option>
              <option value="Indian Maritime University">Indian Maritime University</option>
              <option value="International Institute of Information Technology Bangalore">International Institute of Information Technology Bangalore</option>
              <option value="International Institute of Information Technology, Hyderabad">International Institute of Information Technology, Hyderabad</option>
              <option value="Jain University">Jain University</option>
              <option value="Jawaharlal Institute of Postgraduate Medical Education and Research">Jawaharlal Institute of Postgraduate Medical Education and Research</option>
              <option value="Jawaharlal Nehru Centre for Advanced Scientific Research">Jawaharlal Nehru Centre for Advanced Scientific Research</option>
              <option value="Kannur University">Kannur University</option>
              <option value="Karnatak University">Karnatak University</option>
              <option value="Karnataka State Women's University">Karnataka State Women's University</option>
              <option value="Karpagam Academy of Higher Education">Karpagam Academy of Higher Education</option>
              <option value="Karunya Institute of Technology and Sciences">Karunya Institute of Technology and Sciences</option>
              <option value="Kerala Agricultural University">Kerala Agricultural University</option>
              <option value="Kerala University of Health Sciences">Kerala University of Health Sciences</option>
              <option value="Kerala Veterinary and Animal Sciences University">Kerala Veterinary and Animal Sciences University</option>
              <option value="Mangalore University">Mangalore University</option>
              <option value="Manipal Academy of Higher Education">Manipal Academy of Higher Education</option>
              <option value="Manipur Technical University">Manipur Technical University</option>
              <option value="Meenakshi Academy of Higher Education and Research">Meenakshi Academy of Higher Education and Research</option>
              <option value="National Institute of Technology, Calicut">National Institute of Technology, Calicut</option>
              <option value="National Institute of Technology, Karnataka">National Institute of Technology, Karnataka</option>
              <option value="NITTE University">NITTE University</option>
              <option value="Other">Other</option>
              <option value="Pondicherry University">Pondicherry University</option>
              <option value="Rajiv Gandhi University of Health Sciences">Rajiv Gandhi University of Health Sciences</option>
              <option value="Rajiv Gandhi University of Knowledge Technologies">Rajiv Gandhi University of Knowledge Technologies</option>
              <option value="Ramaiah University of Applied Sciences">Ramaiah University of Applied Sciences</option>
              <option value="REVA University">REVA University</option>
              <option value="Sathyabama Institute of Science and Technology">Sathyabama Institute of Science and Technology</option>
              <option value="Saveetha Institute of Medical and Technical Sciences">Saveetha Institute of Medical and Technical Sciences</option>
              <option value="Sri Ramachandra Institute of Higher Education and Research">Sri Ramachandra Institute of Higher Education and Research</option>
              <option value="Srinivas University">Srinivas University</option>
              <option value="SRM Institute of Science and Technology">SRM Institute of Science and Technology</option>
              <option value="Tamil Nadu Dr. M.G.R.Medical University">Tamil Nadu Dr. M.G.R.Medical University</option>
              <option value="University of Madras">University of Madras</option>
              <option value="University of Mysore">University of Mysore</option>
              <option value="University of Trans-Disciplinary Health Sciences and Technology">University of Trans-Disciplinary Health Sciences and Technology</option>
              <option value="Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology">Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology</option>
              <option value="Vels University">Vels University</option>
              <option value="Vishwakarma University">Vishwakarma University</option>
          </select>
      </div>
      <div class="col-md-2 my-3">
         
          <input type="number" name="mark" id="mark${this.x}" class="form-control">
      </div>`
      this.x++; 
      document.querySelector('.showInputField').appendChild(row);
  }
  delete()
  {
     
    console.log(document.querySelectorAll('.test'));
  }

  xValue(){
    if(this.userData.qualification.length != 0)
    {
      this.x = this.userData.qualification.length;
      
    }
  }


}
