import { AstroGlobal, AstroUserConfig } from 'astro';
export interface BuildOption {
    astroConfig?: AstroUserConfig;
    forceNewEnvironnement?: boolean;
}
export interface BuildResult {
    projectRoot: string;
    builtFile: string;
}
/**
 * @param path The path to the component to build
 * @param props Props to pass to component
 * @param buildOptions Build options, such as forceBuild to force new builds instead of using cache
 * @returns The path to the built component
 */
export declare function buildComponent(path: string, props: AstroGlobal['props'], buildOptions: BuildOption): Promise<BuildResult>;
/**
 * Remove all test directories created
 */
export declare function cleanTests(): void;
