import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AllRestService {
  data :any[]=[
    {}
      ]
      SelectedRest:any={};
  constructor(private http:HttpClient ,private tostar :ToastrService) { }

  getAll(){
    return this.http.get('https://localhost:44388/api/Restaurant')
  }
}
