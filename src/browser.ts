import { PanelLayout, Widget } from "@lumino/widgets";

import { FileBrowser } from "@jupyterlab/filebrowser";

//import { IDocumentManager } from "@jupyterlab/docmanager";

import { h, VirtualDOM } from "@lumino/virtualdom";

// import { ServerConnection } from "@jupyterlab/services";

// import { URLExt } from "@jupyterlab/coreutils";

// import { showErrorMessage } from "@jupyterlab/apputils";

//import { Uploader } from './upload';

/**
 * Widget for authenticating against
 * an s3 object storage instance.
 */
let jupyterUploadForm: any;

/**
 * Widget for hosting the S3 filebrowser.
 */
export class jupyterUploadModelDeploy extends Widget {
  constructor(browser: FileBrowser) {
    console.log("God is great but this time he's in browser ts after constructor");
  //constructor(browser: FileBrowser) {
    super();
    this.addClass("jp-jupyterUpload");
    this.layout = new PanelLayout();

    /**
     * Function to handle setting credentials that are read
     * from the s3AuthenticationForm widget.
     */

     
//    const jupyterUploadFormSubmit = () => {
//       const form = document.querySelector("#jupyterUpForm") as HTMLFormElement;
//       const formData = new FormData(form);
//       const formDataJSON: any = {};
//       (formData as any).forEach((value: string, key: string) => {
//         formDataJSON[key] = value;
//       });

//       console.log("form data Json", formDataJSON );  
     
    
      


//     }
      console.log("God is great but this time he's in browser ts");


      jupyterUploadForm = new Widget({
    //   node: Private.createjupyterUpForm(jupyterUploadFormSubmit)
      node: Private.createUploadInput()
    });
    (this.layout as PanelLayout).addWidget(jupyterUploadForm);
    
  


  }


}

namespace Private {
  /**
   * Creates an s3AuthenticationForm widget
   * @param onSubmit A function to be called when the
   * submit button is clicked.
   */
  export function createjupyterUpForm(onSubmit: any): HTMLElement {
    return VirtualDOM.realize(
      h.div(
        { className: "jupyterUpForm" },
        h.h4("Spark File Upload"),
        h.div("This extension allows you to upload files to Spark cluster."),
        h.br(),
        h.p(
          { className: "s3-connect" },
          h.button(
            {
              onclick: onSubmit,
              className: "jp-mod-accept jp-mod-styled"
            },
            "Upload"
          )
        )
      )
    );
  }

}


namespace Private {
    /**
     * Create the upload input node for a file buttons widget.
     */
    export function createUploadInput(): HTMLInputElement {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      return input;
    }
  }


