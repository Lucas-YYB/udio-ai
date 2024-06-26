import fetch from 'node-fetch';

// 导出无服务器函数
export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Only POST requests are allowed' });
    return;
  }

  // 设定固定参数
  const style = 'rock';  // 音乐风格
  const prompt = 'A high-energy rock song';  // 生成音乐的提示
  const title = 'Rock On';  // 歌曲标题
  const customMode = true;  // 自定义模式
  const instrumental = true;  // 是否为纯音乐
  const callBackUrl = 'https://udioai.tech/api/callback';  // 回调URL
  const apiKey = '779529e443ade5b94ea36a74512f7df9';  // API 密钥

  // 发送请求到 AI 音乐生成 API
  try {
    const response = await fetch('https://sunoapi.erweima.ai/api/v1/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        style,
        title,
        customMode,
        instrumental,
        callBackUrl,
      }),
    });

    const responseData = await response.json();

    // 返回响应数据
    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate music', details: error.message });
  }
};
