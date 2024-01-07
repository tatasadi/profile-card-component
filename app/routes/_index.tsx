import type { MetaFunction } from '@remix-run/node'
import Card from '~/components/Card'

export const meta: MetaFunction = () => {
  return [{ title: 'Profile Card Component' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="relative my-auto flex h-full w-full max-w-5xl items-center justify-center overflow-hidden p-6">
      <Card className="relative z-10 my-auto flex w-80 flex-col rounded-[0.9375rem] bg-white shadow-[0_50px_100px_-20px_rgba(8,70,94,0.50)] lg:w-[21.875rem]" />
    </main>
  )
}
