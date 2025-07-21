import React, { Suspense, lazy } from "react";
import AnimatedLoader from "../components/AnimatedLoader";

const Hero = lazy(() => import('../components/Hero'));
const AboutUs = lazy(() => import('../components/AboutUs'));
const ImageGallery = lazy(() => import('../components/ImageGallery'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const QueryForm = lazy(() => import('../components/QueryForm'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  return (
    <>
      {/* Hero Header */}
      <header>
        <Suspense fallback={<AnimatedLoader section="Hero Section" />}>
          <Hero />
        </Suspense>
      </header>

      <main className="min-h-screen bg-white">

        {/* Image Gallery Section */}
        <section aria-label="Gallery Section">
          <Suspense fallback={<AnimatedLoader section="Gallery" />}>
            <ImageGallery />
          </Suspense>
        </section>

        {/* About Us Section */}
        <section aria-label="About Us Section">
          <Suspense fallback={<AnimatedLoader section="About Us" />}>
            <AboutUs />
          </Suspense>
        </section>

        {/* Testimonials Section */}
        <section aria-label="Testimonials Section">
          <Suspense fallback={<AnimatedLoader section="Testimonials" />}>
            <Testimonials />
          </Suspense>
        </section>

        {/* Query Form Section */}
        <section aria-label="Contact or Query Form Section">
          <Suspense fallback={<AnimatedLoader section="Query Form" />}>
            <QueryForm />
          </Suspense>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Suspense fallback={<AnimatedLoader section="Footer" />}>
          <Footer />
        </Suspense>
      </footer>
    </>
  );
};

export default Index;
