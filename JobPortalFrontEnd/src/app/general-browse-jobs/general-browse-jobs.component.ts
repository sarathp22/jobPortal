import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-browse-jobs',
  templateUrl: './general-browse-jobs.component.html',
  styleUrls: ['./general-browse-jobs.component.css']
})
export class GeneralBrowseJobsComponent implements OnInit {
jobs;
// userId = JSON.parse(localStorage.getItem('jobPortal')).id;
userDetails;
divToggle=false;
city;
keyWord;
category:string;
  constructor(private _general:GeneralService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((data)=>{this.category=data.get('id');console.log(this.category)});
    
    if(this.category == 'a')
    {
      this._general.getAllJobs().subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
    }
    else{
      if(this.category == 'b' || 'c' || 'd')
      {
        if(this.category == 'b')
        {
          var data={industry:"Sale/Markting"};
          this._general.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
        }
        else if(this.category == 'c')
        {
          var data={industry:"Education/Training"};
          this._general.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
        }
        else if(this.category == 'd')
        {
          var data={industry:"Art/Design"};
          this._general.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
        }
        else{
            if(this.category[0] == '{')
            {
              data=JSON.parse(this.category);
              this._general.cityFilter("abc",data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
            }
            else
            {
              var data={industry:this.category};
              console.log(data);
              this._general.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
            }
          
        }
      }
      
      }
      
  }
  
  cityFilter()
  {
    // console.log(this.city);
    var data={city:this.city,keyWord:this.keyWord};
    this._general.cityFilter("abc",data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
  }
  divCheck()
  {
    if(this.jobs.length == 0)
    {
      this.divToggle = false;
    }
    else
    {
      this.divToggle = true;
    }
  }
}