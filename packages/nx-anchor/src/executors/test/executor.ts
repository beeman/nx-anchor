import { logger } from '@nrwl/devkit';
import { execSync } from 'child_process';
import { TestExecutorSchema } from './schema';

export default async function runExecutor(options: TestExecutorSchema) {
  logger.info(`Executing "test"...`);
  logger.info(`Options: ${JSON.stringify(options, null, 2)}`);
  const command: string[] = ['anchor', 'test'];
  if (options.skipLocalValidator) {
    command.push('--skip-local-validator');
  }
  execSync(command.join(' '), { stdio: 'inherit', cwd: options.projectPath });
  return { success: true };
}
