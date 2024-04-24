// 导出无服务器函数
export default async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Only POST requests are allowed' });
      return;
    }
  
    // 获取回调数据
    const { callbackType, data } = req.body;
  
    // 根据不同的回调类型进行处理
    if (callbackType === 'text') {
      console.log('Initial callback received:', data);
    } else if (callbackType === 'first') {
      console.log('Update callback received:', data);
    } else if (callbackType === 'complete') {
      console.log('Final callback received:', data);
      // 此处可以处理最终回调，如存储数据、发送通知等
    } else {
      res.status(400).json({ error: 'Invalid callback type' });
      return;
    }
  
    // 返回成功响应
    res.status(200).json({ message: 'Callback processed successfully' });
  };
  