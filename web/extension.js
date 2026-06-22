const extensionLanguages = ["zh-Hant", "zh-Hans", "en", "ja"];

const extensionCopy = {
  "zh-Hant": {
    productDepthEyebrow: "產品深度",
    productDepthTitle: "每條事業線都要能被銷售、交付、續約。",
    productDepthText: "股東需要看到的不只是產品名稱，而是買家痛點、交付物、KPI、收費邏輯與下一步平台化路徑。",
    productDepth: [
      ["Tokenity Monitor", "鏈上犯罪可視化與案件報告工具。", ["錢包圖譜、資金流、地址風險標籤、日文 executive report。", "KPI: 調查週期、人工複核率、企業月報續約。"], ["PoC US$30K+", "MRR US$5K+"]],
      ["Trust Score API", "把風險判斷變成可嵌入的資料產品。", ["wallet/project/merchant score、原因說明、事件通知、批次查詢。", "KPI: API calls、命中率、申訴率、合作平台數。"], ["Setup US$3K+", "Usage + MRR"]],
      ["BCA Japan", "智能合約審查、修復建議與持續監控。", ["先賣審查報告，再延伸成監控、再審與認證頁。", "KPI: 漏洞嚴重度、修復完成率、再審轉換率。"], ["Audit US$9K+", "Monitor US$3K+"]],
      ["AI Risk Intelligence", "輿情、詐騙敘事與客服資料的風險情報。", ["把公開訊號與內部客服資料變成 weekly risk brief。", "KPI: 提早偵測、處理時效、部門採用率。"], ["MRR US$3K+", "Retainer"]],
      ["Trust Evidence", "文件、影像、物流與驗證軌跡的可信證據層。", ["用 hash、QR、權限與稽核軌跡支援高價商品、物流、保險與供應鏈。", "KPI: 驗證次數、節點覆蓋、企業方案轉換。"], ["PoC US$19K+", "MRR US$3K+"]],
      ["AI Staffing Studio", "AI operator 與流程設計師的高階派遣/委託。", ["專注 AI 工具導入、報告產出、客戶成功與資料整理。", "KPI: 人月毛利、工具採用率、流程節省時間。"], ["US$5K+", "Person-month"]],
    ],
    gtmEyebrow: "銷售引擎",
    gtmTitle: "先拿到信任，再拿到長約。",
    gtmText: "Tokenity Japan 的銷售不是大量投廣告，而是用高信任內容、專家背書、paid discovery 與高管簡報切入。",
    gtm: [
      ["01 Signal", "每週追蹤法規、詐騙、RWA、AI DX、金融科技活動與政府補助訊號。", ["20 個觸發事件", "10 封高相關 outbound", "更新股東 pipeline"]],
      ["02 Trust", "用日文 one-pager、案例、風險 memo 與專家顧問名單降低客戶疑慮。", ["每月 2 篇內容", "每季 1 場 briefing", "建立法務/資安背書"]],
      ["03 Discovery", "陌生客戶先賣 paid discovery，不直接承諾平台客製。", ["2 週診斷", "固定 PoC 報價", "未成交客戶 nurture"]],
      ["04 Expand", "PoC 只是入口，目標是月費、API、監控與 AI operator。", ["30 天內續約提案", "每季加模組", "模板產品化"]],
    ],
    governanceEyebrow: "合規治理",
    governanceTitle: "把不能做的事寫清楚，才能做大。",
    governanceText: "STO/RWA、AI、人力派遣與鏈上情報都碰到監管邊界，因此必須建立產品紅線、審核責任與升級流程。",
    governance: [
      ["STO/RWA", "只提供技術、流程、資料室、監控與 readiness。", ["不代客募資、撮合、託管。", "token sale、收益承諾、投資建議須升級給日本律師。"]],
      ["Crypto Intelligence", "風險分數必須有信心等級、來源、人工複核與申訴流程。", ["推測標籤不得寫成確定犯罪結論。", "高風險報告保留證據鏈與版本紀錄。"]],
      ["AI Operations", "AI 產出是草稿與分析輔助，不自動做法律、投資、雇用或授信決策。", ["保留 prompt、資料來源與人工審核紀錄。", "敏感資料使用最小權限。"]],
      ["AI Staffing", "派遣、準委任、業務委託與職業介紹邊界須由社労士/律師確認。", ["避免實質指揮命令風險。", "合約定義成果、責任、資料權限與保密。"]],
    ],
    capitalEyebrow: "資本計畫",
    capitalTitle: "預算不是花費表，而是降低不確定性的路徑。",
    capitalText: "第一年度資金應優先買到市場證據、法律邊界、可交付模板、付費 PoC 與可續約客戶。",
    capital: [
      ["Lean", "JPY 12M-25M", "用一人公司與外包驗證市場。", ["網站/資料室/one-pagers", "demo dashboard", "法務與社労士初審", "100 家 pipeline"]],
      ["Attack", "JPY 30M-60M", "同步推進產品、銷售與 3-5 個 PoC。", ["產品工程 contractor", "KYC/AML/鏈上資料成本", "活動與高管簡報", "AI operator bench"]],
      ["Scale", "JPY 80M-150M", "已有 LOI 或付費 PoC 後擴張。", ["API 與監控平台", "日本合規顧問群", "客戶成功/銷售", "白標與 reseller 通路"]],
    ],
    dataRoomEyebrow: "資料室",
    dataRoomTitle: "海外股東下一輪應看到的文件。",
    dataRoom: ["日本法人登記簿與營業目的草案", "Tokenity 技術/商標/銷售授權文件", "STO/RWA 合規邊界 memo", "AI 派遣/業務委託合約模板", "三種 fixed-scope PoC SOW", "12 個月預算與 hiring gates", "100 家目標客戶清單與 pipeline", "Demo、報告模板與資料安全政策"],
    agentLaunchEyebrow: "AI Agent 刊發台",
    agentLaunchTitle: "每個商品都配置一個可執行 Agent。",
    agentLaunchText: "先把主題、任務、第一批刊發物與狀態拆清楚，再逐一啟動研究、商品頁、簡報、SOW 與銷售素材。",
    agentLaunch: [
      ["Monitor Agent", "Tokenity Monitor", "Ready", ["競品對標", "調查報告模板", "商品頁與 PoC SOW"]],
      ["RWA Agent", "STO/RWA Readiness", "Ready", ["readiness 問卷", "資料室清單", "合規紅線 memo"]],
      ["Risk Agent", "AI Risk Intelligence", "Ready", ["風險週報樣板", "詐騙敘事資料庫", "月費方案"]],
      ["BCA Agent", "BCA Japan", "Queued", ["審查流程", "漏洞分級", "audit + monitoring 報價"]],
      ["Staffing Agent", "AI Staffing Studio", "Queued", ["AI operator 職能", "人月報價", "契約邊界"]],
      ["API Agent", "Trust Score API", "Queued", ["score 欄位", "API package", "developer brief"]],
      ["Evidence Agent", "Trust Evidence", "Queued", ["QR/hash flow", "物流/高價商品案例", "PoC 範圍"]],
      ["IR Agent", "Investor Data Room", "Active", ["股東月報", "KPI dashboard", "預算與 hiring gates"]],
    ],
  },
  "zh-Hans": {
    productDepthEyebrow: "产品深度",
    productDepthTitle: "每条业务线都要能被销售、交付、续约。",
    productDepthText: "股东需要看到的不只是产品名称，而是买家痛点、交付物、KPI、收费逻辑与下一步平台化路径。",
    productDepth: [
      ["Tokenity Monitor", "链上犯罪可视化与案件报告工具。", ["钱包图谱、资金流、地址风险标签、日文 executive report。", "KPI: 调查周期、人工复核率、企业月报续约。"], ["PoC US$30K+", "MRR US$5K+"]],
      ["Trust Score API", "把风险判断变成可嵌入的数据产品。", ["wallet/project/merchant score、原因说明、事件通知、批次查询。", "KPI: API calls、命中率、申诉率、合作平台数。"], ["Setup US$3K+", "Usage + MRR"]],
      ["BCA Japan", "智能合约审查、修复建议与持续监控。", ["先卖审查报告，再延伸成监控、复审与认证页。", "KPI: 漏洞严重度、修复完成率、复审转换率。"], ["Audit US$9K+", "Monitor US$3K+"]],
      ["AI Risk Intelligence", "舆情、诈骗叙事与客服资料的风险情报。", ["把公开讯号与内部客服资料变成 weekly risk brief。", "KPI: 提前侦测、处理时效、部门采用率。"], ["MRR US$3K+", "Retainer"]],
      ["Trust Evidence", "文件、影像、物流与验证轨迹的可信证据层。", ["用 hash、QR、权限与稽核轨迹支持高价商品、物流、保险与供应链。", "KPI: 验证次数、节点覆盖、企业方案转换。"], ["PoC US$19K+", "MRR US$3K+"]],
      ["AI Staffing Studio", "AI operator 与流程设计师的高阶派遣/委托。", ["专注 AI 工具导入、报告产出、客户成功与资料整理。", "KPI: 人月毛利、工具采用率、流程节省时间。"], ["US$5K+", "Person-month"]],
    ],
    gtmEyebrow: "销售引擎",
    gtmTitle: "先拿到信任，再拿到长约。",
    gtmText: "Tokenity Japan 的销售不是大量投广告，而是用高信任内容、专家背书、paid discovery 与高管简报切入。",
    gtm: [["01 Signal", "每周追踪法规、诈骗、RWA、AI DX、金融科技活动与政府补助讯号。", ["20 个触发事件", "10 封高相关 outbound", "更新股东 pipeline"]], ["02 Trust", "用日文 one-pager、案例、风险 memo 与专家顾问名单降低客户疑虑。", ["每月 2 篇内容", "每季 1 场 briefing", "建立法务/资安背书"]], ["03 Discovery", "陌生客户先卖 paid discovery，不直接承诺平台客制。", ["2 周诊断", "固定 PoC 报价", "未成交客户 nurture"]], ["04 Expand", "PoC 只是入口，目标是月费、API、监控与 AI operator。", ["30 天内续约提案", "每季加模块", "模板产品化"]]],
    governanceEyebrow: "合规治理",
    governanceTitle: "把不能做的事写清楚，才能做大。",
    governanceText: "STO/RWA、AI、人力派遣与链上情报都碰到监管边界，因此必须建立产品红线、审核责任与升级流程。",
    governance: [["STO/RWA", "只提供技术、流程、资料室、监控与 readiness。", ["不代客募资、撮合、托管。", "token sale、收益承诺、投资建议须升级给日本律师。"]], ["Crypto Intelligence", "风险分数必须有信心等级、来源、人工复核与申诉流程。", ["推测标签不得写成确定犯罪结论。", "高风险报告保留证据链与版本记录。"]], ["AI Operations", "AI 产出是草稿与分析辅助，不自动做法律、投资、雇用或授信决策。", ["保留 prompt、资料来源与人工审核记录。", "敏感资料使用最小权限。"]], ["AI Staffing", "派遣、准委任、业务委托与职业介绍边界须由社劳士/律师确认。", ["避免实质指挥命令风险。", "合约定义成果、责任、资料权限与保密。"]]],
    capitalEyebrow: "资本计划",
    capitalTitle: "预算不是花费表，而是降低不确定性的路径。",
    capitalText: "第一年度资金应优先买到市场证据、法律边界、可交付模板、付费 PoC 与可续约客户。",
    capital: [["Lean", "JPY 12M-25M", "用一人公司与外包验证市场。", ["网站/资料室/one-pagers", "demo dashboard", "法务与社劳士初审", "100 家 pipeline"]], ["Attack", "JPY 30M-60M", "同步推进产品、销售与 3-5 个 PoC。", ["产品工程 contractor", "KYC/AML/链上资料成本", "活动与高管简报", "AI operator bench"]], ["Scale", "JPY 80M-150M", "已有 LOI 或付费 PoC 后扩张。", ["API 与监控平台", "日本合规顾问群", "客户成功/销售", "白标与 reseller 通路"]]],
    dataRoomEyebrow: "资料室",
    dataRoomTitle: "海外股东下一轮应看到的文件。",
    dataRoom: ["日本法人登记簿与营业目的草案", "Tokenity 技术/商标/销售授权文件", "STO/RWA 合规边界 memo", "AI 派遣/业务委托合约模板", "三种 fixed-scope PoC SOW", "12 个月预算与 hiring gates", "100 家目标客户清单与 pipeline", "Demo、报告模板与资料安全政策"],
    agentLaunchEyebrow: "AI Agent 刊发台",
    agentLaunchTitle: "每个产品都配置一个可执行 Agent。",
    agentLaunchText: "先把主题、任务、第一批刊发物与状态拆清楚，再逐一启动研究、产品页、简报、SOW 与销售素材。",
    agentLaunch: [
      ["Monitor Agent", "Tokenity Monitor", "Ready", ["竞品对标", "调查报告模板", "产品页与 PoC SOW"]],
      ["RWA Agent", "STO/RWA Readiness", "Ready", ["readiness 问卷", "资料室清单", "合规红线 memo"]],
      ["Risk Agent", "AI Risk Intelligence", "Ready", ["风险周报样板", "诈骗叙事数据库", "月费方案"]],
      ["BCA Agent", "BCA Japan", "Queued", ["审查流程", "漏洞分级", "audit + monitoring 报价"]],
      ["Staffing Agent", "AI Staffing Studio", "Queued", ["AI operator 职能", "人月报价", "契约边界"]],
      ["API Agent", "Trust Score API", "Queued", ["score 字段", "API package", "developer brief"]],
      ["Evidence Agent", "Trust Evidence", "Queued", ["QR/hash flow", "物流/高价商品案例", "PoC 范围"]],
      ["IR Agent", "Investor Data Room", "Active", ["股东月报", "KPI dashboard", "预算与 hiring gates"]],
    ],
  },
  en: {
    productDepthEyebrow: "Product depth",
    productDepthTitle: "Every business line must be sellable, deliverable and renewable.",
    productDepthText: "Shareholders need buyer pain, deliverables, KPIs, pricing logic and the path from service work into platform revenue.",
    productDepth: [["Tokenity Monitor", "On-chain crime visualization and case reporting.", ["Wallet graphs, fund flows, address labels and Japanese executive reports.", "KPIs: cycle time, review rate and enterprise report renewal."], ["PoC US$30K+", "MRR US$5K+"]], ["Trust Score API", "Embeddable risk data infrastructure.", ["Wallet/project/merchant scores, reason codes, alerts and batch lookup.", "KPIs: API calls, hit rate, appeals and partner platforms."], ["Setup US$3K+", "Usage + MRR"]], ["BCA Japan", "Smart-contract audit, remediation and monitoring.", ["Sell audit first, then re-audit, monitoring and certification pages.", "KPIs: severity, remediation rate and re-audit conversion."], ["Audit US$9K+", "Monitor US$3K+"]], ["AI Risk Intelligence", "Risk intelligence from narratives, fraud signals and support data.", ["Turn public and internal signals into weekly risk briefs.", "KPIs: early detection, response time and department adoption."], ["MRR US$3K+", "Retainer"]], ["Trust Evidence", "Trusted evidence for documents, media, logistics and verification trails.", ["Use hash, QR, permissions and audit trails for high-value goods and supply chains.", "KPIs: verifications, node coverage and enterprise conversion."], ["PoC US$19K+", "MRR US$3K+"]], ["AI Staffing Studio", "High-value AI operators and workflow designers.", ["Focus on AI adoption, reporting, customer success and data operations.", "KPIs: margin, tool adoption and time saved."], ["US$5K+", "Person-month"]]],
    gtmEyebrow: "Sales engine",
    gtmTitle: "Win trust first, then win retainers.",
    gtmText: "Tokenity Japan should enter through trusted content, expert credibility, paid discovery and executive briefings.",
    gtm: [["01 Signal", "Track regulation, fraud, RWA, AI DX, fintech events and government support every week.", ["20 trigger events", "10 relevant outbound notes", "Shareholder pipeline update"]], ["02 Trust", "Use Japanese one-pagers, cases, risk memos and expert lists to reduce buyer risk.", ["Two assets monthly", "One quarterly briefing", "Legal/security credibility"]], ["03 Discovery", "Sell paid discovery before promising custom platform work.", ["Two-week diagnosis", "Fixed PoC quote", "Nurture non-buyers"]], ["04 Expand", "PoC is the entry point; retainers, API, monitoring and operators are the target.", ["Renewal proposal in 30 days", "One module each quarter", "Productize templates"]]],
    governanceEyebrow: "Governance",
    governanceTitle: "Define what Tokenity will not do so it can scale safely.",
    governanceText: "STO/RWA, AI, staffing and on-chain intelligence touch regulated boundaries, so red lines and escalation paths must be explicit.",
    governance: [["STO/RWA", "Provide technology, workflows, data rooms, monitoring and readiness.", ["No fundraising agency, matching or custody.", "Escalate token sales, return promises and investment advice to Japanese counsel."]], ["Crypto Intelligence", "Risk scores need confidence levels, sources, human review and appeal process.", ["Do not present inferred labels as proven crime.", "Keep evidence chains and version history."]], ["AI Operations", "AI outputs are drafts and analysis support, not automated legal, investment, hiring or credit decisions.", ["Keep prompts, sources and review records.", "Use least-privilege access for sensitive data."]], ["AI Staffing", "Staffing, services and recruitment boundaries require labor/legal review.", ["Avoid direction-and-control risk.", "Contracts define outputs, responsibility, data access and confidentiality."]]],
    capitalEyebrow: "Capital plan",
    capitalTitle: "Budget is a path to reduce uncertainty.",
    capitalText: "First-year capital should buy market proof, legal boundaries, delivery templates, paid PoCs and renewable accounts.",
    capital: [["Lean", "JPY 12M-25M", "Validate with a one-person company and contractors.", ["website/data room", "demo dashboard", "legal/labor first review", "100-account pipeline"]], ["Attack", "JPY 30M-60M", "Advance product, sales and 3-5 PoCs in parallel.", ["engineering contractors", "KYC/AML/on-chain data", "events and briefings", "AI operator bench"]], ["Scale", "JPY 80M-150M", "Expand after LOIs or paid PoCs exist.", ["API and monitoring platform", "Japan compliance advisors", "customer success/sales", "white-label and resellers"]]],
    dataRoomEyebrow: "Data room",
    dataRoomTitle: "Documents overseas shareholders should see next.",
    dataRoom: ["Japanese registry and business-purpose draft", "Tokenity technology/trademark/sales authorization", "STO/RWA compliance boundary memo", "AI staffing/services contract templates", "Three fixed-scope PoC SOWs", "12-month budget and hiring gates", "100-account target list and pipeline", "Demo, report templates and data-security policy"],
    agentLaunchEyebrow: "AI Agent publishing desk",
    agentLaunchTitle: "Each product gets one executable agent.",
    agentLaunchText: "Define the topic, tasks, first publishing assets and status before launching research, product pages, decks, SOWs and sales material.",
    agentLaunch: [
      ["Monitor Agent", "Tokenity Monitor", "Ready", ["peer benchmark", "investigation report template", "product page and PoC SOW"]],
      ["RWA Agent", "STO/RWA Readiness", "Ready", ["readiness questionnaire", "data-room checklist", "compliance boundary memo"]],
      ["Risk Agent", "AI Risk Intelligence", "Ready", ["weekly risk brief", "fraud narrative database", "retainer package"]],
      ["BCA Agent", "BCA Japan", "Queued", ["audit workflow", "severity model", "audit + monitoring price"]],
      ["Staffing Agent", "AI Staffing Studio", "Queued", ["AI operator roles", "person-month pricing", "contract boundary"]],
      ["API Agent", "Trust Score API", "Queued", ["score fields", "API package", "developer brief"]],
      ["Evidence Agent", "Trust Evidence", "Queued", ["QR/hash flow", "logistics/luxury use case", "PoC scope"]],
      ["IR Agent", "Investor Data Room", "Active", ["shareholder monthly report", "KPI dashboard", "budget and hiring gates"]],
    ],
  },
  ja: {
    productDepthEyebrow: "製品深掘り",
    productDepthTitle: "各事業線は販売、提供、更新できる必要がある。",
    productDepthText: "株主が見るべきものは、買い手の課題、提供物、KPI、価格ロジック、プラットフォーム化の道筋である。",
    productDepth: [["Tokenity Monitor", "オンチェーン犯罪可視化と案件レポート。", ["ウォレットグラフ、資金フロー、リスクラベル、日本語 executive report。", "KPI: 調査サイクル、人間レビュー率、企業月報更新。"], ["PoC US$30K+", "MRR US$5K+"]], ["Trust Score API", "組み込み可能なリスクデータ基盤。", ["wallet/project/merchant score、理由、通知、バッチ照会。", "KPI: API calls、ヒット率、申立、連携先。"], ["Setup US$3K+", "Usage + MRR"]], ["BCA Japan", "スマートコントラクト監査、修復、監視。", ["監査から再監査、監視、認証ページへ拡張。", "KPI: 重大度、修復率、再監査転換率。"], ["Audit US$9K+", "Monitor US$3K+"]], ["AI Risk Intelligence", "世論、詐欺、CS データから作るリスク情報。", ["公開/内部シグナルを weekly risk brief に変換。", "KPI: 早期検知、対応時間、部門採用率。"], ["MRR US$3K+", "Retainer"]], ["Trust Evidence", "文書、画像、物流、検証履歴の信頼証跡。", ["hash、QR、権限、監査証跡で高額品とサプライチェーンを支援。", "KPI: 検証回数、ノード覆盖、企業版転換。"], ["PoC US$19K+", "MRR US$3K+"]], ["AI Staffing Studio", "AI operator と業務設計者。", ["AI 導入、報告、CS、データ業務に集中。", "KPI: 粗利、ツール採用率、削減時間。"], ["US$5K+", "Person-month"]]],
    gtmEyebrow: "営業エンジン",
    gtmTitle: "まず信頼を獲得し、その後に長期契約を獲得する。",
    gtmText: "Tokenity Japan は信頼性の高いコンテンツ、専門家の信用、paid discovery、経営層 briefing で市場に入る。",
    gtm: [["01 Signal", "規制、詐欺、RWA、AI DX、FinTech イベント、政府支援を毎週追跡。", ["20 件のトリガー", "10 件の outbound", "株主 pipeline 更新"]], ["02 Trust", "日本語 one-pager、事例、risk memo、専門家リストで不安を下げる。", ["毎月 2 件の資料", "四半期 1 回 briefing", "法務/セキュリティ信用"]], ["03 Discovery", "custom platform の前に paid discovery を販売。", ["2 週間診断", "固定 PoC 見積", "未成約 nurture"]], ["04 Expand", "PoC は入口で、月額、API、監視、operator が目標。", ["30 日以内に更新提案", "四半期 1 モジュール", "テンプレート製品化"]]],
    governanceEyebrow: "ガバナンス",
    governanceTitle: "やらないことを明確にするほど、事業は大きくできる。",
    governanceText: "STO/RWA、AI、人材、オンチェーン情報は規制境界に接するため、禁止線とエスカレーションを明確にする。",
    governance: [["STO/RWA", "技術、業務フロー、データルーム、監視、readiness を提供。", ["資金調達代行、マッチング、カストディは行わない。", "token sale、収益約束、投資助言は弁護士へ。"]], ["Crypto Intelligence", "リスクスコアには信頼度、出典、人間レビュー、申立プロセスが必要。", ["推定ラベルを犯罪確定表現にしない。", "証拠チェーンと版管理を保持。"]], ["AI Operations", "AI 出力は草稿と分析支援であり、法律、投資、雇用、与信判断を自動化しない。", ["prompt、出典、レビュー記録を保持。", "機微情報は最小権限で扱う。"]], ["AI Staffing", "派遣、委託、紹介の境界は社労士/弁護士が確認。", ["指揮命令リスクを避ける。", "契約で成果、責任、データ権限、秘密保持を定義。"]]],
    capitalEyebrow: "資本計画",
    capitalTitle: "予算は不確実性を減らす道筋である。",
    capitalText: "初年度資金は、市場証拠、法的境界、提供テンプレート、有償 PoC、更新可能な顧客を得るために使う。",
    capital: [["Lean", "JPY 12M-25M", "一人会社と contractor で検証。", ["サイト/資料室", "demo dashboard", "法務・社労士確認", "100 社 pipeline"]], ["Attack", "JPY 30M-60M", "製品、営業、3-5 件 PoC を並行。", ["開発 contractor", "KYC/AML/データ費", "イベントと briefing", "AI operator bench"]], ["Scale", "JPY 80M-150M", "LOI または有償 PoC 後に拡張。", ["API・監視基盤", "日本顧問団", "CS/営業", "white-label と reseller"]]],
    dataRoomEyebrow: "データルーム",
    dataRoomTitle: "海外株主が次に確認すべき書類。",
    dataRoom: ["日本法人登記簿と事業目的案", "Tokenity 技術/商標/販売権限書類", "STO/RWA コンプライアンス境界 memo", "AI 派遣/業務委託契約テンプレート", "3 種類の fixed-scope PoC SOW", "12 か月予算と hiring gates", "100 社ターゲットリストと pipeline", "Demo、報告テンプレート、データ安全方針"],
    agentLaunchEyebrow: "AI Agent 公開デスク",
    agentLaunchTitle: "各製品に実行可能な Agent を配置する。",
    agentLaunchText: "テーマ、タスク、最初の公開物、ステータスを定義し、調査、製品ページ、資料、SOW、営業素材を順次起動する。",
    agentLaunch: [
      ["Monitor Agent", "Tokenity Monitor", "Ready", ["競合ベンチマーク", "調査報告テンプレート", "製品ページと PoC SOW"]],
      ["RWA Agent", "STO/RWA Readiness", "Ready", ["readiness 質問票", "データルーム checklist", "コンプライアンス境界 memo"]],
      ["Risk Agent", "AI Risk Intelligence", "Ready", ["週次 risk brief", "詐欺ナラティブ DB", "月額プラン"]],
      ["BCA Agent", "BCA Japan", "Queued", ["監査フロー", "重大度モデル", "audit + monitoring 価格"]],
      ["Staffing Agent", "AI Staffing Studio", "Queued", ["AI operator 役割", "人月価格", "契約境界"]],
      ["API Agent", "Trust Score API", "Queued", ["score 項目", "API package", "developer brief"]],
      ["Evidence Agent", "Trust Evidence", "Queued", ["QR/hash flow", "物流/高額品 use case", "PoC 範囲"]],
      ["IR Agent", "Investor Data Room", "Active", ["株主月報", "KPI dashboard", "予算と hiring gates"]],
    ],
  },
};

function extElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function extLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang") || localStorage.getItem("tokenityLang") || document.documentElement.lang || "zh-Hant";
  return extensionLanguages.includes(requested) ? requested : "zh-Hant";
}

function renderExtension(lang = extLanguage()) {
  const copy = extensionCopy[lang];
  document.querySelectorAll("[data-rich-i18n]").forEach((element) => {
    const key = element.dataset.richI18n;
    if (copy[key]) element.textContent = copy[key];
  });

  const productDepthGrid = document.getElementById("productDepthGrid");
  productDepthGrid.replaceChildren();
  copy.productDepth.forEach(([title, text, bullets, meta]) => {
    const card = extElement("article", "product-depth-card");
    const list = extElement("ul");
    bullets.forEach((bullet) => list.append(extElement("li", "", bullet)));
    const metaGrid = extElement("div", "depth-meta");
    meta.forEach((item) => metaGrid.append(extElement("span", "", item)));
    card.append(extElement("span", "", "Product"), extElement("h3", "", title), extElement("p", "", text), list, metaGrid);
    productDepthGrid.append(card);
  });

  const gtmBoard = document.getElementById("gtmBoard");
  gtmBoard.replaceChildren();
  copy.gtm.forEach(([stage, text, steps]) => {
    const card = extElement("article", "gtm-stage");
    const list = extElement("ul");
    steps.forEach((step) => list.append(extElement("li", "", step)));
    card.append(extElement("span", "", stage), extElement("h3", "", stage.replace(/^[0-9]+\s*/, "")), extElement("p", "", text), list);
    gtmBoard.append(card);
  });

  const agentLaunchGrid = document.getElementById("agentLaunchGrid");
  agentLaunchGrid.replaceChildren();
  copy.agentLaunch.forEach(([agent, product, status, tasks]) => {
    const card = extElement("article", "agent-launch-card");
    const list = extElement("ul");
    tasks.forEach((task) => list.append(extElement("li", "", task)));
    card.append(extElement("span", "", agent), extElement("h3", "", product), extElement("strong", "", status), list);
    agentLaunchGrid.append(card);
  });

  const governanceGrid = document.getElementById("governanceGrid");
  governanceGrid.replaceChildren();
  copy.governance.forEach(([title, text, rules]) => {
    const card = extElement("article", "governance-card");
    const summary = extElement("div");
    summary.append(extElement("span", "", "Control"), extElement("h3", "", title), extElement("p", "", text));
    const list = extElement("ul");
    rules.forEach((rule) => list.append(extElement("li", "", rule)));
    card.append(summary, list);
    governanceGrid.append(card);
  });

  const capitalGrid = document.getElementById("capitalGrid");
  capitalGrid.replaceChildren();
  copy.capital.forEach(([title, value, text, items]) => {
    const card = extElement("article", "capital-card");
    const list = extElement("ul");
    items.forEach((item) => list.append(extElement("li", "", item)));
    card.append(extElement("span", "", title), extElement("strong", "", value), extElement("p", "", text), list);
    capitalGrid.append(card);
  });

  const dataRoomList = document.getElementById("dataRoomList");
  dataRoomList.replaceChildren();
  copy.dataRoom.forEach((item) => dataRoomList.append(extElement("li", "", item)));
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => window.setTimeout(() => renderExtension(button.dataset.lang), 0));
});

renderExtension();
