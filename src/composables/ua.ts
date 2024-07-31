import { UAParser } from 'ua-parser-js'

const ua = isWindow ? navigator.userAgent : undefined
const parser = new UAParser(ua)

export const uaBrowser = parser.getBrowser()
export const uaCPU = parser.getCPU()
export const uaEngine = parser.getEngine()
export const uaDevice = parser.getDevice()
export const uaOS = parser.getOS()
export const uaResult = parser.getResult()
export const isMobile = uaDevice.type === 'mobile'
