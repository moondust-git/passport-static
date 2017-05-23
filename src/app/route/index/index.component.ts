import {Component, OnInit} from '@angular/core';
import {PopupService} from "../../modules/popups/services/popup.service";
import {LoadingService} from "../../modules/loading/provider/loading.service";

@Component({
  selector: 'route-index.row',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private pop: PopupService, private loading: LoadingService) {

  }

  ngOnInit() {
    this.pop.alert("asdas").ok(()=>{

    })
  }
}
