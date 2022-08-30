import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What Are Salesforce Managed Services?',
      answer:
      `Salesforce Managed Services is a way to outsource the installation, implementation, and everyday administrative of your Salesforce. 
      You can contract Spark&Spur to assist you with all things Salesforce - this can free your staff to focus on more strategic tasks and provide peace of mind knowing that your Salesforce is in expert hands.
      `,
    },
    {
      question: 'Are Salesforce Services Right For My Business?',
      answer: `Salesforce services can help companies of almost any size to achieve their business goals. Working with a reputable Salesforce partner can help you get the most out of your investment. 
      By outsourcing Salesforce administration and management tasks, companies can focus on their core competencies, freeing up valuable resources.
      `,
    },
    {
      question: 'How can Service Cloud help my business increase customer loyalty, retention, and satisfaction?',
      answer:
        `When your customers reach out to you, your customer service team needs to be equipped to answer any questions.
         Because the smarter your customer service is, the more likely customers are to return.
         Service Cloud enables your team to work faster, improving customer satisfaction and reducing costs.`,
    },
  ],
  [
    {
      question: 'How Can Salesforce Increase Sales?',
      answer:
        `By automating tasks and providing valuable insights, Salesforce can help organizations boost their sales
         and improve customer satisfaction. Whether you need help tracking leads, communicating with clients, or
         managing your pipeline, Salesforce has a solution. Beyond that, it can be fully customized and scaled to
         meet the needs of your businesses.
        `,
    },
    {
      question:
        'Salesforce Has Been a Part of Our Operation for a Long Time, Why Bring in a Managed Service now?',
      answer:
        `We are the experts in Salesforce so you don’t have to be. Salesforce is a dynamic platform that is constantly
         changing and evolving. This makes it an incredibly powerful tool for businesses, so having a dedicated Salesforce
         partner on the pulse of all things Salesforce will help you navigate evolving functionality and updates. `,
    },
    {
      question:
        'When is the Best Time to Start Salesforce Services?',
      answer:
        `The best time to start services may vary depending on your specific needs. In general, it is most beneficial to
         do so when you are experiencing consistent growth and require additional support to maintain operation levels.`,
    },
  ],
  [
    {
      question: 'Does Spark&Spur Provide Custom Solutions for Salesforce?',
      answer:
        `Yes, we have the knowledge and experience to help you get the most out of Salesforce. Our team of expert developers can 
        create bespoke Salesforce solutions according to your specific needs and requirements.`,
    },
    {
      question: 'How Long Does a Salesforce Implementation Take?',
      answer: `Depending on the size and complexity of your organization, as well as the scope of the project, 
      a Salesforce implementation can take
       anywhere from a couple of weeks to several months. The key is to have realistic expectations and to plan for success.
       We take our time performing expert implementations. This allows us to create a high-quality product while also remaining efficient.
       `,
    },
    {
      question: 'Is Salesforce Right For Small Businesses?',
      answer:
        `Sales platforms can be a big investment, and small businesses may not have the budget for it.
         Salesforce offers a great return on investment because it automates and streamlines your sales process. By using it, 
        you can keep track of your sales pipeline, manage customer relationships, and automate repetitive tasks.`,
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display capitalize text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {`If you can't find something, email us and someone will get back to you shortly.`}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
