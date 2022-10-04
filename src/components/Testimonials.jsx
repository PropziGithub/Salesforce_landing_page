import Image from 'next/future/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        `The team is highly responsive, and communication is never an issue. They act as trusted 
         advisors within the company, and we consider them part of the team. Our market is extremely niche,
         and they’ve learned and adapted, as seen through a lot of their
         marketing efforts, and that’s been extremely impressive from our point of view.`,
      author: {
        name: 'Akhil Chawla',
        role: 'Executive Vice President at Sage Dental Partners',
        image: avatarImage1,
      },
    },
    {
      content:
        `Working together has enhanced our customer communications and engagement. 
         The Sparkforce team is knowledgeable and always willing and able to help with a fast turnaround.
         I know I can depend on them to generate quality content with seamless execution.`,
      author: {
        name: 'Leslie Provenzano',
        role: 'Senior Global Marketing Manager at SCALABLE Network Technologies',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        `Extremely helpful while keeping a smile on their faces. Sparkforce helped us bring the
         Refer-a-Friend project to life. They were resourceful, answered questions, and made changes quickly.
         They are a pleasure to work with.`,
      author: {
        name: 'Renée Scott',
        role: 'Sales Supervisor at ConsumerCapital',
        image: avatarImage5,
      },
    },
    {
      content:
       `All you want from a strategic partner. Sparkforce has supported our consumer lending business through four years of growth.
        Their team maintains and supports all aspects of our Salesforce integration with our lending platform.
        This includes all strategy implementations, daily real-time support, and process changes. 
        Varun, Neil, and Team are proactive in suggesting product development and excellent at implementing improvements.`,
      author: {
        name: 'Kerry McDowell',
        role: 'CanCap Management Group at ConsumerCapita',
        image: avatarImage5,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-4xl">
          Loved by businesses in all industries.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {`Like a tailor, we’ll build you a bespoke Salesforce instance that’s the right fit for your organization.
             We’ll craft the environment to your business needs, provide support solutions and help you scale when it’s time.`}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl lg:w-[800px] grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50 flex-none">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
