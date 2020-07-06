  import {
    ILayoutRestorer,
    JupyterFrontEnd,
    JupyterFrontEndPlugin
  } from '@jupyterlab/application';
  
  import { ISettingRegistry } from '@jupyterlab/settingregistry';
  
  import { IDocumentManager } from '@jupyterlab/docmanager';
  
  import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
  
  //import { S3Drive } from './contents';
  
  import { jupyterUploadModelDeploy } from './browser';
  
  //import { requestAPI } from './seldon';
  
  
  
  
  /**
   * S3 filebrowser plugin state namespace.
   */
  const NAMESPACE = 'jupyter-upload-namespace';
  
  /**
   * The ID for the plugin.
   */
  const PLUGIN_ID = 'jupyterlab-upload';
  
  /**
   * The JupyterLab plugin for the S3 Filebrowser.
   */
  const fileBrowserPlugin: JupyterFrontEndPlugin<void> = {
    id: PLUGIN_ID,
    requires: [
      IDocumentManager,
      IFileBrowserFactory,
      ILayoutRestorer,
      ISettingRegistry
    ],
    activate: activateFileBrowser,
    autoStart: true
  };
  
  /**
   * Activate the file browser.
   */
  function activateFileBrowser(
    app: JupyterFrontEnd,
    manager: IDocumentManager,
    factory: IFileBrowserFactory,
    restorer: ILayoutRestorer,
    settingRegistry: ISettingRegistry
  ): void {
    // Add the S3 backend to the contents manager.
    //const drive = new S3Drive(app.docRegistry);
    // manager.services.contents.addDrive(drive);
  
    const browser = factory.createFileBrowser(NAMESPACE, {
      driveName: "jupterupload",
      state: null,
      refreshInterval: 300000
    });
  
  
  
  
    //const seldonDeploy = new SeldonModelDeploy(browser, drive, manager);
    const jupyterUpload = new jupyterUploadModelDeploy(browser);
    console.log("I'm running inside this actually main one");
    jupyterUpload.title.iconClass = 'jp-upload-icon jp-SideBar-tabIcon';
    jupyterUpload.title.caption = 'Jupyter Upload';
  
    jupyterUpload.id = 'seldon-deploy';
  
    // Add the file browser widget to the application restorer.
    restorer.add(jupyterUpload, NAMESPACE);
    app.shell.add(jupyterUpload, 'left', { rank: 200 });
  
    return;
  }
  
  export default fileBrowserPlugin;
  
  
