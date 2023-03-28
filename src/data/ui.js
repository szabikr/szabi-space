import {
  MENTOR_SCHOOL_OF_CODE,
  SOFTWARE_ENGINEER_BJSS,
  FULL_STACK_DEVELOPER_RIGHTINDEM,
  CO_FOUNDER_WRAPTIME,
  NET_DEVELOPER_BRANDED3,
  NET_DEVELOPER_COMKNOW,
  IOS_APPRENTICE_REEA,
} from '../constants/experience'

/*
This configuration data is used to display the experience section on the front-end.
In a way that similar experiences such as .Net Developer at Branded3 and ComKnow are merged.
*/
const experience_ui_config = [
  [MENTOR_SCHOOL_OF_CODE.id],
  [SOFTWARE_ENGINEER_BJSS.id],
  [FULL_STACK_DEVELOPER_RIGHTINDEM.id],
  [CO_FOUNDER_WRAPTIME.id],
  [NET_DEVELOPER_BRANDED3.id, NET_DEVELOPER_COMKNOW.id],
  [IOS_APPRENTICE_REEA.id],
]
