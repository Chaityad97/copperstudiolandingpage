// Single source of truth for pricing plans across the three services.
// The plan NAMES stay the same (Essential / Advance / Ultimate); only the
// contents change per service. The comparison table is derived from this data
// so it always stays in sync with the pricing cards.
//
// NOTE: Copper Web and Copper Flow plan contents below are drafts/placeholders
// — swap the feature lists whenever the final scope is decided.

export const pricingServices = [
  {
    key: 'brand',
    label: 'Copper Brand',
    shortLabel: 'Brand',
    plans: [
      {
        name: 'Essential',
        desc: 'Build a clear, professional brand identity ready for launch.',
        features: [
          { text: 'Brand Voice & Tone Guidelines' },
          { text: 'Target Audience Definition' },
          { text: 'Competitor Analysis' },
          { text: 'Logo System', subItems: ['Primary & Secondary Logo', 'Brand Icon', 'Favicon', 'Color Variations'] },
          { text: 'Typography System', subItems: ['Primary Font Family', 'Type Hierarchy'] },
          { text: 'Color System', subItems: ['Primary & Secondary Color Palette', 'Brand Gradients'] },
          { text: 'Visual Assets', subItems: ['Brand Illustrations', 'Pattern / Texture Library'] },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Advance',
        desc: 'Strengthen your brand with business, communication, and digital assets.',
        features: [
          { text: 'Essential Kit' },
          { text: 'Business Stationery', subItems: ['Visiting Card', 'Letterhead', 'Envelope Design', 'Invoice/Quotation Design', 'Stamp/Seal Design'] },
          { text: 'ID Card/Employee Badge' },
          { text: 'Digital Communication Assets', subItems: ['Email Signature & Newsletter Template', 'PowerPoint/Presentation Template'] },
          { text: 'Social Media Assets', subItems: ['Social Media Profile', 'Post & Reel Template'] },
          { text: 'Zoom/Google Meet Virtual Background' },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Ultimate',
        desc: 'Scale your brand with marketing, packaging and promotional solutions.',
        features: [
          { text: 'Essential Kit' },
          { text: 'Advance Kit' },
          { text: 'Corporate Print', subItems: ['Brochure/Catalogue Design', 'Flyer/Leaflet Design', 'Poster Design', 'Banner & Standee Design', 'Promotional Voucher/Coupon Design'] },
          { text: 'Packaging & Product Assets', subItems: ['Product Packaging Design', 'Product Label Design', 'Hand Tag Design', 'Product Mockups'] },
          { text: 'Environmental Branding', subItems: ['Signage & Wayfinding Design', 'Exhibition/Trade Show Booth Design', 'Merchandise Design', 'Uniform/Apparel Design'] },
        ],
        cta: 'Get Started',
      },
    ],
  },
  {
    key: 'web',
    label: 'Copper Web',
    shortLabel: 'Web',
    plans: [
      {
        name: 'Essential',
        desc: 'A clean, responsive website that gets your brand online.',
        features: [
          { text: 'Custom Responsive Design' },
          { text: 'Up to 5 Pages' },
          { text: 'Mobile & Tablet Optimization' },
          { text: 'Contact Form Integration' },
          { text: 'Basic On-Page SEO Setup' },
          { text: 'Domain & Hosting Setup' },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Advance',
        desc: 'A content-managed site built to grow with your business.',
        features: [
          { text: 'Essential Kit' },
          { text: 'Up to 12 Pages' },
          { text: 'CMS Integration', subItems: ['Editable Content', 'Blog / News Section'] },
          { text: 'Advanced SEO Optimization' },
          { text: 'Performance & Speed Optimization' },
          { text: 'Analytics Integration' },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Ultimate',
        desc: 'A fully custom platform with commerce and ongoing care.',
        features: [
          { text: 'Essential Kit' },
          { text: 'Advance Kit' },
          { text: 'E-commerce / Custom Functionality', subItems: ['Product Catalogue', 'Secure Checkout'] },
          { text: 'Third-Party Integrations' },
          { text: 'Ongoing Maintenance & Support' },
          { text: 'Priority Support' },
        ],
        cta: 'Get Started',
      },
    ],
  },
  {
    key: 'flow',
    label: 'Copper Flow',
    shortLabel: 'Flow',
    plans: [
      {
        name: 'Essential',
        desc: 'A secure client portal to centralize your projects.',
        features: [
          { text: 'Client Dashboard' },
          { text: 'Project Timeline View' },
          { text: 'Secure File Sharing' },
          { text: 'Secure Login & Access' },
          { text: 'Up to 5 Users' },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Advance',
        desc: 'Coordinate your team with roles, tasks, and scheduling.',
        features: [
          { text: 'Essential Kit' },
          { text: 'Team Roles & Permissions' },
          { text: 'Task Management' },
          { text: 'Meeting Scheduler' },
          { text: 'Notifications & Reminders' },
          { text: 'Up to 20 Users' },
        ],
        cta: 'Get Started',
      },
      {
        name: 'Ultimate',
        desc: 'A tailored, white-label portal built around your workflow.',
        features: [
          { text: 'Essential Kit' },
          { text: 'Advance Kit' },
          { text: 'Custom Workflows' },
          { text: 'API & Third-Party Integrations' },
          { text: 'White-Label Branding' },
          { text: 'Unlimited Users' },
          { text: 'Priority Support' },
        ],
        cta: 'Get Started',
      },
    ],
  },
];

// Treats "<PlanName> Kit" features as cumulative references (they carry over
// everything from the lower tier). Builds an ordered, de-duplicated list of
// real feature labels with a boolean per plan indicating inclusion.
export function buildComparisonRows(plans) {
  const isKitRef = (t) => /kit$/i.test(t.trim());

  const cumulativeSets = [];
  const acc = new Set();
  const orderedLabels = [];
  const seen = new Set();

  for (const plan of plans) {
    for (const f of plan.features) {
      if (isKitRef(f.text)) continue;
      acc.add(f.text);
      if (!seen.has(f.text)) {
        seen.add(f.text);
        orderedLabels.push(f.text);
      }
    }
    cumulativeSets.push(new Set(acc));
  }

  return orderedLabels.map((label) => ({
    label,
    values: cumulativeSets.map((set) => set.has(label)),
  }));
}
