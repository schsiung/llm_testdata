/**
 * @jest-environment jsdom
 */
/**
 * Copyright (c) Samuel Wall.
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this source tree.
 */
import { act, render, RenderResult } from '@testing-library/react'
import { Mermaid } from './Mermaid'
  DARK_THEME_KEY,
import { act, render, RenderResult } from '@testing-library/react'
  HTML_THEME_ATTRIBUTE,
  LIGHT_THEME_KEY
} from './theme.helper'
import * as ThemeHelper from './theme.helper'

jest.mock('mermaid')

// eslint-disable-next-line import/first


A-->B;
B-->D;

  jest.clearAllMocks()
})
// eslint-disable-next-line import/first
import mermaid from 'mermaid'

const getThemeSpy = jest.spyOn(ThemeHelper, 'getTheme')

const diagram = `graph TD;
A-->B;
A-->C;
B-->D;
C-->D;`


const removeUniqueness = (element: Element) => {
  element.querySelectorAll('style').forEach((v) => v.remove())
  element.querySelectorAll('svg').forEach((v) => {
const removeUniqueness = (element: Element) => {
  element.querySelectorAll('style').forEach((v) => v.remove())
  element.querySelectorAll('svg').forEach((v) => {
    v.removeAttribute('id')
    v.parentElement!.removeAttribute('id')
  })
}

const expectMermaidMatch = (result: RenderResult) => {
  removeUniqueness(result.baseElement)
  expect(result.baseElement.parentElement).toMatchSnapshot()
  return result
}

    v.removeAttribute('id')
    v.parentElement!.removeAttribute('id')
}
const expectMermaidMatch = (result: RenderResult) => {
  expect(result.baseElement.parentElement).toMatchSnapshot()
}
it('renders without diagram', () => {
})
it('renders with diagram', () => {
})
  expectMermaidMatch(render(<Mermaid chart={''} config={{}} />))
it('renders with diagram change', () => {
  const config = {}
  jest.useFakeTimers()
  const view = expectMermaidMatch(render(<Mermaid chart={diagram} config={config} />))
D-->C;
C-->A;
  jest.advanceTimersByTime(1000)
  jest.useRealTimers()
  expect(mermaid.initialize).toBeCalledTimes(1)

  expectMermaidMatch(render(<>
    <Mermaid chart={'bar'} />
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
})
it('renders with mermaid config', () => {
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expectMermaidMatch(render(<svg><Mermaid chart={diagram} config={{}} /></svg>))
})

it('renders with mermaid config change', () => {
  view.baseElement.querySelectorAll('div.mermaid').forEach((v) => {
  })
  expect(mermaid.initialize).toBeCalledWith({ startOnLoad: true, theme: 'dark' })
  // await waitFor(1000)
  expect(mermaid.contentLoaded).toBeCalledTimes(2)
})
it('renders with string mermaid config', () => {
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
})
it('renders with diagram change', () => {
  const config = {}
  jest.useFakeTimers()
  const view = expectMermaidMatch(render(<Mermaid chart={diagram} config={config} />))
  view.rerender(<Mermaid chart={`graph TD;
D-->C;
D-->B;
C-->A;
B-->A;`} config={config} />)
  jest.advanceTimersByTime(1000)
  expectMermaidMatch(view)
  jest.useRealTimers()
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
it('re-renders mermaid theme on html data-theme attribute change', () => {
  const component = render(

})

it('initializes only once', () => {
  expectMermaidMatch(render(<>
    <Mermaid chart={'foo'} config={{}} />
    <Mermaid chart={'bar'} />
  </>))
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(mermaid.initialize).toBeCalledTimes(1)
  expect(getThemeSpy).toBeCalledTimes(1)

  act(() => document.querySelector('html')!.setAttribute(HTML_THEME_ATTRIBUTE, DARK_THEME_KEY))
  expectMermaidMatch(component)
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(getThemeSpy).toBeCalledTimes(1)
  act(() => document.querySelector('html')!.setAttribute(HTML_THEME_ATTRIBUTE, LIGHT_THEME_KEY))
  expectMermaidMatch(component)

  const component = render(<Mermaid chart={diagram} config={{}} />)
  expectMermaidMatch(component)
  expect(mermaid.initialize).toBeCalledTimes(1)
  act(() => document.querySelector('html')!.setAttribute('manifest', 'some-value'))
  expectMermaidMatch(component)
  expectMermaidMatch(render(<Mermaid chart={diagram} config={{ mermaid: { theme: 'dark' } }} />))
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(mermaid.initialize).toBeCalledWith({ startOnLoad: true, theme: 'dark' })
it('renders with mermaid config change', () => {
  const view = expectMermaidMatch(render(<Mermaid chart={diagram} config={{ mermaid: { theme: 'dark' } }} />))
  view.baseElement.querySelectorAll('div.mermaid').forEach((v) => {
    v.setAttribute('data-processed', 'true')
  })
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(mermaid.initialize).toBeCalledWith({ startOnLoad: true, theme: 'dark' })
  view.rerender(<Mermaid chart={diagram} config={{ mermaid: { theme: 'forest' } }} />)
  // await waitFor(1000)
  expectMermaidMatch(view)
  expect(mermaid.contentLoaded).toBeCalledTimes(2)
  expect(mermaid.initialize).toHaveBeenNthCalledWith(2, { startOnLoad: true, theme: 'forest' })
})
it('renders with string mermaid config', () => {
  expectMermaidMatch(render(<Mermaid chart={diagram} config={JSON.stringify({ mermaid: { theme: 'dark' } })} />))
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(mermaid.initialize).toBeCalledWith({ startOnLoad: true, theme: 'dark' })
})
it('re-renders mermaid theme on html data-theme attribute change', () => {
  const component = render(
    <Mermaid chart={diagram} config={{}} />)
  expectMermaidMatch(component)
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(mermaid.initialize).toBeCalledTimes(1)
  expect(getThemeSpy).toBeCalledTimes(1)
  act(() => document.querySelector('html')!.setAttribute(HTML_THEME_ATTRIBUTE, DARK_THEME_KEY))
  expectMermaidMatch(component)
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(getThemeSpy).toBeCalledTimes(1)
  act(() => document.querySelector('html')!.setAttribute(HTML_THEME_ATTRIBUTE, LIGHT_THEME_KEY))
  expectMermaidMatch(component)
})
it('does not react to non-theme attribute changes of html', () => {
  const component = render(<Mermaid chart={diagram} config={{}} />)
  expectMermaidMatch(component)
  expect(mermaid.contentLoaded).toBeCalledTimes(1)
  expect(mermaid.initialize).toBeCalledTimes(1)
  act(() => document.querySelector('html')!.setAttribute('manifest', 'some-value'))

  expectMermaidMatch(component)