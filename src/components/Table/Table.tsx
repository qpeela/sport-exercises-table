import React from "react";

type Column = {
    id: string;
    label: string;
};

type Row = {
    id: string;
};

interface Props {
    columns: Array<Column>;
    data: Array<Row>;
}

const Table = ({ columns, data }: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(({ id, label }) => (
                        <th key={id}>{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => {
                    return (
                        <tr>
                            {columns.map(({ id }) => (
                                <td key={row.id}>{row[id]}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
