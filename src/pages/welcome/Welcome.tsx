// import backgroundImage from '../../assets/images/welcomePage.jpg'
import WelcomeVideo from '../../assets/videos/welcomeVideo1080p.mp4'

const Welcome = () => {
  return (
    <div
      className="relative bg-cover bg-center h-full flex items-center justify-center"
      // TODO: remove this if we want to keep a video, keeping it as an example
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <video
        autoPlay
        loop
        muted
        onLoadStart={e => {
          e.currentTarget.playbackRate = 0.85
        }}
        className="object-cover w-full h-full absolute inset-0"
      >
        {/* add other sources and fallback if we want a video */}
        <source src={WelcomeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="text-white text-center relative">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Global Connect Insurance
        </h1>
        <p className="text-lg mb-8 max-w-screen-md mx-auto">
          Global Connect was created to facilitate the exchange of insurance
          needs amongst top tier insurers around the world for the benefit of
          those insurance companies and their multinational brokers and clients.
        </p>
      </div>
    </div>
  )
}

export { Welcome }
