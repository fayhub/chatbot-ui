import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // 消息的最大长度
  tokenLimit: number;
}

// AZURE_DEPLOYMENT_ID = 'DEFAULT_MODEL'
export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4o =  'gpt-4o',
  GPT_4o_mini =  'gpt-4o-mini',
  O1 =  'o1',
  O1_mini =  'o1-mini',
}

// 如果未设置 `DEFAULT_MODEL` 环境变量，或者将其设置为不受支持的模型
export const fallbackModelID = OpenAIModelID.GPT_4o_mini;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_4o]: {
    id: OpenAIModelID.GPT_4o,
    name: 'GPT-4o',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_4o_mini]: {
    id: OpenAIModelID.GPT_4o_mini,
    name: 'GPT-4o-mini',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.O1]: {
    id: OpenAIModelID.O1,
    name: 'O1',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.O1_mini]: {
    id: OpenAIModelID.O1_mini,
    name: 'O1-mini',
    maxLength: 96000,
    tokenLimit: 32000,
  },
};
