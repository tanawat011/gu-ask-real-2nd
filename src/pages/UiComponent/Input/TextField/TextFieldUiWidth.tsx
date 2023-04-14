import type { UiComponentDefaultProps } from 'types'

import React from 'react'

import tw from 'twin.macro'

import { ComponentDisplay, Title } from 'components/PageUiComponent'
import { TextField } from 'components/TextField'

const TwContainer = tw.div`mb-8`

export const TextFieldUiWidth: React.FC<UiComponentDefaultProps> = (props) => {
  return (
    <TwContainer id={props.id}>
      <Title title={props.name} description={<></>} />
      <ComponentDisplay
        components={
          <>
            <div className='flex gap-2 items-end flex-wrap'>
              <TextField label='Basic' placeholder='Basic' />
              <TextField width='210px' label='210px' placeholder='Basic' />
              <TextField width='300px' label='300px' placeholder='Basic' />
              <TextField width='420px' label='420px' placeholder='Basic' />
            </div>
          </>
        }
        code={`import React from "react"

export const Component = () => {
  return (
    <div className='flex gap-2 items-end flex-wrap'>
      <TextField label='Basic' placeholder='Basic' />
      <TextField width='210px' label='210px' placeholder='Basic' />
      <TextField width='300px' label='300px' placeholder='Basic' />
      <TextField width='420px' label='420px' placeholder='Basic' />
    </div>
  )
}`}
      />
    </TwContainer>
  )
}
