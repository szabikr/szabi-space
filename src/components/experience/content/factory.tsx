import { EXPERIENCE_COMPONENT } from '../../../constants/experience'

import MentorSchoolOfCode from './mentor-school-of-code'
import SoftwareEngineerBjss from './software-engineer-bjss'
import FullStackDeveloperRightindem from './full-stack-developer-rightindem'
import CoFounderWraptime from './co-founder-wraptime'
import NetDeveloperBranded3 from './net-developer-branded3'
import NetDeveloperComknow from './net-developer-comknow'
import IosApprenticeReea from './ios-apprentice-reea'

type exp_comp = typeof EXPERIENCE_COMPONENT

export default function Factory(which: exp_comp[keyof exp_comp]) {
  switch (which) {
    case EXPERIENCE_COMPONENT.mentorSchoolOfCode:
      return MentorSchoolOfCode
    case EXPERIENCE_COMPONENT.softwareEngineerBjss:
      return SoftwareEngineerBjss
    case EXPERIENCE_COMPONENT.fullStackDeveloperRightindem:
      return FullStackDeveloperRightindem
    case EXPERIENCE_COMPONENT.coFounderWraptime:
      return CoFounderWraptime
    case EXPERIENCE_COMPONENT.netDeveloperBranded3:
      return NetDeveloperBranded3
    case EXPERIENCE_COMPONENT.netDeveloperComknow:
      return NetDeveloperComknow
    case EXPERIENCE_COMPONENT.iosApprenticeReea:
      return IosApprenticeReea
    default:
      return () => <p>ERROR! Check experience component factory.</p>
  }
}
