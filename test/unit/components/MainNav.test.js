import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it('Displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Umbrella Corp')
    expect(companyName).toBeInTheDocument()
  })

  it('Displays menu items for navigation', () => {
    renderMainNav()
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

  describe('When the user logs in', () => {
    it('Displays user profile picture', async () => {
      renderMainNav()
      let profileImage = screen.queryByRole('img', {
        name: /User Profile Image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)
      profileImage = screen.queryByRole('img', {
        name: /User Profile Image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
