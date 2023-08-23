import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'
import { afterEach, beforeEach, describe, expect, vi } from 'vitest'

import TheHeadline from '@/components/TheHeadLine.vue'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('TheHeadline', () => {
  it('displays introductory action verb', () => {
    render(TheHeadline)
    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })

  it('changes action verb at regular intervals', () => {
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)

    render(TheHeadline)
    expect(mock).toHaveBeenCalled()
  })

  it('removes interval when component dissapears', () => {
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval()', clearInterval())

    const { unmount } = render(TheHeadline)
    unmount()

    expect(clearInterval).toHaveBeenCalled()
  })

  it('swaps action verb after interval', async () => {
    render(TheHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })
})
