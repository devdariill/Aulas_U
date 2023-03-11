import { useAuthStore } from '../../store/auth.js'
import { useCounterStore } from '../../store/counterStore.js'
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'
import { useIndex } from '../../context/IndexContext.jsx'
function ProfilePage () {
  const { setUser } = useIndex()
  // const counter = useCounterStore((state) => state.counter);
  const { title, count, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts
    }),
    shallow
  )
  console.log(title, count)
  const { increment, getPosts, clearStore, multiply } = useCounterStore()
  useEffect(() => {
    getPosts()
  }, [])
  // const increment = useCounterStore(state => state.increment)
  // getPosts();
  const { profile } = useAuthStore((state) => ({ profile: state.profile }))
  console.log(profile.nitter)
  const logout = useAuthStore((state) => state.logout)
  const profileJSON = useAuthStore((state) => state.profile)
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen '>
        <div>ProfilePage</div>
        <div>{JSON.stringify(profileJSON)}</div>
        {/* <div>{JSON.stringify(nitter)}</div> */}
        <button
          className='bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5'
          onClick={() => (logout(), setUser(null))}
        >
          Logout
        </button>
        <div>
          {title} : {count}
        </div>
        <button
          className='bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5'
          onClick={() => increment()}
        >
          Increment
        </button>
        <hr />
        <button
          className='bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5'
          onClick={() => clearStore()}
        >
          Clear Store
        </button>
        <button
          className='bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5'
          onClick={() => multiply()}
        >
          Multiply
        </button>
        <div
          className='overflow-hidden h-5 mt-5 max-w-prose'
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {JSON.stringify(posts)}
        </div>
      </div>
    </>
  )
}
export default ProfilePage
