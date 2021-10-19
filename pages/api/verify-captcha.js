const axios = require('axios');

export default async function handler(req, res) {
    const RECAPTCHA_SECRET = '6Leeet4cAAAAAPdfj1HKk2iZLmmoKVC8e_L3MVQu';
    try {
        const google = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${req.body['g-recaptcha-response']}`
        );
        if (google.data.success)
            res.status(200).json({ success: google.data.success });
        else
            res.status(500).json({
                msg: 'Server error: Please contact support',
            });
    } catch (error) {
        res.status(500).json({
            msg: 'Server error: Please contact support',
        });
    }
}
