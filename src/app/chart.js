import { Bar } from 'react-chartjs-2';
import React from "react";

function Bari() {
    const data = {
        labels : ['Salary', 'Tax', 'Ensuarance'],
        options: {}
    }
    return (
        <div>
            <Bar
            data={data}
            options={{}}
            
            />

        </div>
    );
}

export default Bari;