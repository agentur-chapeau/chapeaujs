import { AsyncForm } from "./async_form.js";
import { FileUpload } from "./fileupload.js";
import { getConversionIDs } from "./conversion.js";
import "./cms_form.js";

const Chapeau = {
  AsyncForm,
  FileUpload,
  getConversionIDs,
};

window.Chapeau = Chapeau;

export default Chapeau;
