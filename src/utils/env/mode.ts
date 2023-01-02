import { ENV } from 'constants/env'

export const isDevelopmentMode = () => window._env_.NODE_ENV === ENV.DEV
