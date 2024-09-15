import React from 'react';
import image1 from '../assets/graphics/me.jpeg';

const Homepage = () => {
    return (
        <div>
            <div className="main">
                <div className="column1">
                    {/* Content for left column (column1) */}
                </div>
                <div className="column2">
                    <div style={{ textAlign: 'center' }}>
                        <h1>Sumeet Singh's biography</h1>
                    </div>
                    <br />
                    <p>
                        Sumeet Singh is an author, engineer, and advocate on biomedical engineered 
                        technologies such as cyberware and cyborgs from Sydney, Australia. His ambition 
                        aspires to a future where humans have autonomy to improve by augmenting themselves 
                        with technology both for functional rehabilitative and cosmetic reasons
                    </p>
                    <p>
                        His loves range from animals, fashion, technology, horror, tattoos, and body
                        modification as well as being an ardent bibliophile and linguist.
                    </p>
                    <p>
                        Blending his passions together, he researches, develops, and documents
                        science, philosophy and technology related to biomedical engineering such as
                        cybernetics, cyberware, and cyborgs.
                    </p>
                    <br />
                    <br />
                    <br />
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '33%', verticalAlign: 'top', textAlign: 'center' }}>
                                    <strong>Author</strong><br />
                                    Sumeet authors works involving biomedical engineering sciences and philosophies, such as biomedical engineering, cybernetics, and trans humanism.
                                </td>
                                <td style={{ width: '33%', verticalAlign: 'top', textAlign: 'center' }}>
                                    <strong>Engineer</strong><br />
                                    Sumeet is a hobby Engineer providing research, standards, education, and support on cybernetics, cyberware and cyborgs.
                                </td>
                                <td style={{ width: '34%', verticalAlign: 'top', textAlign: 'center' }}>
                                    <strong>Volunteer</strong><br />
                                    Sumeet is a life long volunteer assisting with the neurodivergent and handicapped communities, and spokesperson on all human and machine rights.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br />
                    <br />
                    <br />
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <img src={image1} alt="Sumeet Singh" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="column3">
                    {/* Content for right column (column3) */}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
