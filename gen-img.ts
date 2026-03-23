import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt: string, filename: string) {
  try {
    console.log(`Generating ${filename}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        fs.writeFileSync(path.join(process.cwd(), 'public', filename), base64Data, 'base64');
        console.log(`Saved ${filename}`);
        break;
      }
    }
  } catch (e) {
    console.error(`Failed to generate ${filename}:`, e);
  }
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  const basePrompt = "设计一款现代、极简、高端的可穿戴产品，以项链形式呈现，兼具时尚感与功能性。整体应像一件精致珠宝，而非医疗设备。核心设计为一个小型圆形吊坠，外观简洁、流畅、具有雕塑感，同时隐蔽地作为药仓使用（可容纳日常药片，如避孕药）。开启结构需巧妙、克制且优雅，不应显露明显的功能性痕迹。吊坠材质建议为哑光金属、拉丝金或抛光陶瓷，强调细腻质感与高级光泽。链条为细线条、轻盈、极简设计，整体比例精致小巧，适合日常佩戴。整体风格参考奢侈珠宝品牌与苹果官网产品设计语言，强调留白、克制、精准与安静的高级感。画面表现：柔和光线、干净背景、高级产品摄影风格，突出材质与结构细节。关键词：优雅、女性化、私密、仪式感、珠宝感、极简、高级、可穿戴科技。";
  
  await generateImage(basePrompt + " 闭合状态：吊坠完整呈现，像一件高级珠宝，干净优雅，无明显功能提示。", "product-closed.png");
  await generateImage(basePrompt + " 打开状态：吊坠以优雅方式打开，展示内部药仓结构（可见单片药位），设计需精致、简洁、无机械感，保持美感。", "product-open.png");
}

main();
