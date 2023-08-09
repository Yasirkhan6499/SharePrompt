import Feed from "@components/Feed";

//    [] Implement search (use RegExp obect for searching)
  //     - search by prompt
  //     - search by tag
  //     - search by username
  //  [] Impement click on tag
  //  [] Implement view other profiles
const Home = () => {
  return (
    <section className="w-full flex-center
    flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br  />
            <span className="orange_gradient 
            text-center">AI-Powered Prompts </span>
        </h1>
        <p className="desc text-center">
            Shared_prompts is an open-source AI prompting
            tool for mdern world to discover, create and share 
            creative prompts
        </p>

        {/* Feed */}
        <Feed />
    </section>
  )
}

export default Home;