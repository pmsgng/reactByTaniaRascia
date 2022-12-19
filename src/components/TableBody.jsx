import React from 'react';

const TableBody = ({ characterData }) => {
    const rows = characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    );
};

export default TableBody;