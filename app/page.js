import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[rgb(24,0,72)] text-center text-white">
      <Head>
        <title>Get £50 with Octopus Energy</title>
        <meta name="description" content="Switch to Octopus Energy and get £50 for free! Join the best renewable energy provider today." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Get £50 with Octopus Energy" />
        <meta property="og:description" content="Get £50 when you switch to Octopus Energy with this exclusive referral code! This Octopus Energy referral link is your key to unlocking a £50 reward when you sign up. It's the same as a ‘Recommend a Friend’ offer, giving you and your friend £50 each when you join the UK’s leading renewable energy provider. Don't miss out—start saving with Octopus Energy today!" />
        <meta property="og:url" content="https://octopus-landing.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get £50 When You Join Octopus Energy!" />
        <meta name="twitter:description" content="Sign up for Octopus Energy today and receive £50! Switch to clean, green energy." />
        <meta name="twitter:image" content="https://octopus-landing.vercel.app/logo.png" />
      </Head>
      
      <main className="bg-white p-8 rounded-xl shadow-lg max-w-lg text-gray-900 flex flex-col items-center">
        <img src="/logo.png" alt="Octopus Energy logo promoting £50 reward" className="mb-4 w-32 mx-auto" />
        <h1 className="text-4xl font-extrabold mb-4 text-center">Get £50 when you join Octopus Energy!</h1>
        <h2 className="text-lg mb-6 text-center">Switch to clean, renewable energy and enjoy £50 credit for both of us!</h2>
        <a
          href="https://share.octopus.energy/immense-tuna-791"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claim Your £50 Now
        </a>
      </main>
    </div>
  );
}