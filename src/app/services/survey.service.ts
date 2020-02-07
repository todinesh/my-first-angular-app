import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import {BaseService} from './base.service';

@Injectable({
    providedIn: 'root'
})
export class SurveyService extends BaseService {

    baseUrl = "http://localhost:8001"

    constructor(http: Http, httpClient: HttpClient){super('/api/survey',http, httpClient);}

    getSurvey(surveyId:string) {
        return this.getOne(this.baseUrl+'api/survey/'+surveyId);
    }

    postSurvey(data) {
        const req = new HttpRequest('POST', this.baseUrl +'api/survey/', data, {
            reportProgress: true,
            responseType:'json'
        });
        return this.httpClient.request(req);
    }

    deleteSurvey(surveyId) {
        return this.http.delete(`${this.baseUrl}/api/survey/`, surveyId);
    }
}