import { Outlet } from 'react-router-dom'
import tw from 'twin.macro'

import { FlexCol, FlexRow } from 'components/Common'

const Container = tw(FlexRow)`h-screen w-full items-center justify-center bg-slate-400`
const Card = tw(FlexCol)`rounded-xl bg-slate-500 p-12`

export const ErrorLayout: React.FC = () => {
  return (
    <Container>
      <Card>
        <h1>ErrorLayout</h1>

        <Outlet />
      </Card>
    </Container>
  )
}
