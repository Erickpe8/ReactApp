// src/data/mockData.ts
export interface Technology {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export const technologies: Technology[] = [
    {
        id: '1',
        name: 'Laravel 10.x',
        description: 'Profundizando en backend monolítico, arquitectura limpia, servicios, colas y optimización.',
        icon: 'laravel',
    },
    {
        id: '2',
        name: 'JavaScript',
        description: 'Manipulación del DOM, asincronía, módulos, patrones de diseño y estructuras complejas.',
        icon: 'language-javascript',
    },
    {
        id: '3',
        name: 'Docker',
        description: 'Creación de entornos replicables, imágenes eficientes, contenedores y flujos DevOps simples.',
        icon: 'docker',
    },
    {
        id: '4',
        name: 'Arquitectura de Software',
        description: 'Patrones, principios SOLID, diseño modular, toma de decisiones técnicas y escalabilidad.',
        icon: 'file-tree',
    },
    {
        id: '5',
        name: 'Figma',
        description: 'Aprendiendo maquetación, prototipado y diseño de interfaces para planear mejor antes de desarrollar.',
        icon: 'pencil-ruler',
    },
    {
        id: '6',
        name: 'Control de versiones (Git/GitHub)',
        description: 'Practicando ramas, commits claros, pull requests y flujo de trabajo colaborativo para proyectos reales.',
        icon: 'github',
    },
];
