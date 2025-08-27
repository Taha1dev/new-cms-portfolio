import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '@/components/magicui/scroll-based-velocity';
import { SparklesText } from '../magicui/sparkles-text';

export function ScrollBasedVelocity() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
      <ScrollVelocityContainer className="">
        <ScrollVelocityRow baseVelocity={7} direction={1}>
          <SparklesText className='lg:text-7xl text-4xl md:text-7xl md:leading-[5rem] font-extrabold tracking-[-0.02em]'>
            <span className="text-main-500">I build scalable web apps,&nbsp;</span>
            <span className="text-[#68affb]">
              Pixel-perfect responsive UI,&nbsp;
            </span>{' '}
          </SparklesText>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={7} direction={-1}>
          <SparklesText className='lg:text-7xl text-4xl md:text-7xl md:leading-[5rem] font-extrabold tracking-[-0.02em]'>
            <span className="text-[#ee4388]">Accessible & user-friendly,&nbsp;</span>

            <span className="">Interactive & smooth UX,&nbsp;</span>
          </SparklesText>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
