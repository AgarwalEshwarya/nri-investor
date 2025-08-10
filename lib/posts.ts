export type Post = {
  slug: string;
  title: string;
  tag: string;
  date: string; // e.g., "2025-08-01"
  excerpt: string;
  content: string; // basic HTML for now
};

export const posts: Post[] = [
  {
    slug: "uk-cgt-guide-2025",
    title: "NRI Playbook: Capital Gains Tax in the UK (2025 Update)",
    tag: "UK Tax",
    date: "2025-08-01",
    excerpt: "Allowances, rates, reporting on HMRC, and common pitfalls—explained with examples.",
    content: `
      <p>Capital Gains Tax (CGT) applies when you sell an asset and make a gain. As an NRI living in the UK, the rules depend on your UK tax residency and the asset type.</p>
      <ul>
        <li><strong>Allowance:</strong> Know your annual exempt amount and track disposals.</li>
        <li><strong>Rates:</strong> Basic vs higher/additional rate bands can apply differently for property.</li>
        <li><strong>Reporting:</strong> SA100/SA108 or 60-day CGT return for UK residential property.</li>
      </ul>
      <p><em>Bookmark-worthy tip:</em> Keep a simple disposal log with acquisition cost, fees, index of supporting docs.</p>
    `,
  },
  {
    slug: "invest-in-indian-equity-from-uk",
    title: "Invest in Indian Equity from the UK: Step-by-step",
    tag: "Investing",
    date: "2025-08-02",
    excerpt: "Set up the right accounts, understand LRS limits, and avoid double taxation while investing back home.",
    content: `
      <p>To invest from the UK into Indian equity, you typically fund via <strong>LRS</strong>, use a compliant broker, and maintain tax documentation on both sides.</p>
      <ol>
        <li>Choose a broker with NRI support and FEMA-compliant flows.</li>
        <li>Understand the <strong>LRS</strong> cap and how to document remittances.</li>
        <li>Track dividends and capital gains for DTAA treatment.</li>
      </ol>
    `,
  },
  {
    slug: "fx-101-for-nris",
    title: "FX 101 for NRIs: Fees, Spreads, and the Smart Way to Move Money",
    tag: "FX & Transfers",
    date: "2025-07-15",
    excerpt: "Real exchange rate vs marked-up rate, provider types, and a checklist to cut costs on every transfer.",
    content: `
      <p>Compare the <em>real</em> mid-market rate to the rate you're offered. Watch for transfer fees, incoming fees, and hidden spreads.</p>
      <p>Tip: Build a personal checklist for each transfer: purpose code, expected arrival time, and proof of source of funds.</p>
    `,
  },
  {
    slug: "property-in-india-while-abroad",
    title: "Property in India while Abroad: Buying, Renting, and Repatriation",
    tag: "Property",
    date: "2025-07-10",
    excerpt: "End-to-end primer on documentation, NRO/NRE flows, FEMA rules, and repatriation limits you must know.",
    content: `
      <p>Keep agreements and proofs tidy. Understand repatriation limits from sale proceeds and the required CA certificates.</p>
    `,
  },
  {
    slug: "renewals-and-subscriptions-case-study",
    title: "Renewals & Subscriptions: A Data-led Approach (Case Study)",
    tag: "Analytics",
    date: "2025-06-30",
    excerpt: "How renewal forecasting and pricing tests drive compounding outcomes—frameworks you can reuse.",
    content: `
      <p>A practical look at building a renewal probability model and using insights to prioritize pricing tests and lifecycle messaging.</p>
    `,
  },
  {
    slug: "nri-checklists-templates",
    title: "NRI Checklists & Templates Pack",
    tag: "Resources",
    date: "2025-09-01",
    excerpt: "Downloadable checklists for tax returns, investment proofs, and annual money reviews. (Coming soon)",
    content: `
      <p>Sign up to get notified when the pack is ready. Early subscribers get it free.</p>
    `,
  },
];

export function getAllPosts() {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
