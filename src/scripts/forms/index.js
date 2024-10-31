import { exportChapeau } from "../../utils/export_chapeau.js";
import { AsyncForm } from "./async_form.js";
import { FileUpload } from "./fileupload.js";
import { getConversionIDs } from "./conversion.js";
import "./cms_form.js";
import "./label_slide_up.js";

const Chapeau = exportChapeau({
  AsyncForm,
  FileUpload,
  getConversionIDs,
});

export default Chapeau;
