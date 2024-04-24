const axios = require('axios');

export default async (req, res) => {
  try {
    console.log('Sending POST request with Authorization header...');

    await axios.post(
      'https://sunoapi.erweima.ai/api/v1/generate',
      {
        style: 'jazz',
        prompt: 'a birthday song',
        title: 'happy birthday',
        customMode: true,
        instrumental: true,
        callBackUrl: 'https://your-vercel-app.vercel.app/api/callback', // 回调 URL
      },
      {
        headers: {
          'Authorization': 'Bearer 779529e443ade5b94ea36a74512f7df9', // API key
        },
      }
    );

    res.status(200).send('Request sent'); // 返回请求发送成功
  } catch (error) {
    console.error('Error sending API request:', error); // 捕捉错误并输出
    res.status(500).send('Error sending request');
  }
};
