"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GlareCard } from "@/app/components/ui/glare-card";

const steps = [
  {
    number: "1",
    description: "We review your application within 48 hours",
  },
  {
    number: "2",
    description: "If it's a fit, we schedule a discovery call",
  },
  {
    number: "3",
    description: "We agree on equity split and sign partnership",
  },
  {
    number: "4",
    description: "We start building—you start earning",
  },
];

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

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    platform: "",
    followerCount: "",
    socialHandle: "",
    audienceDescription: "",
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
          subject: `New Partnership Application from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          name: formData.name,
          phone: `${formData.countryCode} ${formData.phone}`,
          platform: formData.platform,
          followerCount: formData.followerCount,
          socialHandle: formData.socialHandle,
          audienceDescription: formData.audienceDescription,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          countryCode: "+1",
          phone: "",
          platform: "",
          followerCount: "",
          socialHandle: "",
          audienceDescription: "",
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

  const submittedContent = (
    <section id="apply" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black dark:text-white">Application Submitted!</h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              We&apos;ve received your application and will review it within 48 hours. We&apos;ll be in touch soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const formContent = (
    <section id="apply" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4 text-black dark:text-white">
                  ready to build your app?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Apply for a partnership. Tell us about your audience and your vision. If we&apos;re a good fit, we&apos;ll build your app for free and you keep up to 50% equity.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-3 sm:space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-black font-bold flex items-center justify-center text-xs sm:text-sm">
                      {step.number}
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-0.5 sm:pt-1">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlareCard className="bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300">
                <form
                  onSubmit={handleSubmit}
                  className="p-5 sm:p-6 space-y-3 sm:space-y-4"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-1 text-black dark:text-white">Apply for Partnership</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
                    We review every application personally.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                    >
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <div className="relative w-40 sm:w-44" ref={countryDropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors flex items-center justify-between"
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
                          <div className="absolute z-50 left-0 right-0 mt-1 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-hidden overflow-x-hidden min-w-[200px]">
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
                        className="flex-1 px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="platform"
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Primary Platform
                      </label>
                      <select
                        id="platform"
                        name="platform"
                        required
                        value={formData.platform}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Follower Count
                      </label>
                      <select
                        id="followerCount"
                        name="followerCount"
                        required
                        value={formData.followerCount}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                      htmlFor="socialHandle"
                      className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                    >
                      Social Handle
                    </label>
                    <input
                      type="text"
                      id="socialHandle"
                      name="socialHandle"
                      required
                      value={formData.socialHandle}
                      onChange={handleChange}
                      placeholder="@yourhandle"
                      className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="audienceDescription"
                      className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                    >
                      What types of people watch your videos?
                    </label>
                    <textarea
                      id="audienceDescription"
                      name="audienceDescription"
                      required
                      rows={3}
                      value={formData.audienceDescription}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                      <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-blue-500 text-black rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-400 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>

                  <p className="text-xs text-center text-neutral-600 dark:text-neutral-400">
                    We respond to every application within 48 hours.
                  </p>
                </form>
              </GlareCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );

  return isSubmitted ? submittedContent : formContent;
};
