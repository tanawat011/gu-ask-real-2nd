import { render } from '@testing-library/react'

import {
  IconLoadingBar,
  IconLoadingBarCenter,
  IconLoadingBarCenterSequence,
  IconLoadingBarFullSequence,
  IconLoadingBarTop,
  IconLoadingCircle,
  IconLoadingCircle2,
  IconLoadingSign,
} from './IconLoading'

jest.mock('./IconLoading', () => jest.requireActual('./IconLoading'))

describe('IconLoading', () => {
  test('<IconLoadingBar /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingBar />)

    expect(container).toBeInTheDocument()
  })

  test('<IconLoadingBarCenter /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingBarCenter />)

    expect(container).toBeInTheDocument()
  })

  test('<IconLoadingBarCenterSequence /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingBarCenterSequence />)

    expect(container).toBeInTheDocument()
  })

  test('<IconLoadingBarFullSequence /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingBarFullSequence />)

    expect(container).toBeInTheDocument()
  })

  test('<IconLoadingBarTop /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingBarTop />)

    expect(container).toBeInTheDocument()
  })

  test('<IconLoadingCircle /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingCircle />)

    expect(container).toBeInTheDocument()
  })

  test('<IconLoadingCircle2 /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingCircle2 />)

    expect(container).toBeInTheDocument()
  })

  test('<IconLoadingSign /> renders correctly', () => {
    expect.hasAssertions()

    const { container } = render(<IconLoadingSign />)

    expect(container).toBeInTheDocument()
  })
})
