export const IconLoadingBarFullSequence = () => {
  return (
    <svg
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      width='24px'
      height='30px'
      viewBox='0 0 24 30'
      enableBackground='new 0 0 50 50'
    >
      <rect x='0' y='0' width='4' height='20' fill='#333'>
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='1; .2; 1'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='7' y='0' width='4' height='20' fill='#333'>
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='1; .2; 1'
          begin='0.2s'
          dur='0.6s'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='14' y='0' width='4' height='20' fill='#333'>
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='1; .2; 1'
          begin='0.4s'
          dur='0.6s'
          repeatCount='indefinite'
        />
      </rect>
    </svg>
  )
}
