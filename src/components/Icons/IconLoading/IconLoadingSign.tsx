type IconLoadingSignProps = {
  width?: number
  height?: number
  className?: string
}

export const IconLoadingSign: React.FC<IconLoadingSignProps> = ({
  height = 20,
  width = 20,
  className = 'stroke-gray-400',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      className={className}
    >
      <g fill='none' fillRule='evenodd'>
        <g transform='translate(3 3)' strokeWidth='6'>
          <circle strokeOpacity='.5' cx='17' cy='17' r='17' />
          <path d='M34 17c0-9.94-8.06-17-17-17'>
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 17 17'
              to='360 17 17'
              dur='1s'
              repeatCount='indefinite'
            />
          </path>
        </g>
      </g>
    </svg>
  )
}
