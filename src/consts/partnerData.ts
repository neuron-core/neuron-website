export interface Partner {
  name: string;
  region: string;
  location: string;
  description: string;
  accent: string;
  logo: ImageMetadata;
  website: string;
  email: string;
}

import inspectorLogo from '~assets/partners/inspector.svg';
import tobeeLogo from '~assets/partners/tobee.svg';
import regoloLogo from '~assets/partners/regolo.svg';
import threeDZeroLogo from '~assets/partners/3d0.svg';

export const PARTNER_DATA: Partner[] = [
  {
    name: 'Inspector',
    region: 'EU',
    location: 'Italy',
    description:
      'Observability backbone for PHP. Ships the Monitoring pillar and runs the agentic playbook end-to-end on customer engagements.',
    accent: 'monitoring',
    logo: inspectorLogo,
    website: 'https://inspector.dev',
    email: 'support@inspector.dev',
  },
  {
    name: 'To Bee',
    region: 'EU',
    location: 'Italy',
    description:
      'Software house and system integrator. Delivers Neuron AI inside CRMs, E-Commerce, and bespoke PHP platforms.',
    accent: 'vector',
    logo: tobeeLogo,
    website: 'https://tobee.co',
    email: 'info@tobee.co',
  },
  {
    name: 'Regolo.ai',
    region: 'EU',
    location: 'EU Data Center',
    description:
      'AI models inference with Zero Data Retention in EU Data Center, powered by 100% green carbon-free energy.',
    accent: 'agents',
    logo: regoloLogo,
    website: 'https://regolo.ai',
    email: 'info@regolo.ai',
  },
  {
    name: '3D0',
    region: 'EU',
    location: 'Italy',
    description:
      'Digital factory specialized in Laravel and Angular development. Open-Source mindset, Data Sovereignty, Radical Transparency.',
    accent: 'workflows',
    logo: threeDZeroLogo,
    website: 'https://www.3d0.it',
    email: 'info@3d0.it',
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
