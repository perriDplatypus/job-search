import { render, screen } from '@testing-library/vue'
import ActionButton from '@/components/Shared/ActionButton.vue'
import { expect } from 'vitest'

describe('ActionButton', () => {
  const renderActionButton = () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
  }
  it('renders text', () => {
    renderActionButton()
    const button = screen.getByRole('button', {
      name: /Click me/i
    })
    expect(button).toBeInTheDocument()
  })

  it('applies one of several styles to button', () => {
    renderActionButton()
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toHaveClass('primary')
  })
})
