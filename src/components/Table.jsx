import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


const Table = ({characterData}) => {
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} />
        </table>
    );
};

export default Table;