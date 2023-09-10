import clsx from 'clsx'
import { ComponentProps } from 'react'
import { range } from 'lodash'

function TimelineItemContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={clsx('w-full', 'my-4 mr-auto p-4 border border-gray-300 rounded-xl', className)}>
      <h3 className="font-semibold text-xl mb-1 text-gray-900">Title 2</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt maiores ipsa molestiae magnam libero
        dolorem explicabo. Nobis veniam incidunt at, alias ipsam est suscipit maxime sunt quia. Consectetur, aut.
      </p>
    </div>
  )
}

function TimelineItemLine() {
  return (
    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
    </div>
  )
}

function TimelineItem({ odd }: { odd: boolean }) {
  if (odd) {
    return (
      <div className="flex md:contents">
        <TimelineItemLine />
        <TimelineItemContent className={'col-start-6 col-end-10'} />
      </div>
    )
  }
  return (
    <div className="flex flex-row-reverse md:contents">
      <TimelineItemContent className={'col-start-1 col-end-5'} />
      <TimelineItemLine />
    </div>
  )
}

export function TimelineSection() {
  return (
    <section className={'prose max-w-none '}>
      <div className={'container mx-auto'}>
        <div className="min-h-screen flex items-center justify-center ">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
            {range(10).map((i) => (
                <TimelineItem odd={i % 2 === 0} >

                </TimelineItem>
            ))}
          </div>
        </div>
        )
      </div>
    </section>
  )
}
