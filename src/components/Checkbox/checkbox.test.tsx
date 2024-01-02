import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { Checkbox } from './checkbox'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="label" labelFor="check" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/label/i)).toBeInTheDocument()
    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByRole('checkbox')).toBeInTheDocument()
    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="label" labelFor="check" labelColor="black" />
    )
    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when status changes', () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="label" onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()
    screen.getByRole('checkbox').click()
    expect(onCheck).toHaveBeenCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="label" onCheck={onCheck} isChecked />)
    expect(onCheck).not.toHaveBeenCalled()
    screen.getByRole('checkbox').click()
    expect(onCheck).toHaveBeenCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="label" labelFor="check" />)
    expect(document.body).toHaveFocus()
    screen.getByLabelText(/label/i).focus()
    expect(screen.getByLabelText(/label/i)).toHaveFocus()
  })
})
