// C:\Users\lartiend\Desktop\draft-sjcheck\Report\report_1.csv

hindi gumagana yung fse ko kahit imported na sila!
Need a File System library para makita ko content && create_date ng LATEST file

import { fse } from 'fs-extra';


export class FileProperty {
    
    // checkFilePro( file: File ): String {
    static getLatestFile( file: File ): void {
        // check if file exist or file is not empty
        // if not then error
        // else, get file property.create_date
        
        

        console.log(file.name);
    }

    static isPass(): boolean {
        // isPass: create_date === last_week
        console.log('Inside FileProperty.ts');
        return false;
    }
}
