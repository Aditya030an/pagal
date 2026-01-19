import React, { useState } from "react";

const WebsiteCostPremium = () => {
  const PRICE = {
    staticPage: 2000,
    dynamicPage: 3500,
    admin: 15000,
    ecommerce: 25000,
    seo: 8000,
    animation: 6000,
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

  /* ---------- TYPE LOGIC ---------- */

  const applyTypeRules = (type) => {
    setSiteType(type);
    setDiscountApplied(false);

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
    0
  );

  const subtotal =
    staticPages * PRICE.staticPage +
    dynamicPages * PRICE.dynamicPage +
    featureTotal;

  const discountAmount = discountApplied
    ? (subtotal * DISCOUNT_PERCENT) / 100
    : 0;

  const total = subtotal - discountAmount;

  /* ---------- APPLY DISCOUNT ---------- */

  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    setDiscountApplied(true);
    setShowDiscountForm(false);
  };

  return (
    <section className="bg-[#fafafa] py-40 relative">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP SELECTOR */}
        <div className="flex gap-10 mb-20">
          {["Landing", "Corporate", "Ecommerce"].map((type) => (
            <button
              key={type}
              onClick={() => applyTypeRules(type)}
              className={`text-lg transition border-b-2 pb-2 ${
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

            <h2 className="text-[clamp(2.6rem,4vw,3.8rem)] font-medium text-slate-900 leading-tight">
              How much does a {siteType.toLowerCase()} website cost?
            </h2>

            <p className="mt-8 text-lg text-slate-600 max-w-xl">
              Pricing is calculated based on pages and functionality.
              Adjust the structure below to see the exact project cost.
            </p>

            {/* TOTAL */}
            <div className="mt-20 space-y-3">
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
            </div>

            {/* ACTIONS */}
            <div className="mt-12 flex gap-10 items-center">
              <a
                href="#contact"
                className="text-lg font-medium text-slate-900 group inline-flex items-center"
              >
                Get this quote
                <span className="ml-3 h-[1px] w-0 bg-slate-900 transition-all duration-300 group-hover:w-10"></span>
              </a>

              {!discountApplied && (
                <button
                  onClick={() => setShowDiscountForm(true)}
                  className="text-lg text-slate-500 hover:text-slate-900 transition"
                >
                  Get discount
                </button>
              )}
            </div>
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
                onClick={() =>
                  setFeatures({ ...features, seo: !features.seo })
                }
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

      {/* DISCOUNT MODAL */}
      {showDiscountForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 w-full max-w-md">
            <p className="text-xl font-medium text-slate-900 mb-4">
              Unlock your discount
            </p>
            <p className="text-slate-600 mb-8">
              Enter your details to apply a {DISCOUNT_PERCENT}% discount.
            </p>

            <form onSubmit={handleDiscountSubmit} className="space-y-6">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full border-b border-slate-300 py-3 outline-none focus:border-slate-900"
              />
              <input
                type="tel"
                required
                placeholder="Phone number"
                className="w-full border-b border-slate-300 py-3 outline-none focus:border-slate-900"
              />

              <button
                type="submit"
                className="w-full mt-6 py-4 bg-slate-900 text-white rounded-full"
              >
                Apply discount
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

/* ---------- Helpers ---------- */

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
