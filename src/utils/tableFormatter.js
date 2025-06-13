import React from "react";

const tableFormatter = (data) => {
    if (!data || data.length === 0) return <p className="text-[color:var(--text-secondary)]">No data available.</p>;

    const headers = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto flex justify-center flex-col pb-4">
            <table
                className="table-auto border border-[color:var(--text-secondary)] w-auto text-left"
                style={{
                    backgroundColor: "var(--header)",
                    color: "var(--text-primary)",
                }}
            >
                <thead style={{ backgroundColor: "var(--bg-primary)" }}>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="border border-[color:var(--text-secondary)] px-4 py-2 font-bolder uppercase"
                                style={{ color: "var(--text-link)" }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? "bg-[color:var(--header)]" : "bg-[color:var(--bg-primary)]"}
                        >
                            {headers.map((header, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="border border-[color:var(--text-secondary)] px-4 py-2"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default tableFormatter;
