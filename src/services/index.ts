import Pages from './Pages';

export const services = {
    $pages: Pages,
};

export type AppServices = typeof services;

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties extends AppServices {}
}
