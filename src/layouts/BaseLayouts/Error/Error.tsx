import { Outlet } from 'react-router-dom'
import tw from 'twin.macro'

import { Column, Row } from 'components/Layout'

const Container = tw(
  Row,
)`h-screen w-full items-center justify-center bg-slate-400`
const Card = tw(Column)`rounded-xl bg-slate-500 p-12`

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
