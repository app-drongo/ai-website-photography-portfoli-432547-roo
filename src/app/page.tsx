import Herophotographymasterclass from '@/components/Herophotographymasterclass';
import Features from '@/components/Features';
import Aboutphotographymasterclass from '@/components/Aboutphotographymasterclass';
import Pricing from '@/components/Pricing';
import Cta from '@/components/Cta';

export default function Photography masterclassPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Herophotographymasterclass />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Features />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Aboutphotographymasterclass />
      </section>
      <section id="section-3" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="section-4" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}