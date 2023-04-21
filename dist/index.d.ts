import { AstroGlobal } from 'astro';
import { BuildOption } from './builder.js';
export interface ComponentOutput {
    html: string;
    raw: string;
    readFile: (path: string) => Promise<string>;
    fileExists: (path: string) => Promise<boolean>;
    clean: () => Promise<void>;
}
export declare function getComponentOutput(path: string, props?: AstroGlobal['props'], buildOptions?: BuildOption): Promise<ComponentOutput>;
export { cleanTests } from './builder.js';
