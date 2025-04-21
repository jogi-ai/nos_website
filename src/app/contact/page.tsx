import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, MessageCircle, Instagram } from "lucide-react"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Contact Us | National Outdoor School",
  description:
    "Get in touch with National Outdoor School. Have questions about our outdoor education courses? Contact us via email, whatsApp, or our online form.",
  keywords:
    "contact National Outdoor School, outdoor education contact, adventure course inquiry, kayaking course contact",
  openGraph: {
    title: "Contact Us | National Outdoor School",
    description:
      "Get in touch with National Outdoor School. Have questions about our outdoor education courses? Contact us via email, phone, whatsApp, or our online form.",
    url: "https://nationaloutdoorschool.com/contact",
    siteName: "National Outdoor School",
    images: [
      {
        url: "https://nationaloutdoorschool.com/og-image-home.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Contact National Outdoor School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | National Outdoor School",
    description:
      "Get in touch with National Outdoor School. Have questions about our outdoor education courses? Contact us via email, phone, WhatsApp, or our online form.",
    images: ["https://nationaloutdoorschool.com/og-image-home.jpg"], // Replace with actual image path
    creator: "@nationaloutdoorschool",
  },
  alternates: {
    canonical: "https://nationaloutdoorschool.com/contact",
  },
}
export default function ContactPage() {
  // WhatsApp number - replace with the actual number
  const whatsappNumber = "917019052454"

  return (
    <main className="min-h-screen bg-stone-50">
      <Navigation />
      <section className="py-16 bg-white pt-[150px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="font-serif text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                    <a href="mailto:info@nationaloutdoorschool.com">
                        <div className="bg-primary p-3 rounded-full mr-4">
                            <Mail className="h-6 w-6 text-white" />
                        </div>
                    </a>
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-1">Email</h3>
                        <p className="text-gray-700 mb-1">For general inquiries:</p>
                        <a href="mailto:info@nationaloutdoorschool.com" className="hover:underline">
                        info@nationaloutdoorschool.com
                        </a>
                    </div>
                </div>
                <div className="flex items-start">
                    <a href="https://www.instagram.com/nationaloutdoorschool" target="_blank">
                        <div className="bg-primary p-3 rounded-full mr-4">
                            <Instagram className="h-6 w-6 text-white" />
                        </div>
                    </a>
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-1">Follow</h3>
                        <p className="text-gray-700 mb-1">Follow us and stay updated:</p>
                        <a href="https://www.instagram.com/nationaloutdoorschool" target="_blank" className="hover:underline">
                        @nationaloutdoorschool
                        </a>
                    </div>
                </div>
                <div className="flex items-start">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <div className="bg-primary p-3 rounded-full mr-4">
                            <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                    </a>
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-1">WhatsApp</h3>
                        <p className="text-gray-700 mb-1">Chat with us directly:</p>
                        <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center  hover:underline"
                        >
                        <span>Start a chat</span>
                        <svg
                            className="ml-2 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-700 mb-8">
                  Have a question about our courses or want to learn more about National Outdoor School? Fill out the
                  form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
