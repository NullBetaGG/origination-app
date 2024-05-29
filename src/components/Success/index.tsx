import { Player } from "@lottiefiles/react-lottie-player";

export default function Success() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-200">
      <Player
        autoplay
        loop
        src='/animation/ok.json'
        style={{ height: '250px', width: '250px' }}
      />
    </div>
  )
}