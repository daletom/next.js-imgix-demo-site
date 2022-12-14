import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="absolute inset-0">
      <div className="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div className="relative mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">imgix Demos</h2>
        <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">These are a list of some demos we have made using imgix Video, Vue, React, and Javascript.</p>
      </div>
      <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      </div>
      </div>
    </section>
  );
}
