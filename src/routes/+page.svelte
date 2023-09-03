<script lang="ts">
  import Navbar from '@/components/Navbar.svelte'
  import Footer from '@/components/Footer.svelte'
  import Button from '@/components/Button.svelte'
  import DialogCard from '@/components/Home/DialogCard.svelte'
</script>

<Navbar />
<section
  class="bg-[#FFE8E8] w-full h-[calc(100vh-2rem)] px-16 flex flex-col justify-center items-center"
>
  <div class="flex justify-center items-center">
    <img src="img/sun.png" class="w-[15em] animate-pulse" alt="OP Sun" />
  </div>
  <h1
    class="flex flex-row pt-10 text-black text-[36px] text-center font-bold justify-center"
  >
    Create, Nominate, and Discover.
  </h1>
  <p class="flex flex-row justify-center text-lg p-2 text-center">
    RetroPGF Hub is a platform for you to nominate and discover projects that
    are making a positive impact to the world.
  </p>
  <div class="mt-5 flex flex-row justify-center">
    <Button>Get Involved!</Button>
  </div>
  <div class="flex justify-center mt-16 animate-bounce">
    <img src="/img/arrow_down2.png" class="w-6" alt="arrow" />
  </div>
</section>

<section class="px-16 flex flex-col justify-center items-center">
  <div class="relative mt-20 text-center max-w-lg mx-auto">
    <svg
      class="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
        fill="currentColor"
      />
    </svg>

    <div class="relative z-10">
      <p class="text-2xl text-gray-800 md:text-3xl md:leading-normal">
        <em>
          Sparks of creativity ignite when ideas are shared, illuminating new
          pathways of innovation.
        </em>
      </p>
    </div>
  </div>
  <p
    class="flex flex-row justify-center text-lg text-gray-600 mt-12 text-center"
  >
    Come together to collaborate, share ideas which project is eligible for
    Retroactive Public Good Funding.
  </p>

  <div class="flex flex-col lg:flex-row gap-4 mt-8 mb-10">
    <DialogCard
      title="For Mentors"
      desc="Connect, inspire, and reap the fulfillment of guiding aspiring minds on other's journeys to success."
      buttonText="Discover"
      buttonPath="/projects"
    />
    <DialogCard
      title="For Creators"
      desc="Empower Your Vision: Embrace Possibilities on RetroPGF Hub. Refine your ideas, Getting support from the pros."
      buttonText="Nominate"
      buttonPath="/nominate-form"
    />
  </div>
</section>
<div class=" bg-[#FFE8E8] h-[50em] w-full">
  <div class="flex justify-center text-2xl font-semibold pt-10 mb-5">
    Retroactive Public Good Funding
  </div>
  <div class=" grid grid-cols-2 m-10 px-16">
    <div class="flex flex-col">
      <div class="font-bold text-xl">What is RetroPGF?</div>
      <div class="text-md">
        RetroPGF is Optimism’s process for funding public goods for the benefit
        of the Collective and beyond.
      </div>
    </div>
    <div class="flex flex-col justify-start mt-32">
      <div class="flex justify-end text-xl font-bold">
        And why are we funding those projects?
      </div>
      <div class="flex justify-end text-end text-md">
        <div>
          It is very simple to say that positive or useful projects should be
          rewarded, this is aligned with the Optimism's vision
          <span class="font-bold italic">"impact = profit"</span>. Moreover,
          this reward can bootstrap based on the early potential and promise of
          their projects.
        </div>
      </div>
    </div>
  </div>
</div>

<section />
<Footer />
