import type { LegacyRef } from 'react'
import { useEffect } from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import tw from 'twin.macro'

import { Title } from 'components/PageUiComponent'
import { useElementDimension } from 'hooks/useElementDimension'
import {
  buttonUiAtom,
  headSelector,
  pageDimensionSelector,
} from 'recoils/atoms'

import { ButtonUiApi } from './ButtonUiApi'
import { ButtonUiBlock } from './ButtonUiBlock'
import { ButtonUiColor } from './ButtonUiColor'
import { ButtonUiDisabled } from './ButtonUiDisabled'
import { ButtonUiIcon } from './ButtonUiIcon'
import { ButtonUiLoading } from './ButtonUiLoading'
import { ButtonUiShape } from './ButtonUiShape'
import { ButtonUiSize } from './ButtonUiSize'
import { ButtonUiVariant } from './ButtonUiVariant'
import { ButtonUiWithIcon } from './ButtonUiWithIcon'
import { RightMenuButtonUi } from './RightMenuButtonUi'

const TwContainer = tw.div`grid grid-cols-1 gap-8 px-8 py-6 desktop:grid-cols-5`
const TwWrapContent = tw.div`xl:col-span-4`
const TwWrapMenu = tw.div`col-span-1 hidden desktop:block`

export const ButtonUi = () => {
  const [refPage, refPageDimension, handlePageDimension] = useElementDimension()
  const [refHead, refHeadDimension] = useElementDimension()

  const [, setPageDimension] = useRecoilState(pageDimensionSelector)
  const [, setHeadDimension] = useRecoilState(headSelector)

  useEffect(() => {
    setHeadDimension(refHeadDimension)
  }, [refHeadDimension])

  useEffect(() => {
    setPageDimension(refPageDimension)
  }, [refPageDimension])

  const { pageDimension, dimension } = useRecoilValue(buttonUiAtom)

  return (
    <>
      <TwContainer ref={refPage as LegacyRef<HTMLDivElement>}>
        <TwWrapContent>
          <div ref={refHead as LegacyRef<HTMLDivElement>}>
            <Title
              size='xl'
              title='Button'
              description='Button is used to triggers an action or event click'
            />
          </div>

          <ButtonUiVariant handlePageDimension={handlePageDimension} />
          <ButtonUiColor handlePageDimension={handlePageDimension} />
          <ButtonUiSize handlePageDimension={handlePageDimension} />
          <ButtonUiShape handlePageDimension={handlePageDimension} />
          <ButtonUiDisabled handlePageDimension={handlePageDimension} />
          <ButtonUiIcon handlePageDimension={handlePageDimension} />
          <ButtonUiWithIcon handlePageDimension={handlePageDimension} />
          <ButtonUiLoading handlePageDimension={handlePageDimension} />
          <ButtonUiBlock handlePageDimension={handlePageDimension} />
          <ButtonUiApi />
        </TwWrapContent>

        <TwWrapMenu>
          <RightMenuButtonUi
            pageDimension={pageDimension}
            dimension={dimension}
          />
        </TwWrapMenu>
      </TwContainer>
    </>
  )
}
