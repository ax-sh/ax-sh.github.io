import clsx from 'clsx'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className={clsx('flex min-h-screen', 'flex-col-reverse md:flex-row')}>
      <div className={clsx('relative grow shrink-0 basis-1/2')}>
        <Image objectPosition={'bottom'} fill={true} objectFit={'contain'} src={'/hero-image.svg'} alt={'hero'} />
      </div>
      <div className={clsx('flex flex-col w-full self-stretch basis-1/2', 'md:grow', 'prose prose-neutral dark:prose-invert')}>
        <div className={'shrink items-center justify-center b g-red-400'}>
          <h1>AX-SH</h1>
        </div>
      </div>
    </section>
  )
}
export function HeroSectionGrid() {
  return (
    <section className={clsx('grid grid-rows-1 min-h-screen grid-cols-1', 'md:grid-cols-2')}>
      <div className={clsx('relative row-span-full col-span-full md:col-span-1')}>
        <Image objectPosition={'bottom'} fill={true} objectFit={'contain'} src={'/hero-image.svg'} alt={'hero'} />
      </div>
      <div
        className={clsx(
          'flex flex-col',
          'row-span-full col-span-full md:col-span-1',
          'prose prose-neutral dark:prose-invert'
        )}
      >
        <div className={'grow bg-red-400 py-40 px-20'}>
          <h1>AX-SH</h1>
        </div>
      </div>
    </section>
  )
}
