import { ChatGPTAPI } from 'chatgpt'

const chatGPT = {
    init: false,
    sendMessage: null,
}

export async function initChatGPT(init_setting = {}) {
    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY,
        ...init_setting
    })

    chatGPT.sendMessage = (message, opts = {}) => {
        return api.sendMessage(message, opts)
    }

    chatGPT.init = true
}

export async function askQuestion(question, cb, opts = {}) {

    if (!chatGPT.init) {
        cb("Chatgpt not initialized!")
        return;
    }

    const { conversationInfo } = opts

    let tmr = setTimeout(() => {
        cb("再...再給我一些時間... (Timeout)")
    }, 120000)

    if (process.env.CONVERSATION_START_PROMPT.toLowerCase() != "false" && conversationInfo.newConversation) {
        try{
            const response = await chatGPT.sendMessage(process.env.CONVERSATION_START_PROMPT, {
                conversationId: conversationInfo.conversationId,
                parentMessageId: conversationInfo.parentMessageId
            })
            conversationInfo.conversationId = response.conversationId
            conversationInfo.parentMessageId = response.id
            clearTimeout(tmr)
            tmr = setTimeout(() => {
                cb("再...再給我一些時間... (Timeout)")
            }, 120000)
        }catch(e){
            clearTimeout(tmr)
            cb("喔不！我短路了... (Error)")
            return;
        }
    }

    try{
        const response = await chatGPT.sendMessage(question, {
            conversationId: conversationInfo.conversationId,
            parentMessageId: conversationInfo.parentMessageId
        })
        conversationInfo.conversationId = response.conversationId
        conversationInfo.parentMessageId = response.id
        cb(response.text)
    }catch(e){
        cb("喔不！我短路了... (Error)")
        console.error("dm error : " + e)
    }finally{
        clearTimeout(tmr)
    }
}