// src/app/components/IntroVideo.tsx
export default function IntroVideo() {
  return (
    <section
      id="introduction"
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12"
    >
      <h2
        className="text-3xl font-extrabold text-slate-900 mb-6 text-center"
        style={{ color: "#114b79" }}
      >
        ImageAssist Overview Video
      </h2>
      <p className="mt-5 text-lg text-slate-700 text-center">
        Consistent, HIPAA-compliant clinical photography made simple
      </p>
      <br />

      {/* Responsive YouTube embed (16:9) */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-xl"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          src="https://www.youtube.com/embed/jHBM3hYFi1k"
          title="ImageAssist Introduction"
          className="absolute left-0 top-0 h-full w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
