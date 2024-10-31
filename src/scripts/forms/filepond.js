import * as FilePond from "filepond";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import injectCss from "../../utils/inject_css";

import css from "filepond/dist/filepond.css?raw";
injectCss(css);

export {
  FilePond,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
};
