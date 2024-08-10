const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleVerify = async (id_token = '') => {
    if (!id_token) {
        throw new Error('ID Token is required');
    }

    const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: process.env.GOOGLE_CLIENT_ID
    });

    const { name: nombre, picture: img, email: correo } = ticket.getPayload();
    return { nombre, img, correo };
}

module.exports = { googleVerify };
