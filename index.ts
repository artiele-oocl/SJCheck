import { ValidateFile } from "./Controller/ValidateFile/ValidateFile";

/**
 * Accept args[0] then toLowerCase then choose config file to read
 * read config file (json) then iterate over it with DirectoryController
 * return: result.json <--which will be created to ./Result/result.json
 * Note that result.json will be process and sent via email
 */

 let v = new ValidateFile('ReportDummy/false-positive/false-positive.csv');
 v.isContentValid();