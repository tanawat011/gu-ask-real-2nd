interface Window {
  _env_: NodeJS.ProcessEnv & {
    NODE_ENV: 'development' | 'uat' | 'staging' | 'production' | 'test'
    SKIP_PREFLIGHT_CHECK: 'true' | 'false'
    GENERATE_SOURCEMAP: 'true' | 'false'
    REACT_APP_API_URL: string
  }
}
