import dotenv from 'dotenv';
dotenv.config();

async function generateImage(prompt) {
    const OPEN_API_KEY = process.env.OPENAI_API_KEY;
   //fetch 发送请求
    const res = await fetch(
        'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation',
    )
}
