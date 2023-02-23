# Discord ChatGPT Bot Docker
---
### 簡介
這個專案是由 [Discord-ChatGPT-Bot](https://github.com/onury5506/Discord-ChatGPT-Bot) 分支出來的！

最近 ChatGPT 非常熱門，但也常常當機！或許你可可試試使用自己的 GPT 機器人！
使用這個 Docker 可以幫你節省時間快速在 Discord 架起自己的 GPT 機器人！

當然你有權利把自己的機器人加入到自己的伺服器跟它聊天，但當你要使用本專案時請注意查看說明！

---
### 架設方法

#### Step 1. 準備
需要用到以下工具：

1. Docker
2. Discord
3. Discord Bot Token
4. OpenAI API Key
   
工具說明：

1. Docker
   [Docker](https://zh.wikipedia.org/zh-tw/Docker) 是一個虛擬容器環境。使用 Windows / Mac 的用戶請下載 [Docker-Desktop](https://www.docker.com/)。
   Docker 允許我幫你們寫好配置文件，你們只需要在本地設定基本參數即可運行！

2. Discord
   [Discord](https://zh.wikipedia.org/zh-tw/Discord) 原本是一款給工程師用的語音軟體，現在已經是許多遊戲愛好者使用的交友軟體了！請在[官網下載](https://discord.com/)，可以順便下載手機 app 方便你跟機器人聊天。

3. [Discord Bot Token](https://discord.com/developers/applications) 是每個想要架 DC 機器人都需要有的鑰匙！你可以在前往官網申請！
   
	步驟 1. 登入DC
	![申請](./screenshoot/Discord_1.png)
	步驟 2. 點擊右上的 New Application
	![](./screenshoot/Discord_2.png) 
	步驟 3. 幫機器人服務取名字
	![](./screenshoot/Discord_3.png) 
	步驟 4. 點進你剛剛新增的應用服務
	![](./screenshoot/Discord_4.png)
	步驟 5. 看到這格畫面後請點左邊的 Bot 按鈕
	![](./screenshoot/Discord_5.png) 
	步驟 6. 進入後幫你的機器人取名字改頭貼
	![](./screenshoot/Discord_6.png) 
	步驟 7. 完成後點擊 View Token，然後按 Copy
	![](./screenshoot/Discord_7.png) 
	步驟 8. 往下滑把全部開關打開，第一個開關自己斟酌。
	![](./screenshoot/Discord_8.png) 
	步驟 9. 把機器人加入自己的伺服器，點擊左側 OAuth2 ，點 URL Generator。
	勾起 `bot` ，下面的 `Administrator` 自己決定要不要給管理權限。
	選完後下方會出現要請連結，複製後用新的瀏覽器分頁開啟並加入。
	![](./screenshoot/Discord_9.png) 
	![](./screenshoot/Discord_10.png) 
	完成 Token 申請！

4. [OpenAI API Key](https://platform.openai.com/account/api-keys)，這組鑰匙可以讓你連接你的 ChatGPT ，請保管好不要給他人使用！

	步驟 1. 點擊這個連結[連結](https://platform.openai.com/account/api-keys)申請，登入你的帳號
	步驟 2. 點擊 Create new secret key，複製下 Key。
	![](./screenshoot/OPENAI_1.png) 
	完成！

#### Step 2. 配置環境參數
可以從[這裡](https://github.com/suzumiyahifumi/Discord-ChatGPT-Bot-docker/releases)下載我整理好的配置文件跟程式碼。
之後請照著說明填寫配置文件！

下載後在跟資料夾有一個名為 ```.env.example``` 的檔案。
它是一個隱藏檔案，如果看不到表示你的電腦需要開啟顯示隱藏檔案。

Mac 請使用快捷鍵 ```Shift + Command + .```

winsows 請在檔案管理員裡面勾起顯示
![](./screenshoot/windows_1.png)

看到 ```.env.example``` 請複製一份或者直接改名為 ```.env```
![](./screenshoot/list_1.png)

使用任何的編輯器，例如 筆記本、Notepad、Notepad++ 等開啟 ```.env```
開始把各設定 `=` 後面的參數換成你的，注意中間都沒有空格。
完成後儲存關閉檔案。
```yml
MONGODB_USER=root
#填入你喜歡的資料庫密碼
MONGODB_PASSWORD=123456
#填入你喜歡的資料庫名稱
MONGODB_DATABASE=gptbot_db
#不重要，資料庫在 Docker 內的 PORT
MONGODB_DOCKER_PORT=27017
#填入你的 Discord Token，這串是亂打的
DISCORD_BOT_TOKEN=Oahia938ngla83hnlaiw83mao.fch34k.ijhihrwo392nfDOWjHIe93Qmfow
#填入你的 API Key，這串是亂打的
OPENAI_API_KEY=dt-fjhi3OhoehUpwQ07m62mmo9amowYWiahf82ma9vojsDojOF7d
#這會決定你的對話會在你未回覆訊息的幾秒後結束追蹤，預設１天，有跟他說話就沒事
CONVERSATION_MEMORY_SECONDS=86400
```

接下來開啟我們要開啟終端機，如果你有在寫程式，可以用自己喜歡的終端機。

windows 用戶可以對著本專案資料夾任意空白處 ```shift+右鍵``` 你會看到 ```在這裡開啟 powershell 視窗(S)``` 點下去。

接著輸入 ```docker-compose up``` ，下面這是示意圖。
```console
PS ~\Discord-ChatGPT-Bot-docker> docker-compose up
```
如果不想看到一堆雜七雜八的東西可以用 ```docker-compose up -d``` 讓它在背景跑。

等它跑完應該就部屬完成了，去找你的機器人聊天吧！

想要關閉機器人請輸入 ```docker-compose down``` 關閉。
如果卡在執行面版，請按 ```ctrl + C``` 退出並關閉。