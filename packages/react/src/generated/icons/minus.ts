import { createNeonIcon } from '../../create-icon.js'
import type { IconGeometryData } from '../../types.js'

const data: IconGeometryData = {"o":{"2":[["p","M5 12h14"]],"1.25":[["p","M5 12h14"]],"1.5":[["p","M5 12h14"]]},"f":{"2":["M5 10.825h14a1.175 1.175 0 0 1 0 2.35H5a1.175 1.175 0 0 1 0-2.35",1],"1.25":["M5 11.2h14a.8.8 0 0 1 0 1.6H5a.8.8 0 0 1 0-1.6",1],"1.5":["M5 11.075h14a.925.925 0 0 1 0 1.85H5a.925.925 0 0 1 0-1.85",1]}}

export const MinusIcon = createNeonIcon("MinusIcon", data)
export default MinusIcon
