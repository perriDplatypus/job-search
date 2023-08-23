import { render, screen } from '@testing-library/vue'
import { describe, expect } from 'vitest'

import TheSubnav from '@/components/Navigation/TheSubNav.vue'

describe('TheSubnav', () => {
  const renderSubnav = (onJobResultPageCondition) => {
    render(TheSubnav, {
      global: {
        stubs: {
          FontAwesomeIcon: onJobResultPageCondition
        }
      },
      data() {
        return {
          onJobResultPage: onJobResultPageCondition
        }
      }
    })
  }

  describe('when the user is on jobs page', () => {
    it('displays job count', () => {
      renderSubnav(true)
      const jobCount = screen.getByText('1653')
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when the user is not on jobs page', () => {
    it('does not display job count', () => {
      renderSubnav(false)
      const jobCount = screen.queryByText('1653')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
