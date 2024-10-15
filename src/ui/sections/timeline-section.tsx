import type { ComponentProps } from "react";

import { range } from "lodash";

import clsx from "clsx";

function TimelineItemLine() {
  return (
    <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
      <div className='h-full w-6 flex items-center justify-center'>
        <div className='h-full w-0.5 bg-gray-200 pointer-events-none'>a</div>
      </div>
      <div className='w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow'>
        b
      </div>
    </div>
  );
}

function TimelineItemContent({ className, children }: ComponentProps<"div">) {
  return (
    <div
      className={clsx(
        // 'w-full',
        // 'my-4 mr-auto',
        // 'p-4 border border-gray-300 rounded-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

function TimelineItem({ odd, children, className }: ComponentProps<"div"> & { odd: boolean }) {
  if (odd) {
    return (
      <li className={"flex md:contents"}>
        <TimelineItemLine />
        <TimelineItemContent className={clsx("col-start-6 col-end-10", className)}>
          {children}
        </TimelineItemContent>
      </li>
    );
  }
  return (
    <li className={"flex flex-row-reverse md:contents"}>
      <TimelineItemContent className={clsx("col-start-1 col-end-5", className)}>
        {children}
      </TimelineItemContent>
      <TimelineItemLine />
    </li>
  );
}
const READY = false;
export function TimelineSection() {
  if (!READY) {
    return <section> </section>;
  }

  return (
    <section className={"prose max-w-none "}>
      <div className={"container mx-auto"}>
        <div className='min-h-screen flex items-center justify-center '>
          <ul className='flex flex-col md:grid grid-cols-9 mx-auto p-2 not-prose'>
            {range(100).map((i) => (
              <TimelineItem key={i} odd={i % 2 !== 0} className={"prose py-4"}>
                <article className='relative shadow-2xl max-w-lg w-full transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md overflow-hidden'>
                  <img
                    className='mx-auto object-fill h-full w-full not-prose'
                    src={`https://picsum.photos/600/300?random=${i}`}
                    // src="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1"
                    alt=''
                  />
                  <div className={"absolute w-full h-full inset-0 flex p-8"}>
                    <h3
                      className={"absolute text-white right-10 bottom-0 text-3xl mix-blend-screen"}
                    >
                      Amalgum
                    </h3>
                  </div>
                </article>
                {/*<article className="relative shadow-2xl max-w-lg w-full transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md">*/}
                {/*  <div className="flex absolute left-0 top-0 w-10 h-10 bg-orange-600 text-gray-100">*/}
                {/*    <span className="mx-auto my-auto">*/}
                {/*      /!*<img className="w-5 h-5" src="/assets/left-arrow.801ca37c.svg" />*!/*/}
                {/*    </span>*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="bg-no-repeat bg-center overflow-hidden mt-10 min-h-96"*/}
                {/*    // style="background-image: url('svgs/blob-blue.svg');"*/}
                {/*  >*/}
                {/*    <img*/}
                {/*      className="mx-auto p-5"*/}
                {/*      src={`https://picsum.photos/600/400?random=${i}`}*/}
                {/*      // src="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1"*/}
                {/*      alt=""*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  <div className="p-8 mb-10 mt-2">*/}
                {/*    <h3 className="text-xl text-gray-500">0{i + 1}.</h3>*/}
                {/*    <h2 className="text-3xl mt-2">Lorem ipsum dolor sit amet</h2>*/}
                {/*  </div>*/}
                {/*</article>*/}
                {/*/!*<h3 className="font-semibold text-xl mb-1 text-gray-900">Title 2</h3>*!/*/}
                {/*/!*<p className="text-gray-600">*!/*/}
                {/*/!*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt maiores ipsa molestiae*!/*/}
                {/*/!*  magnam libero dolorem explicabo. Nobis veniam incidunt at, alias ipsam est suscipit maxime sunt quia.*!/*/}
                {/*/!*  Consectetur, aut.*!/*/}
                {/*/!*</p>*!/*/}
              </TimelineItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
