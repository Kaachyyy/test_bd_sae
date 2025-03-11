import React, { useState, useEffect } from 'react';

export default function AdminPage() {
    const [reponses, setReponses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/admin/reponses')
            .then(res => res.json())
            .then(data => setReponses(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="admin-page">
            <h2>Réponses reçues ({reponses.length})</h2>

            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                {reponses.map(reponse => (
                    <tr key={reponse.id}>
                        <td>{new Date(reponse.created_at).toLocaleDateString()}</td>
                        <td>{reponse.nom}</td>
                        <td>{reponse.email}</td>
                        <td>{reponse.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}