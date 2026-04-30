export interface Partner {
  name: string;
  region: string;
  location: string;
  description: string;
  accent: string;
  logo: ImageMetadata;
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
  },
  {
    name: 'To Bee',
    region: 'EU',
    location: 'Italy',
    description:
      'Software house and system integrator. Delivers Neuron AI inside CRMs, E-Commerce, and bespoke PHP platforms across Italy.',
    accent: 'vector',
    logo: tobeeLogo,
  },
  {
    name: 'Regolo.ai',
    region: 'EU',
    location: 'EU Data Center',
    description:
      'AI models inference with Zero Data Retention in EU Data Center, powered by 100% green carbon-free energy.',
    accent: 'agents',
    logo: regoloLogo,
  },
  {
    name: '3D0',
    region: 'EU',
    location: 'Italy',
    description:
      'Software house specialized in Laravel and Angular development.',
    accent: 'workflows',
    logo: threeDZeroLogo,
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
