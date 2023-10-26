import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share Your Thoughts
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'>Freedom of Speech</span>
    </h1>
    <p className='desc text-center'>
      Share your thoughts on a simple way, Sing Up with your Google account and share your thoughts with the World! 
    </p>

    <Feed />
  </section>
);

export default Home;