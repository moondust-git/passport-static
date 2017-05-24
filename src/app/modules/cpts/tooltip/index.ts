import {NgModule} from '@angular/core';
import {MdTooltip, TooltipComponent} from './tooltip';
import {PlatformModule} from '../../core/platform/index';
import {MdCommonModule} from '../../core/common-behaviors/common-module';
import {OverlayModule} from '../../core/overlay/overlay-directives';


@NgModule({
  imports: [OverlayModule, MdCommonModule, PlatformModule],
  exports: [MdTooltip, TooltipComponent, MdCommonModule],
  declarations: [MdTooltip, TooltipComponent],
  entryComponents: [TooltipComponent],
})
export class MdTooltipModule {}


export * from './tooltip';
