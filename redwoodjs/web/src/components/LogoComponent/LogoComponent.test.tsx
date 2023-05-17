import { render } from '@redwoodjs/testing/web'

import LogoComponent from './LogoComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LogoComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogoComponent />)
    }).not.toThrow()
  })
})
