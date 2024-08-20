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
                        Sumeet Singh is an author, engineer, and volunteer on cybernetics,
                        cyberware and cyborgs from Sydney, Australia. His ambition aspires to a
                        post-scarcity future where humans have autonomy to augment themselves in becoming
                        better by merging with machines.
                    </p>
                    <p>
                        His loves range from animals, fashion, technology, horror, tattoos, and body
                        modification as well as being an ardent bibliophile and linguist.
                    </p>
                    <p>
                        Blending his passions together, he researches, develops, and documents
                        science, philosophy and technology related to biomedical engineering such as
                        cyberware, and cyborgs.
                    </p>
                    <p>
                        He's an advocate on universal rights to all artificial humans be they cyborgs,
                        androids or artificial intelligence, with a goal to help the human race adapt to
                        an artificial mechanical dominated future by merging humans and machines together.
                    </p>
                    <br />
                    <br />
                    <br />
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '33%', verticalAlign: 'top', textAlign: 'center' }}>
                                    <strong>Author</strong><br />
                                    Sumeet Singh is a author on articles and books revolving around biomedical engineering sciences and philosophies, such as cyberware, cyborgs, and trans/post humanism.
                                </td>
                                <td style={{ width: '33%', verticalAlign: 'top', textAlign: 'center' }}>
                                    <strong>Engineer</strong><br />
                                    Sumeet Singh is a Engineer of Cybernetics, Cyberware and Cyborgs, providing everything from research, education, products and support on cybernetics, cyberware and cyborgs.
                                </td>
                                <td style={{ width: '34%', verticalAlign: 'top', textAlign: 'center' }}>
                                    <strong>Volunteer</strong><br />
                                    Sumeet Singh is a volunteer assisting the lives of all humans especially those neurodivergent and handicapped, and spokesperson on artificial human rights.
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
