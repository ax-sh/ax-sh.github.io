import clsx from 'clsx'

function TimelineItem() {
  return (
    <div className="timeline-item w-full after:content-[''] after:block after:clear-both">
      <div className="timeline-img"></div>

      <div className={clsx('timeline-content', 'even:float-right')}>
        <h2>Title</h2>
        <time className="date inline-block absolute top-0 right-0 p-3 bg-amber-500">1 MAY 2016</time>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe
          atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.
        </p>
        <a className="bnt-more" href="javascript:void(0)">
          More
        </a>
      </div>
    </div>
  )
}

export function TimelineSection() {
  return (
    <section className={'prose max-w-none'}>
      <section
        className={clsx(
          'timeline relative',
          "before:content-[''] before:absolute before:left-1/2",
          'before:transform before:-translate-x-1/2',
          'before:bg-red-400 before:w-2 before:h-full before:rounded-2xl'
        )}
      >
        <div className="timeline-container">
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
          <TimelineItem />
        </div>
      </section>
    </section>
  )
}
