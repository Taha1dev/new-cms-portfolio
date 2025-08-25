import { PulsingBorder, PulsingBorderProps } from "@paper-design/shaders-react"

export default function PulsingBorderShader(props: any) {
  return (
    <div
      className="absolute -top-[19rem] -left-24 w-full flex justify-center overflow-hidden pointer-events-none opacity-100 dark:opacity-50"
    >
      <div
        className="relative size-[450px] -translate-y-[-50%]"
      >
        <PulsingBorder
          colors={["#5800FF", "#f0f", "#E77EDC", "#8345d0"]}
          colorBack="#00000000"
          speed={0.5}
          roundness={100}
          thickness={0.05}
          softness={10}
          intensity={1}
          spotsPerColor={2}
          spotSize={0.1}
          pulse={0.2}
          smoke={0.5}
          smokeSize={5}
          scale={0.65}
          rotation={12}
          frame={9161408.251009725}
          {...props}
          style={{
            width: "635px",
            height: "511px",
            borderRadius: "0px",
            backgroundImage:
              "radial-gradient(circle in oklab, oklab(0% 0 -.0001 / 0%) 25.22%, oklab(30.5% 0.029 -0.184) 43.89%, oklab(0% 0 -.0001 / 0%) 60.04%)",
          }}
        />
      </div>
    </div>
  )
}
