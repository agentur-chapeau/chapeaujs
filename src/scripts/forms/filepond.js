import * as FilePond from "filepond";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import styleInject from "style-inject";

import css from "filepond/dist/filepond.css?raw";
styleInject(css, { insertAt: "top" });

export {
  FilePond,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
};
