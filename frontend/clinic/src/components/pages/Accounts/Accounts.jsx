import React, {useState} from "react";

import CommonElementsPage from "../commonElements";
import MainTable from "../../Independents/Table/tableMainComponent";

function Accounts() {
    const [allowEdit, changeEdit] = useState(false);

    function loadDoctorsProcess() {
        let defaultMatrix = [
            ['First name', 'Last name', 'Email', 'Speciality', 'Creation date', 'Appointments'],
            ['Manolo', 'Arias', 'soymanolo@arias.com', 'Humor', 'Hoy', 'Me parto la caja'],
            ['2', '2', '2@arias.com', '2', '2', '2'],
        ];
        return defaultMatrix;
    }

    function loadPatientsProcess(){
        let defaultMatrix = [
            ['First name', 'Last name', 'Email', 'Speciality', 'Creation date', 'Appointments'],
            ['Manolo', 'Arias', 'soymanolo@arias.com', 'Humor', 'Hoy', 'Me parto la caja'],
            ['2', '2', '2@arias.com', '2', '2', '2'],
        ];
        return defaultMatrix;
    }
    
    return (
        <CommonElementsPage
            title="Accounts"
            notCommonElements={[
                <MainTable
                    key="TableDoctor"
                    Title="Doctors list"
                    Matrix={loadDoctorsProcess()}
                    initNumber={1}
                    endNumber={1}
                />,
                <MainTable
                    key="TablePatient"
                    Title="Patients list"
                    Matrix={loadPatientsProcess()}
                    initNumber={1}
                    endNumber={1}
                />
            ]}
        />
    );
}

export default Accounts;