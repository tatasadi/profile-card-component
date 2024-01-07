export default function Stats({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-very-dark-desaturated-blue text-lg font-bold">{number}</p>
      <p className="text-dark-grayish-blue text-[0.625rem] tracking-[0.09375rem]">{text}</p>
    </div>
  )
}
