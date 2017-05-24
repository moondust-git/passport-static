import {Injectable} from '@angular/core';
import {HOST} from '../../../utils/Variables';
import {Http} from '@angular/http';

@Injectable()
export class OauthService {
  constructor(private http: Http) {
  }
  public getClientInfo(params: { redirect_uri: string; client_id: string, scope: string }) {
    return this.http.post(HOST + '/api/oauth/client/validate.md', params, null).map(res => res.json());
  }
  doLogin(loginForm: { username: string; password: string }, client: any) {
    const params = {
      username: loginForm.username,
      password: loginForm.password,
      client_id: client.client_id,
      scope: client.scope,
      redirect_uri: client.redirect_uri,
      state: client.state
    };
    console.log(params);
    return this.http.post(HOST + '/api/oauth/authorize.md', params, null).map(res => res.json());
  }
}
