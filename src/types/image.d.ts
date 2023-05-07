declare module '*.jpg' {
  const path: File
  export default path
}
declare module '*.png' {
  const path: File
  export default path
}
declare module '*.webp' {
  const path: File
  export default path
}
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  const src: string
  export default src
  const path: File
  export default path
}
