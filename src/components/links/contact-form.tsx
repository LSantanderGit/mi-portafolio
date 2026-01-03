import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Send } from "lucide-react"

const MAX_EMAIL = 100
const MAX_SUBJECT = 120
const MAX_MESSAGE = 1000

export default function ContactForm() {
  const { t } = useTranslation()

  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ email?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: typeof errors = {}

    if (!isValidEmail(email)) {
      newErrors.email = t("pages.links.form.errors.invalidEmail")
    }

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const mailto = `mailto:lucas.santander.dev@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`

    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-foreground">
        {t("pages.links.form.title")}
      </h2>

      {submitted && (
        <div className="mb-4 rounded-md bg-green-500/10 p-3 text-sm text-green-600">
          {t("pages.links.form.success")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              {t("pages.links.form.email")}
            </label>
            <input
              type="email"
              value={email}
              maxLength={MAX_EMAIL}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("pages.links.form.placeholder")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
              required
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>{errors.email}</span>
              <span>{email.length}/{MAX_EMAIL}</span>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              {t("pages.links.form.subject")}
            </label>
            <input
              type="text"
              value={subject}
              maxLength={MAX_SUBJECT}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
              required
            />
            <div className="mt-1 text-right text-xs text-muted-foreground">
              {subject.length}/{MAX_SUBJECT}
            </div>
          </div>

          {/* Message (full width) */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-foreground">
              {t("pages.links.form.message")}
            </label>
            <textarea
              value={message}
              maxLength={MAX_MESSAGE}
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
              required
            />
            <div className="mt-1 text-right text-xs text-muted-foreground">
              {message.length}/{MAX_MESSAGE}
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Send className="h-4 w-4" />
          {t("pages.links.form.send")}
        </button>
      </form>
    </div>
  )
}
