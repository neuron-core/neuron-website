export interface Partner {
  name: string;
  region: string;
  location: string;
  description: string;
  accent: string;
  monogram: string;
}

export const PARTNER_DATA: Partner[] = [
  {
    name: 'Inspector.dev',
    region: 'EU',
    location: 'Padua, Italy',
    description:
      'Observability backbone for PHP. Ships the Monitoring pillar and runs the agentic playbook end-to-end on customer engagements.',
    accent: 'monitoring',
    monogram: 'IN',
  },
  {
    name: 'Spryker Labs',
    region: 'EU',
    location: 'Berlin, Germany',
    description:
      'Composable commerce specialists. Embed Neuron Workflows into checkout, search and merchandising for enterprise marketplaces.',
    accent: 'workflows',
    monogram: 'SP',
  },
  {
    name: 'Caprit Studio',
    region: 'EU',
    location: 'Lisbon, Portugal',
    description:
      'Boutique PHP consultancy. Designs RAG pipelines over legacy SQL and document stores for regulated industries.',
    accent: 'vector',
    monogram: 'CA',
  },
  {
    name: 'Devtimate',
    region: 'AMER',
    location: 'Austin, USA',
    description:
      'Senior team of Laravel + Symfony engineers. Production rollouts of multi-agent customer-support and ops automation.',
    accent: 'agents',
    monogram: 'DE',
  },
  {
    name: 'Map of Ag',
    region: 'AMER',
    location: 'Toronto, Canada',
    description:
      'Vertical AI for agritech. Connects field telemetry to Neuron agents for advisory, forecasting and compliance reporting.',
    accent: 'agents',
    monogram: 'MA',
  },
  {
    name: 'Tobee Systems',
    region: 'APAC',
    location: 'Singapore',
    description:
      'Regional integrator. Delivers Neuron AI inside WordPress, Magento and bespoke PHP platforms across Southeast Asia.',
    accent: 'vector',
    monogram: 'TO',
  },
];

export const REGIONS = [
  { id: 'all', label: 'All regions' },
  { id: 'EU', label: 'Europe' },
  { id: 'AMER', label: 'Americas' },
  { id: 'APAC', label: 'Asia / Pacific' },
];

export const ACCENT_TOKEN: Record<string, { base: string; light: string }> = {
  agents: {
    base: 'var(--bg-agents-base)',
    light: 'var(--bg-agents-light)',
  },
  workflows: {
    base: 'var(--bg-workflows-base)',
    light: 'var(--bg-workflows-light)',
  },
  vector: {
    base: 'var(--bg-vector-base)',
    light: 'var(--bg-vector-light)',
  },
  monitoring: {
    base: 'var(--bg-monitoring-base)',
    light: 'var(--bg-monitoring-light)',
  },
};
