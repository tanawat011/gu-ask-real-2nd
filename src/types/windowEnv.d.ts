interface Window {
  _env_: NodeJS.ProcessEnv & {
    NODE_ENV: 'development' | 'uat' | 'staging' | 'production' | 'test'
    SKIP_PREFLIGHT_CHECK: 'true' | 'false'
    GENERATE_SOURCEMAP: 'true' | 'false'
    REACT_APP_API_URL: string
    REACT_APP_FIREBASE_API_KEY: string
    REACT_APP_FIREBASE_AUTH_DOMAIN: string
    REACT_APP_FIREBASE_PROJECT_ID: string
    REACT_APP_FIREBASE_STORAGE_BUCKET: string
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string
    REACT_APP_FIREBASE_APP_ID: string
    REACT_APP_FIREBASE_MEASUREMENT_ID: string
  }
}
