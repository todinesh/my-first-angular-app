import { Http, Headers } from '@angular/http';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {BadInput} from './bad.input'
import {AppError} from './app.error'

export class BaseService {

    constructor(private url: string, public http: Http, public httpClient: HttpClient){}

    getOne(baseUrl:string) {
        return this.http.get(baseUrl);//.map(res => res.json())
        //.catch(this.handleError);
    }

    getAll() {
        return this.http.get(this.url);//.map(res => res.json())
        //.catch(this.handleError);
    }

    getImage(imageUrl:string):Observable<Blob> {
        return this.httpClient.get(imageUrl, {responseType:'blob'});
    }

    private handleError(error: Response){
        if (error.status === 400) return Observable.throw(new BadInput(error.json()));
        if (error.status === 404) return Observable.throw(new AppError(error.json()));
    }
}