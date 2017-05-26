import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {TimepickerComponent} from "./timepicker.component";
import {TimepickerConfig} from "./timepicker.config";
import {TWheelModule} from "../../directives/mouseWheel/wheel.module";

@NgModule({
  imports: [CommonModule, FormsModule, TWheelModule],
  declarations: [TimepickerComponent],
  exports: [TimepickerComponent, FormsModule]
})

export class TTimepickerModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TTimepickerModule,
      providers: [TimepickerConfig]
    };
  }
}
