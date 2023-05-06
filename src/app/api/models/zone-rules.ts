/* tslint:disable */
import { ZoneOffsetTransitionRule } from './zone-offset-transition-rule';
import { ZoneOffsetTransition } from './zone-offset-transition';
export interface ZoneRules {
  fixedOffset?: boolean;
  transitionRules?: Array<ZoneOffsetTransitionRule>;
  transitions?: Array<ZoneOffsetTransition>;
}
