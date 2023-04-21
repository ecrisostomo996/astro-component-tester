import { readFile, rm, stat } from 'fs/promises';
import { join } from 'path';
import { buildComponent } from './builder.js';
export async function getComponentOutput(path, props = {}, buildOptions = {}) {
    // Build the component
    const component = await buildComponent(path, props, buildOptions);
    // Read its content
    const result = await readFile(component.builtFile, {
        encoding: 'utf-8',
    });
    // Since we're building a page and not a component, Astro includes a DOCTYPE, we don't want that
    const resultContent = result.toString().match(/<!DOCTYPE html>(.*)/ms)[1];
    return {
        html: resultContent,
        raw: result,
        // Few utilities functions that might be useful
        readFile: (filePath) => readFile(join(component.projectRoot, filePath), 'utf8'),
        fileExists: (filePath) => stat(join(component.projectRoot, filePath)).then(() => true, () => false),
        clean: () => rm(component.projectRoot, { recursive: true, force: true }),
    };
}
export { cleanTests } from './builder.js';
