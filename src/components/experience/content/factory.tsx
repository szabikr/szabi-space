import { JOB_CONTENT } from '../../../constants/experience'
import { JobContentType } from '../../../types/models'

import MentorSchoolOfCode from './mentor-school-of-code'
import SoftwareEngineerBjss from './software-engineer-bjss'
import FullStackDeveloperRightindem from './full-stack-developer-rightindem'
import CoFounderWraptime from './co-founder-wraptime'
import NetDeveloperBranded3 from './net-developer-branded3'
import NetDeveloperComknow from './net-developer-comknow'
import IosApprenticeReea from './ios-apprentice-reea'
import StudentSapientia from './student-sapientia'

export default function Factory(which: JobContentType) {
  switch (which) {
    case JOB_CONTENT.mentorSchoolOfCode:
      return MentorSchoolOfCode
    case JOB_CONTENT.softwareEngineerBjss:
      return SoftwareEngineerBjss
    case JOB_CONTENT.fullStackDeveloperRightindem:
      return FullStackDeveloperRightindem
    case JOB_CONTENT.coFounderWraptime:
      return CoFounderWraptime
    case JOB_CONTENT.netDeveloperBranded3:
      return NetDeveloperBranded3
    case JOB_CONTENT.netDeveloperComknow:
      return NetDeveloperComknow
    case JOB_CONTENT.iosApprenticeReea:
      return IosApprenticeReea
    case JOB_CONTENT.studentSapientia:
      return StudentSapientia
    default:
      return () => <p>ERROR! Check job content component factory.</p>
  }
}
