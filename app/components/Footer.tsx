const FOOTER_LINKS = [
  {
    title: "Actions",
    links: ["Summarist Magazine", "Cancel Subscription", "Help", "Contact us"],
  },
  {
    title: "Useful Links",
    links: [
      "Pricing",
      "Summarist Business",
      "Gift Cards",
      "Authors & Publishers",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Code of Conduct"],
  },
  {
    title: "Other",
    links: ["Sitemap", "Legal Notice", "Terms of Service", "Privacy Policies"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f1f6f4]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-slate-900">{col.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {col.links.map((label) => (
                  <li key={label}>
                    <button className="hover:text-slate-900 cursor-not-allowed">{label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-700">
          Copyright © 2023 Summarist.
        </p>
      </div>
    </footer>
  );
}
