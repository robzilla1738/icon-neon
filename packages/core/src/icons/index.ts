import type { IconDef } from '../types.ts'
import { aiIcons } from './ai.ts'
import { arrowIcons } from './arrows.ts'
import { chartIcons } from './charts.ts'
import { commerceIcons } from './commerce.ts'
import { communicationIcons } from './communication.ts'
import { designIcons } from './design.ts'
import { developmentIcons } from './development.ts'
import { deviceIcons } from './devices.ts'
import { editorIcons } from './editor.ts'
import { educationIcons } from './education.ts'
import { fileIcons } from './files.ts'
import { interfaceIcons } from './interface.ts'
import { layoutIcons } from './layout.ts'
import { mapIcons } from './maps.ts'
import { mediaIcons } from './media.ts'
import { securityIcons } from './security.ts'
import { shapeIcons } from './shapes.ts'
import { statusIcons } from './status.ts'
import { timeIcons } from './time.ts'
import { userIcons } from './users.ts'
import { weatherIcons } from './weather.ts'

export const ALL_ICONS: readonly IconDef[] = [
  ...arrowIcons,
  ...interfaceIcons,
  ...layoutIcons,
  ...fileIcons,
  ...communicationIcons,
  ...userIcons,
  ...securityIcons,
  ...aiIcons,
  ...developmentIcons,
  ...editorIcons,
  ...mediaIcons,
  ...chartIcons,
  ...commerceIcons,
  ...timeIcons,
  ...statusIcons,
  ...deviceIcons,
  ...mapIcons,
  ...weatherIcons,
  ...designIcons,
  ...educationIcons,
  ...shapeIcons,
]
