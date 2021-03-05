import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private _http:HttpClient) { }

  cityFilter(userId,data)
  {
    return this._http.put("http://localhost:3000/general/cityFilterData/" + userId,data)
  }
  industryFilter(data)
  {
    return this._http.put("http://localhost:3000/general/indusrtyFilterData/"+"user",data);
  }
  getAllJobs()
  {
    return this._http.get("http://localhost:3000/general/jobs")
  }
  getJobsLimited()
  {
    return this._http.get("http://localhost:3000/general/jobsLimit");
  }
}
