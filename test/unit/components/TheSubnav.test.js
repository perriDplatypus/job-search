import { render, screen } from '@testing-library/vue'
import { describe, expect } from 'vitest'

import TheSubnav from '@/components/TheSubNav.vue'

describe('TheSubnav', () => {
  describe('when the user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultPage: true
          }
        }
      })

      const jobCount = screen.getByText('1653')
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when the user is not on jobs page', () => {
    it('does not display job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultPage: false
          }
        }
      })

      const jobCount = screen.queryByText('1653')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
