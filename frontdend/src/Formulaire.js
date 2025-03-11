import React, { useState } from 'react';

export default function Formulaire() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        message: '',
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('Merci pour votre réponse !');
                setFormData({ nom: '', email: '', message: '' });
            }
        } catch (error) {
            setSubmitStatus('Erreur lors de l\'envoi');
        }
    };

    return (
        <div className="formulaire">
            <h1>Formulaire</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />

                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />

                <button type="submit">Envoyer</button>
            </form>

            {submitStatus && <p>{submitStatus}</p>}
        </div>
    );
}