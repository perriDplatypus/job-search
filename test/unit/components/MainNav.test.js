import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { expect } from 'vitest'

describe('MainNav', () => {
  it('Displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Umbrella Corp')
    expect(companyName).toBeInTheDocument()
  })

  it('Displays menu items for navigation', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Umbrella',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
})
