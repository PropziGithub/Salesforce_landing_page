import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import IconSlider from './Slider'
import { Pricing } from './Pricing'



function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-10 w-10 flex-none fill-current stroke-current',
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const data = [
  {name: 'Unlock hidden efficiencies'},
  {name: 'Improve cross-functional workflows'},
  {name: 'Run confident list management'},
]


export function Hero() {
  return (
    <Container className="pt-16 pb-16 lg:pt-16">
      <div className='items-center flex flex-col lg:flex-row gap-10'>
        <div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Salesforce{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">made simple.</span>
        </span>
      </h1>
      <p className="mx-auto mt-4 text-xl font-[600] tracking-tight text-slate-700">
        {`Your CRM tool is a powerful tool – ensure it's set up for success.`}
      </p>
      <p className="mx-auto my-4  text-lg tracking-tight text-slate-700">
        {`Maximize efficiency for marketing and operations teams:`}
      </p>
      
          {data.map((item) => (
            <li className="flex" key={item.name}>
            <CheckIcon/>
              <span className="">{item.name}</span>
          </li>
          ))}
      <div className="mt-12 flex gap-x-6">
        <Button href="#book-a-call">Book a Call</Button>
        <Button
          href="#testimonials"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">See Testimonials</span>
        </Button>
      </div>
        </div>
        <Pricing/>
      </div>
      <div className="mt-24 lg:mt-24 flex flex-col items-center justify-center">
        <p className="font-display text-base text-slate-900">
          Trusted by these companies
        </p>
        <div className='mt-8 w-full lg:w-[800px] xl:w-[800px] 2xl:w-[800px]'>
        <IconSlider/>
        </div>
      </div>
    </Container>
  )
}
