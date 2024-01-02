import { renderWithTheme } from '../../utils/tests/helpers'
import { Radio } from './radio'
import { screen } from '@testing-library/react'

describe('<Radio />', () => {
  it('should render with label', () => {
    renderWithTheme(<Radio label="label" labelFor="radio" />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText(/label/i)).toBeInTheDocument()
    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'radio')
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)
    expect(screen.queryByRole('radio')).toBeInTheDocument()
    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(<Radio label="label" labelFor="radio" labelColor="black" />)
    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when status changes', () => {
    const onCheck = jest.fn()
    renderWithTheme(<Radio label="label" onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()
    screen.getByRole('radio').click()
    expect(onCheck).toHaveBeenCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(undefined)
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="label" labelFor="radio" />)
    expect(document.body).toHaveFocus()
    screen.getByLabelText(/label/i).focus()
    expect(screen.getByLabelText(/label/i)).toHaveFocus()
  })
})
