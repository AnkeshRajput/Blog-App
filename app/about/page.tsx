// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-16 px-4">
      <div className="mx-auto w-full max-w-6xl">
        {/* Page header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <Image
                src="https://hearinghope.in/wp-content/uploads/2024/09/Logo.png"
                alt="HearingHope Logo"
                fill
                sizes="56px"
                className="object-contain p-2"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                About HearinghHope Blogs
              </h1>
              <p className="text-gray-500 text-base md:text-lg">
                Stories, guidance, and resources for better hearing and speech
                health.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/articles"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read Articles
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Share Your Story
            </Link>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left: content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-10">
              {/* Mission */}
              <section className="mb-8">
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  <span className="font-semibold text-blue-600">
                    HearinghHope Blogs
                  </span>{" "}
                  is a community-driven space where people living with
                  hearing-related challenges, caregivers, clinicians, and
                  advocates share real experiences, practical tips, and hopeful
                  perspectives. Our goal is to make reliable information and
                  lived wisdom easier to find, understand, and act on.
                </p>
              </section>

              {/* What you will find */}
              <section className="mb-8">
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  What You&apos;ll Find Here
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      Personal Journeys
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Honest stories about diagnosis, therapy, devices, and
                      daily life.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      Guides & Tips
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Communication strategies, school/work support, caregiver
                      tools, and accessibility.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      Tech & Devices
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Hearing aids, cochlear implants, apps, and assistive
                      technologies in simple terms.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      Speech & Therapy
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Insights from clinicians and families on goals, progress,
                      and motivation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Values */}
              <section className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-7">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  🌱 Our Values
                </h3>
                <p className="text-gray-800 text-base leading-relaxed">
                  We commit to <span className="font-semibold">empathy</span>,{" "}
                  <span className="font-semibold">clarity</span>, and{" "}
                  <span className="font-semibold">accessibility</span>. Every
                  article aims to be respectful, inclusive, and helpful for
                  readers at different stages — from first-time screening to
                  long-term therapy and assistive tech.
                </p>
              </section>
            </div>
          </div>

          {/* Right: side panel */}
          <aside className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Who We Serve
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>• Children, teens, and adults with hearing loss</li>
                <li>• Parents & caregivers</li>
                <li>• Speech-language therapists & audiologists</li>
                <li>• Educators & accessibility advocates</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Get Involved
              </h3>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Have an experience, tip, or question to share? We welcome
                community submissions and constructive discussions.
              </p>
              <a
                href="/dashboard"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
              >
                Submit Your Story
              </a>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-md">
              <h3 className="text-lg font-semibold text-amber-800">
                Disclaimer
              </h3>
              <p className="mt-2 text-amber-900/90 text-sm leading-relaxed">
                HearinghHope Blogs shares experiences and general information
                for educational purposes only and does not substitute
                professional medical advice. Always consult a qualified
                audiologist, speech-language pathologist, or healthcare provider
                for diagnosis and treatment decisions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
