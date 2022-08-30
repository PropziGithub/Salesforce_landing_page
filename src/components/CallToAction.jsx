import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import BookAppointment from './Book'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          {`Let's talk about your next Salesforce campaign`}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white mx-0">
           {`It's time to take control of your next Salesforce campaign. Let's talk about what you want to achieve and how we can make it happen.`}
          </p>
          </div>
          <BookAppointment/>
          {/* <Button href="/register" color="white" className="mt-10">
          Book a Call
          </Button> */}
       
      </Container>
    </section>
  )
}
