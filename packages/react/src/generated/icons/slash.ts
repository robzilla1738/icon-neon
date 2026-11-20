import { createNeonIcon } from '../../create-icon.js'
import type { IconGeometryData } from '../../types.js'

const data: IconGeometryData = {"o":{"2":[["p","m16.5 4-9 16"]],"1.25":[["p","m16.5 4-9 16"]],"1.5":[["p","m16.5 4-9 16"]]},"f":{"2":["m8.524 20.576 9-16a1.175 1.175 0 1 0-2.048-1.152l-9 16a1.175 1.175 0 0 0 2.048 1.152",1],"1.25":["m8.197 20.392 9-16a.8.8 0 0 0-1.394-.784l-9 16a.8.8 0 1 0 1.394.784",1],"1.5":["m8.306 20.453 9-16a.925.925 0 0 0-1.612-.906l-9 16a.925.925 0 1 0 1.612.906",1]}}

export const SlashIcon = createNeonIcon("SlashIcon", data)
export default SlashIcon
