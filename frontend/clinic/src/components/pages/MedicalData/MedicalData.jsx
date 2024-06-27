import React, { useState } from 'react';

import CommonElementsPage from '../commonElements';
import MainTable from "../../Independents/Table/tableMainComponent";
import MyMedicalDetails from '../../Sections/MyMedicalDetails/myMedicalDetails';

function MedicalData(){

    function loadVisits(){
        const defaultVisits = [
            ['Date','Time','Speciality','Doctor'],
            ['Hoy','Ahora','Corazón','Manolo'],
            ['Mañana','Luego','Nervioso','Juan']
        ];
        return defaultVisits
    }

    return (
        <CommonElementsPage
            title="Medical Data"
            notCommonElements={[
                <MyMedicalDetails
                    key='myMedicalDetails'
                />,
                <MainTable
                    key="VisitsKey"
                    Title="Visits"
                    Matrix={loadVisits()}
                    initNumber={1}
                    endNumber={1}
                />
            ]}
        />
    );
}

export default MedicalData;
