export type PackageManagers = 'npm' | 'yarn' | 'pnpm' | 'bun';
export type CommandVariants = 'add' | 'install' | 'dlx';
export enum Variant {
  add = 'add',
  install = 'install',
}

export type TStep = {
  title: string;
  description: string;
  html: string;
  maxHeight: number;
  expandedHeight: number;
};

export type TDetails = {
  component: string;
  packageInstallationStep?: { command: string };
  steps: TStep[];
};
