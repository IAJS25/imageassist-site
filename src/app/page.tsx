import Header from "./components/Header";
import Script from "next/script";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


/** Simple reusable row (no hooks, server-safe) */
function FeatureRow({
  title,
  description,
  bullets = [],
  imageSrc,
  imageAlt,
  reverse = false, // when true → image left, text right
}: {
  title: string;
  description: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
      }`}
    >
      {/* Text */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        {bullets.length > 0 && (
          <ul className="space-y-2 text-slate-700">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: "#114b79" }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image */}
      <div className="rounded-2xl shadow-xl ring-1 ring-slate-200 overflow-hidden bg-white">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: "#114b79" }}>
              The New Standard in Clinical Photography
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-xl">
              Consistent, HIPAA-compliant before-and-after photos with SmartGuides, background removal, and EMR integrations.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://app.imageassist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl px-5 py-3 text-white font-medium shadow hover:opacity-90"
                style={{ background: "#114b79" }}
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 bg-white hover:bg-slate-50"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl shadow-xl ring-1 ring-slate-200 overflow-hidden">
            <img
              src="/ImageAssist-hero.png"
              alt="ImageAssist app screenshot"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features – alternating rows */}
      <section id="features" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900" >
              Powerful Features for Clinical Photography
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              ImageAssist helps your team capture consistent, professional photos—securely and at scale.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1) SmartGuides — text left, image right */}
            <FeatureRow
              title="SmartGuides"
              description="ASPS guideline–aligned overlays and instant alignment feedback help anyone capture flawless before-and-after photos."
              bullets={[
                "50+ face & body SmartGuides",
                "Instant red-to-green alignment",
                "Easy for any staff member",
              ]}
              imageSrc="/smartguides-iphone.png"
              imageAlt="SmartGuides on iPhone"
            />

            {/* 2) Background Removal — image left, text right */}
            <FeatureRow
              reverse
              title="Background Removal"
              description="Automatically isolate the subject and set a clean, on-brand background so every image looks professional."
              bullets={[
                "Automatic subject isolation",
                "Custom brand backgrounds",
                "Polished results (no Photoshop)",
              ]}
              imageSrc="/background-removal-iphone.png"
              imageAlt="Background removal on iPhone"
            />

            {/* 3) Patient Photo Management — text left, image right */}
            <FeatureRow
              title="Patient Photo Management"
              description="Find photos instantly and keep everything organized by patient, date, or procedure—on mobile and web."
              bullets={[
                "Search by name, date, procedure",
                "Session history at a glance",
                "Works across iPhone, iPad, web",
              ]}
              imageSrc="/photo-management-iphone.png"
              imageAlt="Patient photo management on iPhone"
            />

            {/* 4) HIPAA Compliance — image left, text right */}
            <FeatureRow
              reverse
              title="HIPAA Compliance"
              description="Protect patient privacy with secure, HIPAA-compliant cloud storage. Photos never live on personal camera rolls."
              bullets={[
                "HIPAA-compliant cloud",
                "No images on personal devices",
                "Audit-friendly workflow",
              ]}
              imageSrc="/hipaa-iphone.png"
              imageAlt="HIPAA-compliant storage on iPhone"
            />

            {/* 5) EMR Integrations — text left, image right */}
            <FeatureRow
              title="EMR Integrations"
              description="Connect ImageAssist to systems like 4D EMR for seamless photo documentation and export."
              bullets={[
                "4D EMR integration",
                "Auto file naming on export",
                "API & enterprise options",
              ]}
              imageSrc="/emr-integration-iphone.png"
              imageAlt="EMR integration on iPhone"
            />

            {/* 6) HIPAA Compliance — image left, text right */}
            <FeatureRow
              reverse
              title="Built for Teams"
              description="Protect patient privacy with secure, HIPAA-compliant cloud storage. Photos never live on personal camera rolls."
              bullets={[
                "HIPAA-compliant cloud",
                "No images on personal devices",
                "Audit-friendly workflow",
              ]}
              imageSrc="/hipaa-iphone.png"
              imageAlt="HIPAA-compliant storage on iPhone"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
<section id="cta" className="bg-[#114b79] py-20">
  <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
      See how easy patient photos can be
    </h2>
    <p className="text-lg text-slate-100 mb-8">
      Try ImageAssist free for 14 days. Then $40/month. No long-term commitment.
      Cancel anytime. It only takes 30 seconds to sign up!
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://app.imageassist.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold text-[#114b79] bg-white shadow hover:bg-slate-100 transition"
      >
        Get Started
      </a>
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold text-white border border-white hover:bg-white/10 transition"
      >
        Book a Demo
      </a>
    </div>
  </div>
</section>



      {/* Testimonials */}
<section id="testimonials" className="bg-[#f8fafc] py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-[#114b79] text-center mb-12">
      Why Clinicians Love ImageAssist
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
        <p className="text-slate-800">
          “Unless your practice has a professional photographer this app is for you. 
          Guesswork is gone and images are standardized and publication quality—so our nurses 
          and assistants can take great photos.”
        </p>
        <hr className="my-4 border-slate-200" />
        <div className="flex items-center gap-3">
          <img src="/testimonials/foad-nahai.webp" alt="Dr. Foad Nahai"
               className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
          <div>
            <div className="text-sm font-medium text-slate-900">Dr. Foad Nahai</div>
            <div className="text-xs text-slate-500">MetroDerm • Past President, ISAPS</div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
        <p className="text-slate-800">
          “ImageAssist is a game-changer for consistent, professional before-and-after photos. 
          Easy to use, customizable, and essential for my practice.”
        </p>
        <hr className="my-4 border-slate-200" />
        <div className="flex items-center gap-3">
          <img src="/testimonials/rahman-barry.webp" alt="Dr. Rahman Barry"
               className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
          <div>
            <div className="text-sm font-medium text-slate-900">Dr. Rahman Barry</div>
            <div className="text-xs text-slate-500">Wake Plastic Surgery</div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
        <p className="text-slate-800">
          “Our clinic nurses love ImageAssist. It makes it easy to capture consistent, uniform 
          photos—and it’s made a big difference in our workflow.”
        </p>
        <hr className="my-4 border-slate-200" />
        <div className="flex items-center gap-3">
          <img src="/testimonials/basil-schaheen.webp" alt="Dr. Basil Schaheen"
               className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
          <div>
            <div className="text-sm font-medium text-slate-900">Dr. Basil Schaheen</div>
            <div className="text-xs text-slate-500">Northeast Georgia Plastic Surgery</div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
        <p className="text-slate-800">
          “ImageAssist has transformed how I capture consistent, professional before-and-after 
          photos to document my clients’ corrective journeys.”
        </p>
        <hr className="my-4 border-slate-200" />
        <div className="flex items-center gap-3">
          <img src="/testimonials/michele-crain.webp" alt="Michele Crain"
               className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
          <div>
            <div className="text-sm font-medium text-slate-900">Michele Crain</div>
            <div className="text-xs text-slate-500">Face Forward Correctives</div>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
        <p className="text-slate-800">
          “ImageAssist makes patient photos fast, professional, and HIPAA-compliant. 
          An essential tool for any oculoplastic practice.”
        </p>
        <hr className="my-4 border-slate-200" />
        <div className="flex items-center gap-3">
          <img src="/testimonials/nicolas-biro.webp" alt="Nicolas Biro, MD"
               className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
          <div>
            <div className="text-sm font-medium text-slate-900">Nicolas Biro, MD</div>
            <div className="text-xs text-slate-500">Pacific Eye Institute</div>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
        <p className="text-slate-800">
          “Uploading high-quality photos directly into our EMR is seamless. 
          ImageAssist fits our workflow and keeps everything organized.”
        </p>
        <hr className="my-4 border-slate-200" />
        <div className="flex items-center gap-3">
          <img src="/testimonials/christopher-stewart.webp" alt="Dr. Christopher M. Stewart"
               className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
          <div>
            <div className="text-sm font-medium text-slate-900">Dr. Christopher M. Stewart</div>
            <div className="text-xs text-slate-500">Stewart Center for Plastic Surgery & Hand</div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

<Pricing />

{/* FAQ */}
<section id="faqs" className="bg-[#ffffff] py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-[#114b79] text-center">
      Frequently Asked Questions
    </h2>
    <p className="mt-3 text-center text-slate-600">
      Got questions? We’ve got quick, clear answers—so you can focus on patient care, not troubleshooting.
    </p>

    <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {/* Q1 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          What was that SmartGuides thing all about?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          SmartGuides guide you to align body areas perfectly for consistent clinical photos.
          It’s like a green light for great photography.
        </p>
      </div>

      {/* Q2 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          Is ImageAssist HIPAA-compliant?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Absolutely. We use encrypted cloud storage and never store photos on your personal camera roll.
        </p>
      </div>

      {/* Q3 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          Is it easy for staff to learn?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Very. We designed ImageAssist to be intuitive—even new users can capture
          consistent photos on day one.
        </p>
      </div>

      {/* Q4 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          How does background removal work?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          With one click, ImageAssist automatically removes distractions,
          giving you clean, professional-looking images every time.
        </p>
      </div>

      {/* Q5 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          Does it work with EMRs?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Yes! We integrate with 4D EMR, ARCC, and more. We also support custom workflows
          for most HIPAA-compliant platforms.
        </p>
      </div>

      {/* Q6 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          Do I need special equipment?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Nope! Just an iPhone or iPad. No cords, no complicated setup—just download and go.
        </p>
      </div>

      {/* Q7 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          Can I search for patient photos easily?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Yep—just type a patient name, procedure, or date. Everything’s organized and easy to find in seconds.
        </p>
      </div>

      {/* Q8 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          Can I use ImageAssist with my whole team?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          You bet. Our Teams subscription makes it easy to add users, share access, and manage permissions.
        </p>
      </div>

      {/* Q9 */}
      <div>
        <h3 className="text-base font-semibold text-slate-900">
          What if I need help?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Email us at <a href="mailto:hello@imageassist.com" className="underline">hello@imageassist.com</a>.
          We’re real people, and we’re happy to walk you through it.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Team */}
<section id="team" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
  <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Meet the ImageAssist Team</h2>

  <div className="grid gap-8 sm:grid-cols-2">
    {/* Dr. Michael Golinko */}
    <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200 text-center">
      <img
        src="/golinko.png"
        alt="Dr. Michael Golinko"
        className="mx-auto h-32 w-32 rounded-full object-cover ring-2"
        style={{ ringColor: "#4fafd1" }}
      />
      <h3 className="mt-4 text-lg font-semibold text-slate-900">Dr. Michael Golinko</h3>
      <p className="text-sm text-slate-500 mb-3">Co-Founder & CEO</p>
      <p className="text-slate-700 text-sm mb-4">
        Board-certified plastic & reconstructive surgeon and clinical innovator focused on
        standardized imaging and better outcomes. Dr. Golinko leads product vision and clinical
        validation for ImageAssist.
      </p>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:opacity-90 transition"
        style={{ background: "#4fafd1" }}
        aria-label="Dr. Michael Golinko on LinkedIn"
      >
        {/* LinkedIn SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 
            5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.73C5.53 7.73 4.75 6.94 4.75 5.98c0-.97.78-1.76 
            1.75-1.76S8.25 5 8.25 5.98c0 .97-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
            0-2.16 1.46-2.16 2.97V19h-3V9h2.88v1.37h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.63V19z"/>
        </svg>
      </a>
    </div>

    {/* Jonathan Sadlowe, MBA */}
    <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200 text-center">
      <img
        src="/jonathan-sadlowe.png"
        alt="Jonathan Sadlowe, MBA"
        className="mx-auto h-32 w-32 rounded-full object-cover ring-2"
        style={{ ringColor: "#4fafd1" }}
      />
      <h3 className="mt-4 text-lg font-semibold text-slate-900">Jonathan Sadlowe, MBA</h3>
      <p className="text-sm text-slate-500 mb-3">Co-Founder & COO</p>
      <p className="text-slate-700 text-sm mb-4">
        Operator and marketer with experience across healthcare, venture, and SaaS. Jonathan leads
        go-to-market, partnerships, and day-to-day operations for ImageAssist.
      </p>
      <a
        href="https://www.linkedin.com/in/jonathansadlowe/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:opacity-90 transition"
        style={{ background: "#4fafd1" }}
        aria-label="Jonathan Sadlowe on LinkedIn"
      >
        {/* LinkedIn SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 
            5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.73C5.53 7.73 4.75 6.94 4.75 5.98c0-.97.78-1.76 
            1.75-1.76S8.25 5 8.25 5.98c0 .97-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
            0-2.16 1.46-2.16 2.97V19h-3V9h2.88v1.37h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.63V19z"/>
        </svg>
      </a>
    </div>
  </div>
</section>

{/* Contact / Book a Demo */}
<section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
  <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
    Contact ImageAssist
  </h2>
  <p className="text-lg text-slate-700 text-center mb-8">
    Tell us about your clinic or book a live demo. We’ll get back to you quickly.
  </p>

  <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
    {/* Inline Typeform widget — give it an explicit height */}
    <div
      data-tf-widget="Y01K5HHCVCFVC10D4P7EN79R75W"
      data-tf-medium="snippet"
      style={{ width: "100%", height: "640px" }}
    ></div>
  </div>

  {/* Load the embed script once (https preferred) */}
  <Script src="https://embed.typeform.com/next/embed.js" strategy="lazyOnload" />

  <p className="mt-6 text-center text-sm text-slate-500">
    We respect your privacy. Patient photos stay HIPAA-compliant and never on personal devices.
  </p>
</section>
<Footer />
    </>
  );
}
