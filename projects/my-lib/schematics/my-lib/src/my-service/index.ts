import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith, SchematicContext
} from '@angular-devkit/schematics';
import { strings, normalize, experimental } from '@angular-devkit/core';

import { Schema as MyServiceSchema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myService(_options: MyServiceSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }
    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);
    if (!_options.project) {
      _options.project = workspace.defaultProject;
    }

    const projectName = _options.project as string;

    const project = workspace.projects[projectName];

    const projectType = project.projectType === 'application' ? 'app' : 'lib';

    if (_options.path === undefined) {
      _options.path = `${project.sourceRoot}/${projectType}`;
    }
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: _options.name
      }),
      move(normalize(_options.path as string))
    ]);

    return chain([
      mergeWith(templateSource)
    ]);


  };
}
