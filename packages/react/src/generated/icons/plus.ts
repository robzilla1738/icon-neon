import { createNeonIcon } from '../../create-icon.js'
import type { IconGeometryData } from '../../types.js'

const data: IconGeometryData = {"o":{"2":[["p","M12 5v14"],["p","M5 12h14"]],"1.25":[["p","M12 5v14"],["p","M5 12h14"]],"1.5":[["p","M12 5v14"],["p","M5 12h14"]]},"f":{"2":["M13.175 10.825V5a1.175 1.175 0 0 0-2.35 0v5.825H5a1.175 1.175 0 0 0 0 2.35h5.825V19a1.175 1.175 0 0 0 2.35 0v-5.825H19a1.175 1.175 0 0 0 0-2.35z",1],"1.25":["M12.8 11.2V5a.8.8 0 0 0-1.6 0v6.2H5a.8.8 0 0 0 0 1.6h6.2V19a.8.8 0 0 0 1.6 0v-6.2H19a.8.8 0 0 0 0-1.6z",1],"1.5":["M12.925 11.075V5a.925.925 0 0 0-1.85 0v6.075H5a.925.925 0 0 0 0 1.85h6.075V19a.925.925 0 0 0 1.85 0v-6.075H19a.925.925 0 0 0 0-1.85z",1]}}

export const PlusIcon = createNeonIcon("PlusIcon", data)
export default PlusIcon
