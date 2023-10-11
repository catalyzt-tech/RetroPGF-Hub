<script lang="ts">
  import Button from '@/components/Button.svelte'
  import DialogCard from '@/components/Home/DialogCard.svelte'
</script>

<section
  class="changebackground w-full h-[calc(100vh-2rem)] px-16 flex flex-col justify-center items-center"
>
  <div
    class="flex justify-center items-center transform ease-in-out duration-700"
  >
    <img
      src="img/retropgf_sun.svg"
      class="w-[10em] md:w-[15em] animate-pulse"
      alt="OP Sun"
    />
  </div>
  <h1
    class="flex flex-row pt-10 text-black text-[24px] sm:text-[36px] text-center font-semibold justify-center"
  >
    Create, Nominate, and Discover.
  </h1>
  <p class="flex flex-row justify-center sm:text-lg p-2 text-center font-rubik">
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
<section />
<section class="relative px-16 flex flex-col justify-center items-center">
  <div class="absolute top-0 right-0">
    <img
      src="/img/op_phoenix.png"
      alt="phoenix"
      class="w-[300px] sm:w-[350px] 2xl:w-[400px]"
    />
  </div>
  <div class="relative mt-64 lg:mt-20 text-center max-w-lg mx-auto">
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

  <div class="flex flex-col lg:flex-row gap-12 mt-8">
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
      buttonPath="/suggest-form"
    />
  </div>
  <div>
    <div
      class="pt-[1em] w-full lg:pt-32 max-h-[25em] sm:max-h-[30em] md:max-h-[35em] lg:max-h-[25em] lg:max-w-[70em] flex justify-center items-center lg:overflow-hidden"
    >
      <img
        src="/img/op_city.png"
        alt="op_city"
        class="max-w-[140%] md:max-w-[120%] lg:max-w-full"
      />
    </div>
  </div>
</section>
<section>
  <div class=" changebackground p-6 w-full">
    <div
      class="flex text-center justify-center text-[2em] italic font-semibold pt-10"
    >
      Retroactive Public Goods Funding
    </div>
    <div
      class="flex text-center justify-center text-[1.5em] italic font-medium"
    >
      <div class=" mt-1 px-5 py-1 bg-[#FF0000] text-white rounded-full">
        RetroPGF
      </div>
    </div>
    <div class="flex flex-col items-center my-10">
      <img
        src="img/retropgf_round.png"
        alt=""
        class="max-w-screen lg:max-w-[60em] opacity-70"
      />
    </div>
    <div class=" md:grid md:grid-cols-2 md:px-16">
      <div class="flex flex-col">
        <div class="font-bold text-xl">What is RetroPGF?</div>
        <div class="text-md mt-2">
          RetroPGF is Optimism’s process for funding public goods for the
          benefit of the Collective. Beyond that, it is fantastic default option
          for being rewarded for the work that you do. RetroPGF is distributed
          after impact has already been made and there is never a 100%
          likelihood that any given project will be rewarded.
        </div>
      </div>
    </div>
    <div class=" md:grid md:grid-cols-2 mt-5 md:px-16">
      <div />
      <div class="flex flex-col md:justify-start">
        <div class="flex md:justify-end text-xl font-bold">
          And why are we funding those projects?
        </div>
        <div class="flex md:justify-end md:text-end text-md mt-2">
          <div>
            It is very simple to say that positive or useful projects should be
            rewarded, this is aligned with the Optimism's vision
            <span class="font-bold italic">"impact = profit"</span>. Moreover,
            this reward can bootstrap based on the early potential and promise
            of their projects.
          </div>
        </div>
      </div>
    </div>
    <div class=" md:grid md:grid-cols-2 mt-5 md:px-16">
      <div class="flex flex-col md:justify-start">
        <div class="font-bold text-xl">How to get involved?</div>
        <div class="text-md mt-2">
          <div>
            <span class="font-medium">
              - If you’re a developer, check out the</span
            >
            <a
              href="https://github.com/ethereum-optimism/ecosystem-contributions#readme"
              target="_blank"
              class="underline hover:text-[#FF0000] transition ease-linear duration-200"
              >Ecosystem Contributions board</a
            > for a range of ideas and projects to get started on.
          </div>
          <div>
            <span class="font-medium"> - If you’re a community builder,</span>
            check out the NERD program (support, onboarding) or Ambassador program
            (marketing, business development).
          </div>
        </div>
      </div>
    </div>
    <div class=" md:grid md:grid-cols-2 mt-5 md:px-16">
      <div />
      <div class="flex flex-col md:justify-start">
        <div class="flex md:justify-end text-xl font-bold">
          Public goods supercharge Optimism's ecosystem
        </div>
        <div class="flex md:justify-end md:text-end text-md mt-2">
          <div>
            If you've contributed to the development and use of Optimism, you
            might be eligible for funding from RetroPGF 3. They're looking to
            support any public good that helps with the OP Stack.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .changebackground {
    background: linear-gradient(-45deg, #fbb29c, #ffd490, #fba5a5, #fbb27d);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
