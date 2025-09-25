// src/app/components/IntroVideo.tsx
export default function IntroVideo() {
  return (
    <section id="introduction" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-6 text-center" style={{ color: "#114b79" }}>
        ImageAssist Overview Video
      </h2>
      <p className="mt-5 text-lg text-slate-700 text-center">
        Consistent, HIPAA-compliant clinical photography made simple
      </p>
      <br />

      {/* Responsive Vimeo embed (16:9) */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          src="https://player.vimeo.com/video/1121673859?badge=0&autopause=0&byline=0&title=0"
          title="ImageAssist Introduction"
          className="absolute left-0 top-0 h-full w-full"
          // React/Next attribute names must be camelCase:
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
