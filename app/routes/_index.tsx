import type { MetaFunction } from '@remix-run/node'
import bgPatternTop from '../assets/images/bg-pattern-top.svg'
import bgPatternBottom from '../assets/images/bg-pattern-bottom.svg'
import Card from '~/components/Card'

export const meta: MetaFunction = () => {
  return [{ title: 'Profile Card Component' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="relative my-auto flex h-full w-full max-w-5xl items-center justify-center overflow-hidden p-6">
      <img
        src={bgPatternTop}
        alt=""
        className="absolute left-[-50%] top-[-40%] w-[38.875] md:left-[-10%] md:top-[-20%] md:w-[61.125rem] md:max-w-[50%]"
      />
      <img
        src={bgPatternBottom}
        alt=""
        className="absolute bottom-[-40%] right-[-60%] w-[38.875rem] md:bottom-[-20%] md:right-[-10%] md:w-[61.125rem] md:max-w-[50%]"
      />
      <Card className="relative z-10 my-auto flex w-80 flex-col rounded-[0.9375rem] bg-white shadow-[0_50px_100px_-20px_rgba(8,70,94,0.50)] lg:w-[21.875rem]" />
    </main>
  )
}
