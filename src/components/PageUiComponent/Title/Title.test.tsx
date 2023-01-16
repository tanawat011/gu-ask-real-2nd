import { screen } from '@testing-library/react'

import { renderWithProviders } from 'utils/jest'

import { Title } from './Title'

jest.mock('./Title', () => jest.requireActual('./Title'))

describe('<Title />', () => {
  test('renders correctly with default size', () => {
    expect.assertions(4)

    const { asFragment } = renderWithProviders(<Title title='Title' description='Detail' />)

    const firstElement = screen.getByTestId('container')
    const headTitle = screen.getByRole('heading', { level: 4 })

    expect(firstElement).toHaveStyleRule('margin-bottom', '1.5rem')
    expect(headTitle).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders correctly with size `xs`', () => {
    expect.assertions(3)

    renderWithProviders(<Title title='Title' size='xs' />)

    const firstElement = screen.getByTestId('container')
    const headTitle = screen.getByRole('heading', { level: 6 })

    expect(firstElement).toHaveStyleRule('margin-bottom', '0.75rem')
    expect(headTitle).toBeInTheDocument()
  })

  test('renders correctly with size `sm`', () => {
    expect.assertions(3)

    renderWithProviders(<Title title='Title' size='sm' />)

    const firstElement = screen.getByTestId('container')
    const headTitle = screen.getByRole('heading', { level: 5 })

    expect(firstElement).toHaveStyleRule('margin-bottom', '1rem')
    expect(headTitle).toBeInTheDocument()
  })

  test('renders correctly with size `md`', () => {
    expect.assertions(3)

    renderWithProviders(<Title title='Title' size='md' />)

    const firstElement = screen.getByTestId('container')
    const headTitle = screen.getByRole('heading', { level: 4 })

    expect(firstElement).toHaveStyleRule('margin-bottom', '1.5rem')
    expect(headTitle).toBeInTheDocument()
  })

  test('renders correctly with size `lg`', () => {
    expect.assertions(3)

    renderWithProviders(<Title title='Title' size='lg' />)

    const firstElement = screen.getByTestId('container')
    const headTitle = screen.getByRole('heading', { level: 3 })

    expect(firstElement).toHaveStyleRule('margin-bottom', '2rem')
    expect(headTitle).toBeInTheDocument()
  })

  test('renders correctly with size `xl`', () => {
    expect.assertions(3)

    renderWithProviders(<Title title='Title' size='xl' />)

    const firstElement = screen.getByTestId('container')
    const headTitle = screen.getByRole('heading', { level: 2 })

    expect(firstElement).toHaveStyleRule('margin-bottom', '2.5rem')
    expect(headTitle).toBeInTheDocument()
  })

  test('renders correctly with size `2xl`', () => {
    expect.assertions(3)

    renderWithProviders(<Title title='Title' size='2xl' />)

    const firstElement = screen.getByTestId('container')
    const headTitle = screen.getByRole('heading', { level: 1 })

    expect(firstElement).toHaveStyleRule('margin-bottom', '3rem')
    expect(headTitle).toBeInTheDocument()
  })
})
