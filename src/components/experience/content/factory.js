import {
  MENTOR_SCHOOL_OF_CODE,
  SOFTWARE_ENGINEER_BJSS,
  FULL_STACK_DEVELOPER_RIGHTINDEM,
  CO_FOUNDER_WRAPTIME,
  NET_DEVELOPER_BRANDED3,
  NET_DEVELOPER_COMKNOW,
  IOS_APPRENTICE_REEA,
} from '../../../constants/experience'

import MentorSchoolOfCode from './mentor-school-of-code'
import SoftwareEngineerBjss from './software-engineer-bjss'
import FullStackDeveloperRightindem from './full-stack-developer-rightindem'
import CoFounderWraptime from './co-founder-wraptime'
import NetDeveloperBranded3 from './net-developer-branded3'
import NetDeveloperComknow from './net-developer-comknow'
import IosApprenticeReea from './ios-apprentice-reea'

export default function Factory(which) {
  switch (which) {
    case MENTOR_SCHOOL_OF_CODE.contentComponent:
      return MentorSchoolOfCode
    case SOFTWARE_ENGINEER_BJSS.contentComponent:
      return SoftwareEngineerBjss
    case FULL_STACK_DEVELOPER_RIGHTINDEM.contentComponent:
      return FullStackDeveloperRightindem
    case CO_FOUNDER_WRAPTIME.contentComponent:
      return CoFounderWraptime
    case NET_DEVELOPER_BRANDED3.contentComponent:
      return NetDeveloperBranded3
    case NET_DEVELOPER_COMKNOW.contentComponent:
      return NetDeveloperComknow
    case IOS_APPRENTICE_REEA.contentComponent:
      return IosApprenticeReea
    default:
      return () => <p>ERROR! Check experience component factory.</p>
  }
}
