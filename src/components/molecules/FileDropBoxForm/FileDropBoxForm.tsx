import {FormStyle} from "./FileDropBoxFrom.style";
import {FileDropBoxFromProps} from "../../../types/HrStudentAddTypes/HrStudentsAdd.type";

export const FileDropBoxForm = ({file,addFileHandler}:FileDropBoxFromProps) => (
        <FormStyle>
            <label>
                <input type="file" accept=".json,.csv" onChange={(e)=>addFileHandler(e)}/>
                {!file ?
                    <p>Naciśnij aby wybrać plik lub przeciągnij i upuść plik w obszarze.</p>:
                    <p>Plik <b>{file.name}</b> załadowany poprawnie.</p>
                }
            </label>
        </FormStyle>
)