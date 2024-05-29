import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {

  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-neutral-200">
        <Player
          autoplay
          loop
          src='/animation/growing.json'
          style={{ height: '350px', width: '350px' }}
        />
        <img src="/logos/powered_by_germinare.svg" className="h-9 mr-4 mt-6" />
      </div>
    </>
  )
}