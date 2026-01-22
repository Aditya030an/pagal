import React, { useState } from "react";

const WebsiteCostPremium = () => {
  const PRICE = {
    staticPage: 1000,
    dynamicPage: 1500,
    admin: 5000,
    ecommerce: 15000,
    seo: 8000,
    animation: 3000,
  };

  const DISCOUNT_PERCENT = 10;

  const [siteType, setSiteType] = useState("Corporate");
  const [staticPages, setStaticPages] = useState(5);
  const [dynamicPages, setDynamicPages] = useState(2);
  const [features, setFeatures] = useState({
    admin: true,
    ecommerce: false,
    seo: false,
    animation: false,
  });

  const [showDiscountForm, setShowDiscountForm] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [priceUnlocked, setPriceUnlocked] = useState(false);

  /* ---------- TYPE LOGIC ---------- */

  const applyTypeRules = (type) => {
    setSiteType(type);
    setDiscountApplied(false);
    setPriceUnlocked(false);

    if (type === "Landing") {
      setStaticPages(1);
      setDynamicPages(0);
      setFeatures({
        admin: false,
        ecommerce: false,
        seo: false,
        animation: false,
      });
    }

    if (type === "Corporate") {
      setStaticPages(5);
      setDynamicPages(2);
      setFeatures({
        admin: true,
        ecommerce: false,
        seo: false,
        animation: false,
      });
    }

    if (type === "Ecommerce") {
      setStaticPages(3);
      setDynamicPages(5);
      setFeatures({
        admin: true,
        ecommerce: true,
        seo: false,
        animation: false,
      });
    }
  };

  /* ---------- CALCULATION ---------- */

  const featureTotal = Object.keys(features).reduce(
    (sum, key) => (features[key] ? sum + PRICE[key] : sum),
    0,
  );

  const subtotal =
    staticPages * PRICE.staticPage +
    dynamicPages * PRICE.dynamicPage +
    featureTotal;

  const discountAmount = discountApplied
    ? (subtotal * DISCOUNT_PERCENT) / 100
    : 0;

  const total = subtotal - discountAmount;

  /* ---------- DISCOUNT SUBMIT ---------- */

  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    setDiscountApplied(true);
    setPriceUnlocked(true);
    setShowDiscountForm(false);
  };

  return (
    <section className="bg-[#fafafa] py-36">
      {/* WOW HEADING */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24">
        <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-6">
          Pricing Calculator
        </span>

        <h1 className="text-[clamp(2.4rem,3.5vw,3.2rem)] font-medium text-slate-900 leading-[1.08]">
          Get an instant website estimate
        </h1>

        <div className="mt-6 w-16 h-[1px] bg-slate-300" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* TYPE SELECTOR */}
        <div className="flex gap-10 mb-20">
          {["Landing", "Corporate", "Ecommerce"].map((type) => (
            <button
              key={type}
              onClick={() => applyTypeRules(type)}
              className={`text-lg border-b-2 pb-2 transition ${
                siteType === type
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              {type} Website
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-6">
              Pricing
            </p>

            <h2 className="text-[clamp(2.4rem,3.5vw,3.4rem)] font-medium text-slate-900">
              How much does a {siteType.toLowerCase()} website cost?
            </h2>

            <p className="mt-8 text-lg text-slate-600 max-w-xl">
              Adjust pages and features below to calculate your exact project
              cost.
            </p>

            {/* PRICE */}
            <div className="mt-20 space-y-3">
              {!priceUnlocked ? (
                <>
                  <p className="text-xl text-slate-400">Price hidden</p>
                  <p className="text-sm text-slate-500 max-w-sm">
                    Enter your email and phone number to reveal pricing.
                  </p>
                </>
              ) : (
                <>
                  {discountApplied && (
                    <p className="text-slate-400 line-through text-lg">
                      ₹{subtotal.toLocaleString()}
                    </p>
                  )}
                  <p className="text-5xl font-medium text-slate-900">
                    ₹{total.toLocaleString()}
                  </p>
                  {discountApplied && (
                    <p className="text-sm text-green-600">
                      {DISCOUNT_PERCENT}% discount applied
                    </p>
                  )}
                </>
              )}
            </div>

            {/* ACTION */}
            {!priceUnlocked && (
              <button
                onClick={() => setShowDiscountForm(true)}
                className="mt-12 text-lg text-slate-900 underline underline-offset-4"
              >
                Reveal price
              </button>
            )}
          </div>

          {/* RIGHT */}
          <div className="space-y-16">
            <Section title="Pages">
              <Control
                label="Static pages"
                value={staticPages}
                onChange={setStaticPages}
                disabled={siteType === "Landing"}
              />
              <Control
                label="Dynamic pages"
                value={dynamicPages}
                onChange={setDynamicPages}
                disabled={siteType === "Landing"}
              />
            </Section>

            <Section title="Features">
              <Toggle
                label="Admin panel"
                active={features.admin}
                locked={siteType === "Ecommerce"}
                onClick={() =>
                  setFeatures({ ...features, admin: !features.admin })
                }
              />
              <Toggle
                label="E-commerce"
                active={features.ecommerce}
                locked={siteType === "Ecommerce"}
                onClick={() =>
                  setFeatures({ ...features, ecommerce: !features.ecommerce })
                }
              />
              <Toggle
                label="SEO setup"
                active={features.seo}
                onClick={() => setFeatures({ ...features, seo: !features.seo })}
              />
              <Toggle
                label="Animations"
                active={features.animation}
                onClick={() =>
                  setFeatures({ ...features, animation: !features.animation })
                }
              />
            </Section>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showDiscountForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 w-full max-w-md">
            <p className="text-xl font-medium text-slate-900 mb-4">
              Unlock your price
            </p>

            <form onSubmit={handleDiscountSubmit} className="space-y-6">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full border-b border-slate-300 py-3 outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone number"
                className="w-full border-b border-slate-300 py-3 outline-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white rounded-full"
              >
                Reveal price
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

/* ---------- HELPERS ---------- */

const Section = ({ title, children }) => (
  <div>
    <p className="text-slate-900 font-medium mb-6">{title}</p>
    <div className="space-y-6">{children}</div>
  </div>
);

const Control = ({ label, value, onChange, disabled }) => (
  <div className="flex justify-between border-b border-slate-200 pb-3">
    <span className={disabled ? "text-slate-400" : "text-slate-600"}>
      {label}
    </span>
    <input
      type="number"
      min="0"
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-20 text-right bg-transparent outline-none"
    />
  </div>
);

const Toggle = ({ label, active, onClick, locked }) => (
  <button
    onClick={!locked ? onClick : undefined}
    className={`w-full flex justify-between py-3 border-b border-slate-200 ${
      active ? "text-slate-900" : "text-slate-400"
    } ${locked ? "opacity-60 cursor-not-allowed" : ""}`}
  >
    <span>{label}</span>
    <span className="text-sm">
      {locked ? "Required" : active ? "Included" : "Add"}
    </span>
  </button>
);

export default WebsiteCostPremium;