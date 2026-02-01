"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { GlareCard } from "@/app/components/ui/glare-card";
import { AuroraBackground } from "@/components/ui/aurora-background";

const countryCodes = [
  { code: "+1", country: "United States/Canada", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+36", country: "Hungary", flag: "🇭🇺" },
  { code: "+40", country: "Romania", flag: "🇷🇴" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
  { code: "+421", country: "Slovakia", flag: "🇸🇰" },
  { code: "+385", country: "Croatia", flag: "🇭🇷" },
  { code: "+386", country: "Slovenia", flag: "🇸🇮" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+370", country: "Lithuania", flag: "🇱🇹" },
  { code: "+371", country: "Latvia", flag: "🇱🇻" },
  { code: "+372", country: "Estonia", flag: "🇪🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼" },
  { code: "+972", country: "Israel", flag: "🇮🇱" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+213", country: "Algeria", flag: "🇩🇿" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+256", country: "Uganda", flag: "🇺🇬" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+54", country: "Argentina", flag: "🇦🇷" },
  { code: "+56", country: "Chile", flag: "🇨🇱" },
  { code: "+57", country: "Colombia", flag: "🇨🇴" },
  { code: "+51", country: "Peru", flag: "🇵🇪" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪" },
  { code: "+593", country: "Ecuador", flag: "🇪🇨" },
  { code: "+506", country: "Costa Rica", flag: "🇨🇷" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+502", country: "Guatemala", flag: "🇬🇹" },
  { code: "+503", country: "El Salvador", flag: "🇸🇻" },
  { code: "+504", country: "Honduras", flag: "🇭🇳" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+592", country: "Guyana", flag: "🇬🇾" },
  { code: "+597", country: "Suriname", flag: "🇸🇷" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾" },
  { code: "+591", country: "Bolivia", flag: "🇧🇴" },
].sort((a, b) => a.country.localeCompare(b.country));

export default function ReferPage() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    countryCode: "+1",
    phone: "",
    paymentInfo: "",
    influencerName: "",
    influencerHandle: "",
    platform: "",
    followerCount: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4e05f63d-bac0-4bb2-b1d2-13eb348de58f",
          subject: `New Referral from ${formData.yourName}`,
          from_name: formData.yourName,
          email: formData.yourEmail,
          yourName: formData.yourName,
          yourEmail: formData.yourEmail,
          phone: `${formData.countryCode} ${formData.phone}`,
          paymentInfo: formData.paymentInfo,
          influencerName: formData.influencerName,
          influencerHandle: formData.influencerHandle,
          platform: formData.platform,
          followerCount: formData.followerCount,
          additionalInfo: formData.additionalInfo,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          yourName: "",
          yourEmail: "",
          countryCode: "+1",
          phone: "",
          paymentInfo: "",
          influencerName: "",
          influencerHandle: "",
          platform: "",
          followerCount: "",
          additionalInfo: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const filteredCountries = countryCodes.filter(
    (country) =>
      country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.code.includes(countrySearch)
  );

  const selectedCountry = countryCodes.find(
    (c) => c.code === formData.countryCode
  ) || countryCodes[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (code: string) => {
    setFormData({ ...formData, countryCode: code });
    setIsCountryDropdownOpen(false);
    setCountrySearch("");
  };


  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <Header />
        <main className="pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-500 hover:text-blue-400 mb-6 sm:mb-8 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black dark:text-white">
                  Referral Submitted!
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
                  We&apos;ve received your referral and will reach out to them within 48 hours. We&apos;ll keep you updated throughout the process!
                </p>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Header />
      
      {/* Hero Section with Aurora */}
      <AuroraBackground className="min-h-screen overflow-x-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-neutral-900 border border-blue-500 rounded-full text-xs sm:text-sm font-medium text-black dark:text-white">
              earn $1,000 per successful referral
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 mx-auto max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight px-4 text-black dark:text-white"
          >
            know an influencer?
            <br />
            <span className="text-neutral-600 dark:text-neutral-400">
              get paid to connect us.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-600 dark:text-neutral-400 mb-8 text-base sm:text-lg md:text-xl lg:text-2xl px-4"
          >
            If we build an app with someone you refer, the first $1,000 we make goes straight to you. No strings attached.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <button
              onClick={() => {
                const form = document.getElementById("referral-form");
                if (form) {
                  form.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity text-center"
            >
              Submit Referral
            </button>
          </motion.div>
        </div>
      </AuroraBackground>

      <main className="pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Form */}
          <motion.div
            id="referral-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlareCard className="bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 overflow-visible">
              <div className="p-6 sm:p-8 md:p-10 overflow-visible">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black dark:text-white">
                  Submit a Referral
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8">
                  We&apos;ll handle the rest. You get paid if we partner.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Your Info Section */}
                  <GlareCard className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 overflow-visible">
                    <h3 className="text-lg sm:text-xl font-semibold mb-6 text-black dark:text-white">
                      Your info
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="yourName"
                          className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="yourName"
                          name="yourName"
                          required
                          value={formData.yourName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="yourEmail"
                          className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="yourEmail"
                          name="yourEmail"
                          required
                          value={formData.yourEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                        >
                          Your Phone Number
                        </label>
                        <div className="flex gap-2">
                          <div className="relative w-40 sm:w-44 z-[100]" ref={countryDropdownRef}>
                            <button
                              type="button"
                              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                              className="w-full px-3 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors flex items-center justify-between"
                            >
                              <span className="flex items-center gap-2">
                                <span>{selectedCountry.flag}</span>
                                <span>{selectedCountry.code}</span>
                              </span>
                              <svg
                                className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {isCountryDropdownOpen && (
                              <div className="absolute z-[100] left-0 right-0 mt-1 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-2xl max-h-60 overflow-hidden overflow-x-hidden min-w-[200px]">
                                <div className="p-2 border-b border-neutral-300 dark:border-neutral-700">
                                  <input
                                    type="text"
                                    placeholder="Search country..."
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoFocus
                                  />
                                </div>
                                <div className="max-h-48 overflow-y-auto overflow-x-hidden">
                                  {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country) => (
                                      <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country.code)}
                                        className={`w-full px-3 py-2 text-sm text-left hover:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-colors flex items-center gap-2 whitespace-nowrap overflow-hidden ${
                                          formData.countryCode === country.code
                                            ? "bg-blue-500/20 dark:bg-blue-500/30"
                                            : ""
                                        }`}
                                      >
                                        <span className="flex-shrink-0">{country.flag}</span>
                                        <span className="font-medium flex-shrink-0">{country.code}</span>
                                        <span className="text-neutral-600 dark:text-neutral-400 truncate min-w-0">
                                          {country.country}
                                        </span>
                                      </button>
                                    ))
                                  ) : (
                                    <div className="px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 text-center">
                                      No countries found
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="1234567890"
                            className="flex-1 px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="paymentInfo"
                          className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                        >
                          Your Venmo / PayPal
                        </label>
                        <input
                          type="text"
                          id="paymentInfo"
                          name="paymentInfo"
                          required
                          value={formData.paymentInfo}
                          onChange={handleChange}
                          placeholder="@username or email"
                          className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                  </GlareCard>

                  {/* Influencer Section */}
                  <GlareCard className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-6 text-black dark:text-white">
                      Influencer you&apos;re referring
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="influencerName"
                          className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                        >
                          Their Name
                        </label>
                        <input
                          type="text"
                          id="influencerName"
                          name="influencerName"
                          required
                          value={formData.influencerName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="influencerHandle"
                          className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                        >
                          Their Handle
                        </label>
                        <input
                          type="text"
                          id="influencerHandle"
                          name="influencerHandle"
                          required
                          value={formData.influencerHandle}
                          onChange={handleChange}
                          placeholder="@handle"
                          className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="platform"
                            className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                          >
                            Primary Platform
                          </label>
                          <select
                            id="platform"
                            name="platform"
                            required
                            value={formData.platform}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          >
                            <option value="">Select platform</option>
                            <option value="instagram">Instagram</option>
                            <option value="tiktok">TikTok</option>
                            <option value="youtube">YouTube</option>
                            <option value="twitter">Twitter/X</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="followerCount"
                            className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                          >
                            Approx. Followers
                          </label>
                          <select
                            id="followerCount"
                            name="followerCount"
                            required
                            value={formData.followerCount}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          >
                            <option value="">Select range</option>
                            <option value="50k-100k">50K - 100K</option>
                            <option value="100k-500k">100K - 500K</option>
                            <option value="500k-1m">500K - 1M</option>
                            <option value="1m+">1M+</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="additionalInfo"
                          className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                        >
                          Anything else we should know? (optional)
                        </label>
                        <textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          rows={4}
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </GlareCard>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                      <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-blue-500 text-black rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-400 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Referral"}
                  </button>

                  <p className="text-xs sm:text-sm text-center text-neutral-600 dark:text-neutral-400">
                    We&apos;ll reach out to them within 48 hours and keep you updated.
                  </p>
                </form>
              </div>
            </GlareCard>
          </motion.div>

          {/* Payment Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 sm:mt-16"
          >
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black dark:text-white">
                How payment works:
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                If we successfully build and launch an app with the influencer you refer, the first $1,000 in revenue we receive from that partnership goes directly to you via Venmo or PayPal. We&apos;ll keep you updated throughout the process.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
