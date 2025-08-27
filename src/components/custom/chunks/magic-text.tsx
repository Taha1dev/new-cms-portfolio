
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ['900']
})
export default function MagicText({ text, classN }: { text: string, classN?: string }) {
  return (
    <span className={`font-bold ${orbitron.className} ${classN} bg-gradient-to-r 
                from-rose-500 via-purple-500 to-cyan-400 
                bg-clip-text text-transparent animate-gradient `} style={{
        backgroundSize: "300% 300%",
        animation: "gradient-shift 6s ease infinite",
      }}>{text}</span>
  )
}
