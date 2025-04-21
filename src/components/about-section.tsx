export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              National Outdoor School
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              National Outdoor School is dedicated to connecting people with nature through immersive,
              educational experiences. Our expert instructors bring decades of wilderness experience and a passion for
              teaching outdoor skills.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe that time spent in nature is essential for personal growth, well-being, and developing a deeper
              connection with our environment. Our courses are designed to build confidence, foster community, and
              inspire environmental stewardship.
            </p>
            <p className="text-lg text-gray-700">
              Whether you&apos;re a beginner looking to learn basic outdoor skills or an experienced adventurer seeking to
              refine your expertise, our diverse range of programs offers something for everyone.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full rounded-lg overflow-hidden shadow-xl">
            <video controls autoPlay loop muted playsInline>
              <source src="/banner-video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

