export const execWindowEnv = () => {
  window._env_ = {
    ...window._env_,
    ...process.env,
  }
}
