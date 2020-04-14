import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Document } from "src/app/models/document.model"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  apiDocuments = environment.APIEndpoint + "/documento";


   getDocuments(): Observable<Array<Document>> {
      return this.http.get<Array<Document>>(this.apiDocuments);
  }
}