import TaskIcon from '@/components/svgs/task'
import BookIcon from '@/components/svgs/book'


const Hero = () => {
    return (
        <main className="px-4 py-12 ">
        {/* Hero */}
        <section className="mt-[58px] mx-auto md:max-w-3xl xl:max-w-7xl">
          <div>
            <h3 className="flex flex-col font-light text-[34px] md:text-[72px] leading-[120%]">
              <span className="flex items-center space-x-2">
                Let's learn <TaskIcon className="md:w-14 md:h-14" />
              </span>
              <span className="flex items-center space-x-2">
                to code <BookIcon className="md:w-14 md:h-14" />
              </span>
              <span>an application</span>
            </h3>
          </div>
          <div>
          </div>
        </section>
      </main>
    )
}

export default Hero
