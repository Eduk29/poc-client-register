import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { DocumentType } from "src/app/models/document-type.model"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor(private http: HttpClient) { }

  apiDocumentTypes = environment.APIEndpoint + "/documentType";


   getDocuments(): Observable<Array<DocumentType>> {
      return this.http.get<Array<DocumentType>>(this.apiDocumentTypes);
  }
}