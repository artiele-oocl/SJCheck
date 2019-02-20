import * as fse from 'fs-extra';
/**
 * This class retrieves properties of a file
 * 
 * 1.) file.size != 0kb
 * 2.) content should not be all white spaces or no viable content
 */

export class ValidateFile {
    file: string;
    constructor(file: string) {
        this.file = file;
    }
    isFileValid(): boolean {
        return this.isContentValid();
    }
    isNotEmpty(): boolean {
        return fse.statSync(this.file).size > 0;
    }
    isContentValid(): boolean {
        // read content of file; check if READABLE
        if (!this.isNotEmpty()) return false;
        // If content is all whitespace then return false ELSE true
        // Replace all whitespace to '' then return isNotEmpty();
        fse.readFile(this.file, 'utf8', (err,data) => {
            if (err) {
                console.log(err);
                return false;
            }
            console.log(data.replace(/ /g, ''));
            console.log(this.isNotEmpty()); // not working kasi returns TRUE kahit false-postive
        });

        return;
    }
}
