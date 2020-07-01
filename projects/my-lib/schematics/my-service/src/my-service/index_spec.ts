import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {Schema as WorkspaceOptions} from '@schematics/angular/workspace/schema';
import {Schema as ApplicationOptions} from '@schematics/angular/application/schema';

import * as path from 'path';
import {Style} from "@angular/cli/lib/config/schema";


const collectionPath = path.join(__dirname, '../collection.json');

const workspaceOptions: WorkspaceOptions = {
  name: 'workspace',
  newProjectRoot: 'projects',
  version: '9.0.0',
};

const appOptions: ApplicationOptions = {
  name: 'bar',
  inlineStyle: false,
  inlineTemplate: false,
  routing: false,
  style: Style.Scss,
  skipTests: false,
  skipPackageJson: false,
};

let appTree: UnitTestTree;
const runner = new SchematicTestRunner('schematics', collectionPath);


beforeEach(async() => {
  appTree = await runner.runExternalSchematicAsync(
    '@schematics/angular', 'workspace', workspaceOptions).toPromise();
  appTree = await runner.runExternalSchematicAsync(
    '@schematics/angular', 'application', appOptions, appTree).toPromise();
});

describe('my-service', () => {
  it('works', async () => {
    const tree = await runner.runSchematicAsync('my-service', {name: "test" }, appTree).toPromise();
    const files = tree.files;
    expect(files).toContain('/projects/bar/src/app/test.service.ts');

  });
});
