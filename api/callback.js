export default async (req, res) => {
    try {
      console.log('Received callback with data:', req.body); // 输出回调数据
      
      // 在这里处理回调数据，例如将生成的音乐链接存储或转发
      // 可以根据 API 返回的数据结构进行处理
  
      res.status(200).send('Callback received'); // 返回处理成功
    } catch (error) {
      console.error('Error in callback:', error); // 捕捉错误
      res.status(500).send('Error processing callback'); // 返回错误状态
    }
  };
  