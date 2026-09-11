import React, { useState } from "react";
import { CONTENT_STORAGE_KEY, readContent } from "./content";

const ADMIN_SESSION_KEY = "powerbase-admin-authenticated";

const saveContent = (content) => {
  localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event("powerbase-content-updated"));
};

const newId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    sessionStorage.getItem(ADMIN_SESSION_KEY) === "true"
  );
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const [content, setContent] = useState(readContent);
  const [pictureCaption, setPictureCaption] = useState("");
  const [program, setProgram] = useState({ title: "", date: "", description: "" });
  const [video, setVideo] = useState({ title: "", url: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const configuredPasskey = process.env.REACT_APP_ADMIN_PASSKEY || process.env.REACT_APP_ADMIN_ACCESS_CODE;
    if (!configuredPasskey) {
      setError("Admin passkey is not configured yet.");
      return;
    }

    if (accessCode !== configuredPasskey) {
      setError("That passkey is not valid.");
      return;
    }

    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    setIsAuthenticated(true);
    setAccessCode("");
    setError("");
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
  };

  const updateContent = (nextContent) => {
    setContent(nextContent);
    saveContent(nextContent);
  };

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updateContent({
          ...content,
          pictures: [...content.pictures, { id: newId(), url: reader.result, caption: pictureCaption }],
      });
      setPictureCaption("");
      event.target.value = "";
    };
    reader.onerror = () => setError("That picture could not be added.");
    reader.readAsDataURL(file);
  };

  const addProgram = (event) => {
    event.preventDefault();
    updateContent({ ...content, programs: [...content.programs, { id: newId(), ...program }] });
    setProgram({ title: "", date: "", description: "" });
  };

  const addVideo = (event) => {
    event.preventDefault();
    updateContent({ ...content, videos: [...content.videos, { id: newId(), ...video }] });
    setVideo({ title: "", url: "" });
  };

  const removeItem = (type, id) => {
    updateContent({ ...content, [type]: content[type].filter((item) => item.id !== id) });
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin sign in</h1>
          <p className="text-gray-600 mb-6">Enter the administrator passkey to continue.</p>
          <label htmlFor="admin-passkey" className="block text-sm font-medium text-gray-700 mb-2">
            Admin passkey
          </label>
          <input
            id="admin-passkey"
            type="password"
            value={accessCode}
            onChange={(event) => setAccessCode(event.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
            autoComplete="current-password"
            required
          />
          {error && <p className="text-red-600 text-sm mb-4" role="alert">{error}</p>}
          <button type="submit" className="w-full rounded-lg bg-sky-600 text-white py-2 font-semibold hover:bg-sky-700">
            Enter admin area
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin dashboard</h1>
          <button onClick={handleLogout} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50">
            Sign out
          </button>
        </div>
        <p className="text-gray-600 mb-8">Manage the content visitors see on the main page.</p>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Pictures</h2>
            <p className="text-sm text-gray-600 mb-5">Add a picture to the public gallery.</p>
            <input
              type="text"
              value={pictureCaption}
              onChange={(event) => setPictureCaption(event.target.value)}
              placeholder="Caption (optional)"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
            />
            <label className="block cursor-pointer rounded-lg bg-sky-600 text-white text-center py-2 font-semibold hover:bg-sky-700">
              Choose picture
              <input type="file" accept="image/*" onChange={handlePictureUpload} className="hidden" />
            </label>
            <div className="mt-5 space-y-3">
              {content.pictures.map((picture) => (
                <div key={picture.id} className="flex items-center gap-3">
                  <img src={picture.url} alt="" className="w-12 h-12 object-cover rounded" />
                  <span className="text-sm text-gray-700 flex-1 truncate">{picture.caption || "Untitled picture"}</span>
                  <button onClick={() => removeItem("pictures", picture.id)} className="text-sm text-red-600">Delete</button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Upcoming programs</h2>
            <form onSubmit={addProgram}>
              <input
                type="text"
                value={program.title}
                onChange={(event) => setProgram({ ...program, title: event.target.value })}
                placeholder="Program title"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
                required
              />
              <input
                type="text"
                value={program.date}
                onChange={(event) => setProgram({ ...program, date: event.target.value })}
                placeholder="Date and time"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
                required
              />
              <textarea
                value={program.description}
                onChange={(event) => setProgram({ ...program, description: event.target.value })}
                placeholder="Description"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
                rows="3"
                required
              />
              <button type="submit" className="w-full rounded-lg bg-sky-600 text-white py-2 font-semibold hover:bg-sky-700">Add program</button>
            </form>
            <div className="mt-5 space-y-3">
              {content.programs.map((item) => (
                <div key={item.id} className="border-t border-gray-200 pt-3">
                  <div className="flex gap-3">
                    <div className="flex-1"><p className="font-semibold text-gray-900">{item.title}</p><p className="text-sm text-gray-600">{item.date}</p></div>
                    <button onClick={() => removeItem("programs", item.id)} className="text-sm text-red-600">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Videos</h2>
            <p className="text-sm text-gray-600 mb-5">Add a YouTube embed URL.</p>
            <form onSubmit={addVideo}>
              <input
                type="text"
                value={video.title}
                onChange={(event) => setVideo({ ...video, title: event.target.value })}
                placeholder="Video title"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
                required
              />
              <input
                type="url"
                value={video.url}
                onChange={(event) => setVideo({ ...video, url: event.target.value })}
                placeholder="https://www.youtube.com/embed/..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
                required
              />
              <button type="submit" className="w-full rounded-lg bg-sky-600 text-white py-2 font-semibold hover:bg-sky-700">Add video</button>
            </form>
            <div className="mt-5 space-y-3">
              {content.videos.map((item) => (
                <div key={item.id} className="flex gap-3 border-t border-gray-200 pt-3">
                  <span className="text-sm text-gray-700 flex-1 truncate">{item.title}</span>
                  <button onClick={() => removeItem("videos", item.id)} className="text-sm text-red-600">Delete</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Admin;