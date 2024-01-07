import bgPatternCard from '../assets/images/bg-pattern-card.svg'
import avatar from '../assets/images/image-victor.jpg'
import Stats from './Stats'

export default function Card({ className = '' }: { className: string }) {
  return (
    <div className={className}>
      <img src={bgPatternCard} alt="Background" className="rounded-t-[0.9375rem]" />
      <img src={avatar} alt="Avatar" className="mx-auto -mt-[3rem] h-24 rounded-full border-[5px] border-white" />
      <div className="border-gray flex flex-col items-center gap-3 border-b p-6">
        <div className="flex items-center gap-2">
          <h1 className="text-very-dark-desaturated-blue text-lg font-bold">Victor Crest</h1>
          <p className="text-dark-grayish-blue text-lg">26</p>
        </div>
        <p className="text-dark-grayish-blue text-sm">London</p>
      </div>
      <div className="flex justify-center gap-10 p-6">
        <Stats number="80K" text="Followers" />
        <Stats number="803K" text="Likes" />
        <Stats number="1.4K" text="Photos" />
      </div>
    </div>
  )
}
