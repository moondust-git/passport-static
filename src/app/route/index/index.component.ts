import {Component, OnInit} from '@angular/core';
import {PopupService} from '../../modules/cpts/popups';
import {LoadingService} from '../../modules/cpts/loading';

@Component({
  selector: 'app-route-index.row',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private pop: PopupService, private loading: LoadingService) {

  }

  ngOnInit() {
    this.pop.alert('asdas').ok(() => {

    });
  }
  loadingAlert() {
    this.loading.show();
  }
}
