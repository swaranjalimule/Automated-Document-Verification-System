import React, { useState } from 'react';
import "./DocumentVerification.scss"

const DocumentVerification = () => {
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Document 1', status: 'Pending' },
        { id: 2, name: 'Document 2', status: 'Verified' },
        { id: 3, name: 'Document 3', status: 'Rejected' },
    ]);

    return (
        <div className="document-verification">
            <h2>Document Verification Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Document Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((document) => (
                        <tr key={document.id}>
                            <td>{document.id}</td>
                            <td>{document.name}</td>
                            <td>{document.status}</td>
                            <td>
                                <button>View</button>
                                <button>Resend</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DocumentVerification;
