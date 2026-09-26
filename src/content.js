import React, { useEffect, useState } from "react";

export const CONTENT_STORAGE_KEY = "powerbase-site-content";

export const emptyContent = {
  pictures: [],
  programs: [],
  videos: [],
};

export const readContent = () => {
  try {
    const savedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
    return savedContent ? { ...emptyContent, ...JSON.parse(savedContent) } : emptyContent;
  } catch {
    return emptyContent;
  }
};

const PublicContent = () => {
  const [content, setContent] = useState(readContent);

  useEffect(() => {
    const refreshContent = () => setContent(readContent());
    window.addEventListener("storage", refreshContent);
    window.addEventListener("powerbase-content-updated", refreshContent);

    return () => {
      window.removeEventListener("storage", refreshContent);
      window.removeEventListener("powerbase-content-updated", refreshContent);
    };
  }, []);

  const hasContent = content.pictures.length || content.programs.length || content.videos.length;

  if (!hasContent) return null;

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {content.programs.length > 0 && (
          <div>
            <p className="eyebrow text-[var(--royal-blue)] text-center">In the field</p>
            <h2 className="text-4xl font-bold text-[var(--royal-blue)] text-center mb-8">Ministry in action.</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {content.programs.map((program) => (
                <article key={program.id} className="border border-gray-200 rounded-xl p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[var(--gold)] mb-2">{program.date}</p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-700">{program.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {content.pictures.length > 0 && (
          <div>
            <h2 className="text-4xl font-bold text-[var(--royal-blue)] text-center mb-8">Gallery</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {content.pictures.map((picture) => (
                <figure key={picture.id} className="overflow-hidden rounded-xl bg-gray-100">
                  <img src={picture.url} alt={picture.caption || "Powerbase ministry"} className="w-full aspect-square object-cover" />
                  {picture.caption && <figcaption className="p-3 text-gray-700">{picture.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        )}

        {content.videos.length > 0 && (
          <div>
            <p className="eyebrow text-[var(--royal-blue)] text-center">Tune in</p>
            <h2 className="text-4xl font-bold text-[var(--royal-blue)] text-center mb-8">Watch. Listen. Be transformed.</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {content.videos.map((video) => (
                <article key={video.id}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-900">
                    <iframe
                      title={video.title}
                      src={video.url}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-3">{video.title}</h3>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicContent;