import {Component, OnInit} from '@angular/core';
import {OauthService} from './provider/oauth.service';
import {ActivatedRoute} from '@angular/router';
import {PopupService} from '../../modules/cpts/popups/services/popup.service';
import {LoadingService} from '../../modules/cpts/loading/provider/loading.service';

@Component({
  selector: 'app-oauth.row',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {
  client: any;
  formOauth: { username: string, password: string } = {username: '', password: ''};

  constructor(private oauthService: OauthService,
              private route: ActivatedRoute,
              private loading: LoadingService,
              private pop: PopupService) {
    this.loading.show();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const param = {
        redirect_uri: params['redirect_uri'],
        client_id: params['client_id'],
        scope: params['scope']
      };
      this.oauthService.getClientInfo(param).subscribe(res => {
        this.loading.close();
        this.client = res;
      }, err => {
        this.loading.close().ok(() => {
          this.pop.alert(JSON.stringify(err)).ok(() => {
          });
        });
      });
    });
  }

  doLogin() {
    this.oauthService.doLogin(this.formOauth, this.client).subscribe(res => {
    });
  }
}


