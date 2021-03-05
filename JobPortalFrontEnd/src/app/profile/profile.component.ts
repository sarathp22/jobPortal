import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData;
  userId;
  profilePic;
  resumeFile;
  x=0;
  y=0;
  constructor(private _jobseeker:JobseekerService) { }

  ngOnInit(): void {
    this.userId=JSON.parse(localStorage.getItem('jobPortal')).id;
    this._jobseeker.getUserData(this.userId).subscribe(data=>{this.userData=data;console.log(this.userData)},err=>{console.log(err)});
  }
  profilePicChange(event)
  {
    console.log(event.target.files[0]);
    this.profilePic = <File> event.target.files[0];
    const fd = new FormData();
    fd.append('profilePic',this.profilePic,this.profilePic.name);
    console.log(fd);
    this._jobseeker.uploadprofileImage(this.userId,fd).subscribe(data=>{this.userData=data},err=>{console.log(err)})
  }
  resumeUpload(event)
  {
    this.resumeFile = <File> event.target.files[0];
    const fd1 = new FormData();
    fd1.append('resume',this.resumeFile,this.resumeFile.name);
    this._jobseeker.uploadResume(this.userId,fd1).subscribe(data=>{this.userData=data},err=>{console.log(err)})

  }
  addQual()
  {
    
    console.log("ok");
    let row = document.createElement('div');   
      row.className = 'row'; 
      // row.innerHTML = ` 
      // <br> 
      // <input type="text" id="tst${this.x}" class="m-3">`;
      row.innerHTML = ` 
      <div class="col-md-1">             
      </div>
      <div class="col-md-5 my-3">
          <select name="" id="qual${this.x}" class="test form-control" required>
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
      <div class="col-md-4 my-3">
        
          <select name="" id="uni${this.x}" class="form-control" required>
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
         
          <input type="number" name="mark" id="mark${this.x}" class="form-control" required>
      </div>`
      this.x++; 
      document.querySelector('.showInputQual').appendChild(row);
  }
  addWork()
  {
    
    let row = document.createElement('div');   
      row.className = 'row'; 
      row.innerHTML = `<div class=" col-md-4 my-3">
          
         <input type="text" name="cName" id="cName${this.y}" class="form-control" required/>
      </div>
      <div class=" col-md-4 my-3">
          
          <input type="text" name="jRole" id="jRole${this.y}" class="form-control" required/>
      </div>
      <div class=" col-md-2 my-3">
          
          <input type="date" name="from" id="from${this.y}"  class="form-control" required/>
      </div>
      <div class=" col-md-2 my-3">
         
          <input type="date" name="to" id="to${this.y}"  class="form-control" required/>
      </div>
                      `;
      this.y++; 
      document.querySelector('.showInputWork').appendChild(row);
  }
  update()
  {
    var qualification=[];
    var workExp=[];
    var qual = this.userData.qualification;
    
    for(var i=0;i<qual.length;i++)
    {
      qualification.push(qual[i])
    }
    if(this.x !=0)
    {
      for(var i=0;i<this.x;i++)
    {
      var tempQual=(document.getElementById('qual'+i) as HTMLInputElement).value;
      var tempUni=(document.getElementById('uni'+i) as HTMLInputElement).value;
      var tempMark=(document.getElementById('mark'+i) as HTMLInputElement).value;
      var obj = {qualification:tempQual,university:tempUni,marks:tempMark};
      qualification.push(obj);
      // statusTemp.push(false);
    }

    }
    
    console.log(qualification);
    var work = this.userData.workExperience;
    for(var i=0;i<work.length;i++)
    {
      workExp.push(work[i])
    }

    if(this.y !=0)
    {
      console.log(this.y);
      for(var i=0;i<this.y;i++)
      {
       var cName=(document.getElementById('cName'+i) as HTMLInputElement).value;
       var jRole=(document.getElementById('jRole'+i) as HTMLInputElement).value;
       var from=(document.getElementById('from'+i) as HTMLInputElement).value;
       var to=(document.getElementById('to'+i) as HTMLInputElement).value;
        var obj2 = {companyName:cName,role:jRole,from:from,to:to};
        workExp.push(obj2);
      }
    }

    console.log(workExp);
    this.userData.qualification=qualification;
    this.userData.workExperience=workExp;

    // this._jobseeker.profileUpdate(this.userId,this.userData).subscribe((data)=>{this.userData=data},(err)=>{console.log(err)})
  
  }
  logout()
  {
    this._jobseeker.logOut();
  }

}
