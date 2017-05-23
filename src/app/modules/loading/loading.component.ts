import {Component, OnInit, ViewChild} from '@angular/core';
import {LoadingService} from "./provider/loading.service";
import {ModalDirective} from "ngx-bootstrap";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'md-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {
  @ViewChild('modal') public modal: ModalDirective;
  text: string;

  constructor(private loadingService: LoadingService) {

  }

  ngOnInit() {
    this.loadingService.loading$.subscribe((value: any) => {
      this.text = value.innerHtml;
      this.modal.show();
      this.handleShow(value.time)
    });
    this.loadingService.close$.subscribe((time: number) => {
      this.modal.hide();
      this.handleClose()
    })

    this.loadingService.change$.subscribe((innerHtml: string) => {
      this.text = innerHtml;
    })
  }

  handleClose() {
    this.modal.onHidden.subscribe(() => {
      this.loadingService.closeCallback._ok();
    });
  }

  handleShow(time: number) {
    if (time) {
      setInterval(() => {
        this.modal.hide();
        this.handleClose()
      }, time)
    } else {
      this.modal.onShown.subscribe(() => {
        this.loadingService.loadingCallback._ok();
      });
    }
  }
}
