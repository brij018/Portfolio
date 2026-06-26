import { useState } from "react";
import { useFadeUp } from "../hooks/useFadeUp";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const heading = useFadeUp(0);
  const leftCol = useFadeUp(100);
  const right = useFadeUp(200);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      await emailjs.send(
        "service_3l5vsvl",
        "template_hvaqegj",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "bypqB998DEE0g8Pj6",
      );
      setStatus({
        type: "success",
        msg: "Message sent! I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Try again." });
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="fade-up" ref={heading}>
          <p className="section-label">// let's talk</p>
          <h2 className="section-title">Get in Touch</h2>
        </div>
        <div className="contact-grid">
          <div className="fade-up" ref={leftCol}>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              I'm always open to interesting conversations, collaboration, or
              just a friendly hello. Whether you have a project in mind or want
              to connect — drop me a message.
            </p>
            <div className="contact-detail">
              <span className="icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <a
                href="mailto:rathodbrij101@gmail.com"
                style={{ color: "var(--muted)", textDecoration: "none" }}
              >
                rathodbrij101@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <span className="icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              </span>
              <span>Bhavnagar, Gujarat, India</span>
            </div>
            <div className="contact-detail">
              <span className="icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.27-.01-1.17-.01-2.13-3.2.69-3.88-1.38-3.88-1.38-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97.01 1.95.13 2.87.39 2.19-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.39-5.27 5.67.42.36.79 1.06.79 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56C20.71 21.42 24 17.1 24 12c0-6.35-5.15-11.5-12-11.5z" />
                </svg>
              </span>
              <a
                href="https://github.com/brij018"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--muted)", textDecoration: "none" }}
              >
                github.com/brij018
              </a>
            </div>
          </div>
          <form
            className="contact-form fade-up"
            ref={right}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            {status && (
              <p className={`form-status ${status.type}`}>{status.msg}</p>
            )}
            <button
              type="submit"
              className="btn-primary"
              disabled={sending}
              style={{ cursor: "none", opacity: sending ? 0.7 : 1 }}
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
