import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyter-apod extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter-apod:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter-apod is activated!');
  }
};

export default plugin;
