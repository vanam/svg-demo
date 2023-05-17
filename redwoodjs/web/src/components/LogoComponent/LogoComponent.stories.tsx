// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LogoComponent> = (args) => {
//   return <LogoComponent {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LogoComponent from './LogoComponent'

export const generated = () => {
  return <LogoComponent />
}

export default {
  title: 'Components/LogoComponent',
  component: LogoComponent,
} as ComponentMeta<typeof LogoComponent>
