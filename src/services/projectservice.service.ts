import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiHeaders } from '../libs/apiheaders';
import { environment } from '../environments/environment';
import { Project, Projects } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }

  public list(search = ''): Observable<Projects> {
    const headers = new ApiHeaders();
    headers.set(true);
    const params: any = {
      filter: search
    };
    const queryParams: HttpParamsOptions = { fromObject: params };
    return this.http.get<Projects>(environment.apiUri + '/' + 'projects/',
      { headers: headers.get(), params: new HttpParams(queryParams)} );
  }

  public get(id = ''): Observable<Project> {
    const headers = new ApiHeaders();
    headers.set(true);
    return this.http.get<Project>(environment.apiUri + '/' + 'projects/' + id,
      { headers: headers.get() } );
  }

}
