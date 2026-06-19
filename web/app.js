const languages = ["zh-Hant", "zh-Hans", "en", "ja"];

const i18n = {
  "zh-Hant": {
    metaTitle: "Tokenity Japan 股東 Wave 資料室",
    brandSub: "股東 Wave 資料室",
    navThesis: "投資論點",
    navProducts: "產品",
    navRoadmap: "路線圖",
    navMarket: "市場",
    navPeers: "同業分析",
    navNext: "下一步",
    heroImageAlt: "日本金融城市上方的抽象金融科技信任基礎設施網路",
    heroEyebrow: "機密股東簡報 | V1 | 2026-06-16",
    heroTitle: "日本 AI + Web3 信任科技基礎設施",
    heroCopy:
      "Tokenity Japan 將以高槓桿一人公司模式啟動，由 AI agents、外部專家與 Tokenity 技術架構共同支撐：Tokenity Monitor、Tokenity Verify、BCA、AI 風險情報、可信證據驗證與 AI 人力派遣。",
    heroPrimary: "90 天啟動計畫",
    heroSecondary: "查看同業分析",
    noticeTitle: "揭露提示",
    noticeText:
      "本頁為營運規劃與股東溝通草案，並非法律、勞務派遣、證券、暗号資産、稅務或投資建議。正式執行前須由日本律師、稅理士、社労士與資安顧問審閱。",
    thesisEyebrow: "投資論點",
    thesisTitle: "不是 AI 客服公司，而是信任層公司。",
    thesisText:
      "公司應以防詐、合規、鏈上情報、智能合約審查、可信證據與 AI 營運為主軸。AI 客服有價值，但不是核心股權故事。",
    evidenceEyebrow: "公開錨點",
    evidenceTitle: "Tokenity 法人與產品規劃",
    productsEyebrow: "產品系統",
    productsTitle: "全部規劃事業線",
    productsText: "第一年度應先銷售可包裝的 PoC 專案與月費情報服務，再逐步投入重型平台開發。",
    agentsEyebrow: "一人公司",
    agentsTitle: "AI agents 取代部門。",
    agentsText:
      "CEO 保留決策權。Agents 處理可重複的研究、寫作、分析、QA、跟進與規劃工作；受監管或高風險內容交由真人專家審閱。",
    roadmapEyebrow: "執行路線圖",
    roadmapTitle: "開發進度與預算",
    marketEyebrow: "日本市場產值",
    marketTitle: "商業價值估算",
    marketText:
      "可服務機會來自日本 AI、資安、DX、區塊鏈、暗号資産合規、RegTech 與 IT 人力市場的交集。本模型採可服務市場區間，而不是將所有 TAM 直接相加。",
    peersEyebrow: "其他公司分析",
    peersTitle: "同業地圖與戰略空白",
    peersText:
      "Tokenity Japan 不應複製任何單一同業。真正的戰略空白，是在日本市場同時整合鏈上信任、AI 風險情報、智能合約審查、可信證據與 AI 人力派遣。",
    riskEyebrow: "風險控管",
    riskTitle: "執行護欄",
    actionsEyebrow: "立即行動",
    actionsTitle: "第一個月營運衝刺",
    footerLeft: "Tokenity Japan Shareholder Wave Room | 內部規劃草案",
    footerRight: "來源包含日本市場公開資料、OSAKA 金融科技活動案例、Tokenity 規劃資料與營運計畫書中引用的市場研究基準。",
    metrics: [
      ["第一年營收目標", "JPY 30M-80M"],
      ["精實預算", "JPY 12M-25M"],
      ["核心可服務市場", "JPY 100B-300B"],
      ["營運模型", "1 CEO + 12 Agents"],
    ],
    thesisCards: [
      ["01", "信任科技 SaaS", "Tokenity Monitor Japan、Tokenity Verify、Trust Score API、AI 風險儀表板與可信證據驗證，服務金融、法律、合規、物流與公部門 DX。"],
      ["02", "AI Agent 營運", "一人 CEO 模式，由 AI agents 支援研究、銷售、產品、財務、合規、內容、客戶成功與分析報告。"],
      ["03", "AI 人力派遣工作室", "AI operators、流程設計師、資料分析師與 Web3 風險分析師嵌入客戶端，形成科技化服務交付。"],
    ],
    evidence: [
      ["法人狀態", "Tokenity Japan", "Tokenity 為本計畫使用的品牌名稱；日本法人番号、所在地與登記目的須以正式設立/登記文件為準。"],
      ["產品規劃", "Tokenity Monitor", "規劃為利用區塊鏈技術的暗号資産犯罪可視化、錢包風險分析與鏈上金流追蹤工具。"],
      ["待確認事項", "登記與授權", "代表者、資本金、營業項目、產品權利與日本銷售授權，皆須於簽約或對外募資前完成確認。"],
    ],
    productHeaders: ["事業線", "日本產品/方案", "目標買家", "商業模式"],
    products: [
      ["Tokenity Monitor Japan", "暗号資産犯罪可視化、錢包圖譜、鏈上金流報告", "金融機構、交易所、律師、合規顧問", "JPY 3M-8M PoC、SaaS 席次、企業授權"],
      ["Tokenity Verify / Trust Score API", "錢包、專案、商家與資產信任分數，搭配 AI 說明", "平台、Web3 專案、金融科技、企業風控", "API call、批次查詢、白標方案"],
      ["BCA Japan", "智能合約審查台、日文報告、修復建議與認證", "Web3、NFT、RWA、會員點數、tokenization 專案", "每件 JPY 1.5M-5M、retainer、複審"],
      ["AI Risk Intelligence", "輿情監控、詐騙敘事偵測、客服資料分析", "品牌、觀光、金融、政府、零售、旅宿", "JPY 500K-2M 月費"],
      ["Trust Evidence Platform", "文件、影像、物流節點 hash、QR 驗證與稽核軌跡", "高價商品、物流、製造、保險、金融", "JPY 3M-10M PoC、按次驗證、企業方案"],
      ["AI Staffing Studio", "AI operators、流程設計師、風險分析師與日中雙語 PM", "中小企業、跨境商務、零售、旅宿、企業 DX", "JPY 600K-1.5M / 人月"],
    ],
    agents: [
      ["策略", "CEO Strategy、Finance、Market Research"],
      ["建置", "Product Manager、UI/UX、Engineering、Analyst"],
      ["銷售", "Sales、Content、Grant/Government、Customer Success"],
      ["控管", "Legal/Compliance、風險 memo、契約草案與升級判斷清單"],
    ],
    timeline: [
      ["0-90 天", "可銷售 MVP", "日文 one-pager、landing page、demo dashboard、報告產生器、100 家目標名單與第一份 PoC 提案。", "預算: JPY 3M-8M"],
      ["3-6 個月", "PoC 交付", "Tokenity Monitor、Trust Score、AI Risk Intelligence 與 AI Staffing Studio 合計 3-5 個試點。", "累計預算: JPY 8M-18M"],
      ["6-12 個月", "商業化上線", "將試點轉為 MRR，包裝 BCA Japan，擴張 AI 派遣並發布案例。", "年度預算區間: JPY 12M-60M"],
      ["12-24 個月", "擴張", "10-20 個企業客戶、reseller network、Trust Score API beta 與進階可信證據流程。", "目標: JPY 150M-300M revenue"],
    ],
    budgets: [
      ["精實啟動", "JPY 12M-25M / 12 個月", "適合用 AI agents 與外部承包商驗證市場。"],
      ["進攻方案", "JPY 30M-60M / 12 個月", "適合同步推進產品 MVP、銷售、AI 派遣與活動。"],
      ["擴張方案", "JPY 80M-150M / 12 個月", "適合已有策略資金、LOI 或已簽企業試點後啟動。"],
    ],
    markets: [
      ["Narrow SAM", "JPY 30B-80B", "暗号資産犯罪可視化、Web3 compliance、BCA audit 與鏈上調查報告。"],
      ["Core SAM", "JPY 100B-300B", "AI 防詐情報、輿情風險、合規報告、Trust Evidence 與 AI 人力派遣。"],
      ["Expanded SAM", "JPY 500B-1T+", "企業 AI DX、資安自動化、供應鏈存證、公部門 DX 與 managed AI ops。"],
    ],
    chart: [["Y1", "30-80M", "18%"], ["Y2", "150-300M", "34%"], ["Y3", "500M-1B", "58%"], ["Y5", "1B-3B+", "82%"]],
    peerFilters: [["all", "全部"], ["chain", "鏈上"], ["audit", "審查"], ["ai", "AI / Data"], ["staffing", "人力"]],
    lesson: "啟示",
    peers: [
      ["chain", "Chainalysis", "全球區塊鏈調查與合規情報標竿。", "企業信任需要案件流程、標籤、報告與監管友善語言。"],
      ["chain", "TRM Labs", "服務金融機構、crypto 公司與公部門的風險情報平台。", "應將 crypto intelligence 定位為金融犯罪基礎設施，而非投機 Web3 工具。"],
      ["chain", "Elliptic", "提供區塊鏈分析與錢包風險評分，具合規導向 API。", "Trust Score API 若包裝簡單，可以成為夥伴通路。"],
      ["audit", "CertiK", "智能合約審查、安全評級與 Web3 專案監控。", "BCA Japan 應銷售 audit + monitoring，而不是一次性 PDF。"],
      ["audit", "OpenZeppelin", "區塊鏈團隊信任的資安工具、合約庫與審查品牌。", "開發者信任來自標準、可重複方法論與清楚修復建議。"],
      ["ai", "Palantir", "企業資料營運、情報工作流與決策儀表板。", "董事會層級故事應是營運情報與決策支援。"],
      ["ai", "PKSHA Technology", "日本 AI 解決方案、演算法、自動化與企業 AI 導入。", "在地化與日本企業銷售動作，和模型能力一樣重要。"],
      ["ai", "Abeja", "日本 AI 導入、資料平台與 DX 支援。", "AI transformation 必須連到實際營運與可衡量 KPI。"],
      ["staffing", "Recruit / Persol", "大型人力與 HR 平台，擁有深厚日本雇主關係。", "Tokenity Japan 應避開商品化派遣，銷售 AI-enabled specialist operations。"],
    ],
    risks: [
      ["法人權限", "重大合約前須取得 Tokenity Japan 官方登記簿。"],
      ["暗号資産法規", "除非取得相應許可，避免交易所、保管、經紀、token sale 或投資建議行為。"],
      ["AI 派遣法", "日本勞務派遣與業務委託結構須由社労士/律師審查。"],
      ["誤判風險", "錢包標籤與風險分數需要信心等級、人工複核與申訴流程。"],
      ["資料隱私", "客戶、錢包、客服與輿情資料須有保存、權限與稽核政策。"],
    ],
    actions: [
      "確認 Tokenity 技術授權與日本銷售權限。",
      "取得日本官方登記簿，確認代表者、資本金與登記目的。",
      "發布密碼保護的股東版本頁面。",
      "準備 Tokenity Monitor、Trust Score API、BCA Japan 與 AI Staffing Studio 的日文 one-pager。",
      "建立金融、法律、Web3、物流、觀光與 AI DX 的 100 家目標名單。",
      "發出第一批 50 封 outbound email，安排 5-10 場 executive briefing。",
      "建立 paid discovery proposal 與三種固定範圍 PoC package。",
      "簽約客戶前保留日本法務、稅務與勞務派遣審查。"],
  },
  "zh-Hans": {
    metaTitle: "Tokenity Japan 股东 Wave 资料室",
    brandSub: "股东 Wave 资料室",
    navThesis: "投资论点",
    navProducts: "产品",
    navRoadmap: "路线图",
    navMarket: "市场",
    navPeers: "同业分析",
    navNext: "下一步",
    heroImageAlt: "日本金融城市上方的抽象金融科技信任基础设施网络",
    heroEyebrow: "机密股东简报 | V1 | 2026-06-16",
    heroTitle: "日本 AI + Web3 信任科技基础设施",
    heroCopy:
      "Tokenity Japan 将以高杠杆一人公司模式启动，由 AI agents、外部专家与 Tokenity 技术架构共同支撑：Tokenity Monitor、Tokenity Verify、BCA、AI 风险情报、可信证据验证与 AI 人力派遣。",
    heroPrimary: "90 天启动计划",
    heroSecondary: "查看同业分析",
    noticeTitle: "披露提示",
    noticeText:
      "本页为运营规划与股东沟通草案，并非法律、劳务派遣、证券、暗号资产、税务或投资建议。正式执行前须由日本律师、税理士、社劳士与资安顾问审阅。",
    thesisEyebrow: "投资论点",
    thesisTitle: "不是 AI 客服公司，而是信任层公司。",
    thesisText:
      "公司应以防诈、合规、链上情报、智能合约审查、可信证据与 AI 运营为主轴。AI 客服有价值，但不是核心股权故事。",
    evidenceEyebrow: "公开锚点",
    evidenceTitle: "Tokenity 法人和产品规划",
    productsEyebrow: "产品系统",
    productsTitle: "全部规划业务线",
    productsText: "第一年度应先销售可包装的 PoC 项目与月费情报服务，再逐步投入重型平台开发。",
    agentsEyebrow: "一人公司",
    agentsTitle: "AI agents 取代部门。",
    agentsText:
      "CEO 保留决策权。Agents 处理可重复的研究、写作、分析、QA、跟进与规划工作；受监管或高风险内容交由真人专家审阅。",
    roadmapEyebrow: "执行路线图",
    roadmapTitle: "开发进度与预算",
    marketEyebrow: "日本市场产值",
    marketTitle: "商业价值估算",
    marketText:
      "可服务机会来自日本 AI、资安、DX、区块链、暗号资产合规、RegTech 与 IT 人力市场的交集。本模型采用可服务市场区间，而不是将所有 TAM 直接相加。",
    peersEyebrow: "其他公司分析",
    peersTitle: "同业地图与战略空白",
    peersText:
      "Tokenity Japan 不应复制任何单一同业。真正的战略空白，是在日本市场同时整合链上信任、AI 风险情报、智能合约审查、可信证据与 AI 人力派遣。",
    riskEyebrow: "风险控管",
    riskTitle: "执行护栏",
    actionsEyebrow: "立即行动",
    actionsTitle: "第一个月运营冲刺",
    footerLeft: "Tokenity Japan Shareholder Wave Room | 内部规划草案",
    footerRight: "来源包含日本市场公开资料、OSAKA 金融科技活动案例、Tokenity 规划资料与运营计划书中引用的市场研究基准。",
    metrics: [
      ["第一年营收目标", "JPY 30M-80M"],
      ["精实预算", "JPY 12M-25M"],
      ["核心可服务市场", "JPY 100B-300B"],
      ["运营模型", "1 CEO + 12 Agents"],
    ],
    thesisCards: [
      ["01", "信任科技 SaaS", "Tokenity Monitor Japan、Tokenity Verify、Trust Score API、AI 风险仪表板与可信证据验证，服务金融、法律、合规、物流与公部门 DX。"],
      ["02", "AI Agent 运营", "一人 CEO 模式，由 AI agents 支持研究、销售、产品、财务、合规、内容、客户成功与分析报告。"],
      ["03", "AI 人力派遣工作室", "AI operators、流程设计师、数据分析师与 Web3 风险分析师嵌入客户端，形成科技化服务交付。"],
    ],
    evidence: [
      ["法人状态", "Tokenity Japan", "Tokenity 为本计划使用的品牌名称；日本法人编号、所在地与登记目的须以正式设立/登记文件为准。"],
      ["产品规划", "Tokenity Monitor", "规划为利用区块链技术的暗号资产犯罪可视化、钱包风险分析与链上金流追踪工具。"],
      ["待确认事项", "登记与授权", "代表者、资本金、营业项目、产品权利与日本销售授权，皆须在签约或对外募资前完成确认。"],
    ],
    productHeaders: ["业务线", "日本产品/方案", "目标买家", "商业模式"],
    products: [
      ["Tokenity Monitor Japan", "暗号资产犯罪可视化、钱包图谱、链上金流报告", "金融机构、交易所、律师、合规顾问", "JPY 3M-8M PoC、SaaS 席位、企业授权"],
      ["Tokenity Verify / Trust Score API", "钱包、项目、商家与资产信任分数，搭配 AI 说明", "平台、Web3 项目、金融科技、企业风控", "API call、批次查询、白标方案"],
      ["BCA Japan", "智能合约审查台、日文报告、修复建议与认证", "Web3、NFT、RWA、会员点数、tokenization 项目", "每件 JPY 1.5M-5M、retainer、复审"],
      ["AI Risk Intelligence", "舆情监控、诈骗叙事侦测、客服资料分析", "品牌、观光、金融、政府、零售、旅宿", "JPY 500K-2M 月费"],
      ["Trust Evidence Platform", "文件、影像、物流节点 hash、QR 验证与稽核轨迹", "高价商品、物流、制造、保险、金融", "JPY 3M-10M PoC、按次验证、企业方案"],
      ["AI Staffing Studio", "AI operators、流程设计师、风险分析师与日中双语 PM", "中小企业、跨境商务、零售、旅宿、企业 DX", "JPY 600K-1.5M / 人月"],
    ],
    agents: [["策略", "CEO Strategy、Finance、Market Research"], ["建置", "Product Manager、UI/UX、Engineering、Analyst"], ["销售", "Sales、Content、Grant/Government、Customer Success"], ["控管", "Legal/Compliance、风险 memo、契约草案与升级判断清单"]],
    timeline: [
      ["0-90 天", "可销售 MVP", "日文 one-pager、landing page、demo dashboard、报告生成器、100 家目标名单与第一份 PoC 提案。", "预算: JPY 3M-8M"],
      ["3-6 个月", "PoC 交付", "Tokenity Monitor、Trust Score、AI Risk Intelligence 与 AI Staffing Studio 合计 3-5 个试点。", "累计预算: JPY 8M-18M"],
      ["6-12 个月", "商业化上线", "将试点转为 MRR，包装 BCA Japan，扩张 AI 派遣并发布案例。", "年度预算区间: JPY 12M-60M"],
      ["12-24 个月", "扩张", "10-20 个企业客户、reseller network、Trust Score API beta 与进阶可信证据流程。", "目标: JPY 150M-300M revenue"],
    ],
    budgets: [["精实启动", "JPY 12M-25M / 12 个月", "适合用 AI agents 与外部承包商验证市场。"], ["进攻方案", "JPY 30M-60M / 12 个月", "适合同步推进产品 MVP、销售、AI 派遣与活动。"], ["扩张方案", "JPY 80M-150M / 12 个月", "适合已有战略资金、LOI 或已签企业试点后启动。"]],
    markets: [["Narrow SAM", "JPY 30B-80B", "暗号资产犯罪可视化、Web3 compliance、BCA audit 与链上调查报告。"], ["Core SAM", "JPY 100B-300B", "AI 防诈情报、舆情风险、合规报告、Trust Evidence 与 AI 人力派遣。"], ["Expanded SAM", "JPY 500B-1T+", "企业 AI DX、资安自动化、供应链存证、公部门 DX 与 managed AI ops。"]],
    chart: [["Y1", "30-80M", "18%"], ["Y2", "150-300M", "34%"], ["Y3", "500M-1B", "58%"], ["Y5", "1B-3B+", "82%"]],
    peerFilters: [["all", "全部"], ["chain", "链上"], ["audit", "审查"], ["ai", "AI / Data"], ["staffing", "人力"]],
    lesson: "启示",
    peers: [
      ["chain", "Chainalysis", "全球区块链调查与合规情报标杆。", "企业信任需要案件流程、标签、报告与监管友善语言。"],
      ["chain", "TRM Labs", "服务金融机构、crypto 公司与公部门的风险情报平台。", "应将 crypto intelligence 定位为金融犯罪基础设施，而非投机 Web3 工具。"],
      ["chain", "Elliptic", "提供区块链分析与钱包风险评分，具合规导向 API。", "Trust Score API 若包装简单，可以成为伙伴通路。"],
      ["audit", "CertiK", "智能合约审查、安全评级与 Web3 项目监控。", "BCA Japan 应销售 audit + monitoring，而不是一次性 PDF。"],
      ["audit", "OpenZeppelin", "区块链团队信任的资安工具、合约库与审查品牌。", "开发者信任来自标准、可重复方法论与清楚修复建议。"],
      ["ai", "Palantir", "企业数据运营、情报工作流与决策仪表板。", "董事会层级故事应是运营情报与决策支持。"],
      ["ai", "PKSHA Technology", "日本 AI 解决方案、算法、自动化与企业 AI 导入。", "在地化与日本企业销售动作，和模型能力一样重要。"],
      ["ai", "Abeja", "日本 AI 导入、数据平台与 DX 支持。", "AI transformation 必须连到实际运营与可衡量 KPI。"],
      ["staffing", "Recruit / Persol", "大型人力与 HR 平台，拥有深厚日本雇主关系。", "Tokenity Japan 应避开商品化派遣，销售 AI-enabled specialist operations。"],
    ],
    risks: [["法人权限", "重大合约前须取得 Tokenity Japan 官方登记簿。"], ["暗号资产法规", "除非取得相应许可，避免交易所、保管、经纪、token sale 或投资建议行为。"], ["AI 派遣法", "日本劳务派遣与业务委托结构须由社劳士/律师审查。"], ["误判风险", "钱包标签与风险分数需要信心等级、人工复核与申诉流程。"], ["数据隐私", "客户、钱包、客服与舆情数据须有保存、权限与稽核政策。"]],
    actions: ["确认 Tokenity 技术授权与日本销售权限。", "取得日本官方登记簿，确认代表者、资本金与登记目的。", "发布密码保护的股东版本页面。", "准备 Tokenity Monitor、Trust Score API、BCA Japan 与 AI Staffing Studio 的日文 one-pager。", "建立金融、法律、Web3、物流、观光与 AI DX 的 100 家目标名单。", "发出第一批 50 封 outbound email，安排 5-10 场 executive briefing。", "建立 paid discovery proposal 与三种固定范围 PoC package。", "签约客户前保留日本法务、税务与劳务派遣审查。"],
  },
  en: {
    metaTitle: "Tokenity Japan Shareholder Wave Room",
    brandSub: "Shareholder Wave Room",
    navThesis: "Thesis",
    navProducts: "Products",
    navRoadmap: "Roadmap",
    navMarket: "Market",
    navPeers: "Peer Analysis",
    navNext: "Next",
    heroImageAlt: "Abstract fintech trust infrastructure network over Japan financial district",
    heroEyebrow: "Confidential shareholder briefing | V1 | 2026-06-16",
    heroTitle: "AI + Web3 Trust Infrastructure for Japan",
    heroCopy:
      "Tokenity Japan is designed as a high-leverage one-person company operated by AI agents, expert partners and Tokenity technology stack: Tokenity Monitor, Tokenity Verify, BCA, AI risk intelligence, evidence verification and AI staffing.",
    heroPrimary: "90-Day Launch Plan",
    heroSecondary: "View Peer Analysis",
    noticeTitle: "Disclosure note",
    noticeText:
      "This page is a planning and shareholder communication draft. It is not legal, labor-dispatch, securities, crypto-asset, tax or investment advice. Japanese counsel, tax advisors, labor specialists and security advisors must review execution.",
    thesisEyebrow: "Investment thesis",
    thesisTitle: "Not an AI chatbot company. A trust layer company.",
    thesisText:
      "The company should lead with anti-fraud, compliance, on-chain intelligence, smart-contract audit, trusted evidence and AI-enabled operations. AI customer support is useful, but it is not the core equity story.",
    evidenceEyebrow: "Public anchor",
    evidenceTitle: "Tokenity entity and product plan",
    productsEyebrow: "Product system",
    productsTitle: "All planned business lines",
    productsText: "The first year should sell packaged proof-of-concept projects and recurring intelligence services before heavy platform buildout.",
    agentsEyebrow: "One-person company",
    agentsTitle: "AI agents replace departments.",
    agentsText:
      "The CEO remains the decision-maker. Agents handle repeatable research, writing, analysis, QA, follow-up and planning work. Expert humans review regulated or high-risk outputs.",
    roadmapEyebrow: "Execution roadmap",
    roadmapTitle: "Development progress and budget",
    marketEyebrow: "Japan market value",
    marketTitle: "Commercial value estimate",
    marketText:
      "The addressable opportunity is the overlap of Japan AI, cybersecurity, DX, blockchain, crypto compliance, RegTech and IT staffing. The model uses serviceable market ranges rather than adding all TAM figures.",
    peersEyebrow: "Other company analysis",
    peersTitle: "Peer map and strategic whitespace",
    peersText:
      "Tokenity Japan should not copy any single peer. The strategic whitespace is the combination of on-chain trust, AI risk intelligence, smart-contract audit, evidence verification and AI staffing in Japan.",
    riskEyebrow: "Risk control",
    riskTitle: "Execution guardrails",
    actionsEyebrow: "Immediate actions",
    actionsTitle: "First month operating sprint",
    footerLeft: "Tokenity Japan Shareholder Wave Room | Internal planning draft",
    footerRight: "Sources include Japan market public materials, OSAKA fintech event references, Tokenity planning materials and market research references cited in the planning dossier.",
    metrics: [["Year 1 Revenue Target", "JPY 30M-80M"], ["Lean Budget", "JPY 12M-25M"], ["Core SAM", "JPY 100B-300B"], ["Operating Model", "1 CEO + 12 Agents"]],
    thesisCards: [["01", "Trust Technology SaaS", "Tokenity Monitor Japan, Tokenity Verify, Trust Score API, AI risk dashboard and evidence verification for finance, law, compliance, logistics and public-sector DX."], ["02", "AI Agent Operations", "A one-person CEO model supported by AI agents for research, sales, product, finance, compliance, content, customer success and analyst reporting."], ["03", "AI Staffing Studio", "AI operators, workflow designers, data analysts and Web3 risk analysts embedded into clients as technology-enabled service delivery."]],
    evidence: [["Entity status", "Tokenity Japan", "Tokenity is the working brand for this plan. Japanese corporate number, address and business purposes must be confirmed through formal incorporation or registry documents."], ["Product plan", "Tokenity Monitor", "Planned as a blockchain-based crypto-asset crime visualization, wallet risk analysis and on-chain flow tracing tool."], ["Items to confirm", "Registry and rights", "Representative, capital, business purposes, product rights and Japan sales authorization must be confirmed before contracts or external fundraising."]],
    productHeaders: ["Business line", "Japan offer", "Target buyers", "Commercial model"],
    products: [["Tokenity Monitor Japan", "Crypto-asset crime visualization, wallet graphing, flow-of-funds reports", "Financial institutions, exchanges, law firms, compliance consultants", "JPY 3M-8M PoC, SaaS seats, enterprise license"], ["Tokenity Verify / Trust Score API", "Wallet, project, merchant and asset trust scoring with AI explanation", "Platforms, Web3 projects, fintech, enterprise risk teams", "API calls, batch checks, white-label package"], ["BCA Japan", "Smart-contract audit desk, Japanese report, remediation and certification", "Web3, NFT, RWA, loyalty, tokenization projects", "JPY 1.5M-5M per audit, retainer, re-audit"], ["AI Risk Intelligence", "Public-opinion monitoring, fraud narrative detection, customer inquiry analytics", "Brands, tourism, finance, government, retail, hospitality", "JPY 500K-2M monthly subscription"], ["Trust Evidence Platform", "Document, image and logistics-event hash, QR verification and audit trails", "High-value goods, logistics, manufacturing, insurance, finance", "JPY 3M-10M PoC, per-event verification, enterprise plan"], ["AI Staffing Studio", "AI operators, workflow designers, risk analysts and bilingual project managers", "SMEs, cross-border commerce, retail, hospitality, enterprise DX", "JPY 600K-1.5M per person-month"]],
    agents: [["Strategy", "CEO Strategy, Finance, Market Research"], ["Build", "Product Manager, UI/UX, Engineering, Analyst"], ["Sell", "Sales, Content, Grant/Government, Customer Success"], ["Control", "Legal/Compliance, risk memos, contract drafts and escalation checklists"]],
    timeline: [["0-90 days", "Sell-ready MVP", "Japanese one-pagers, landing page, demo dashboard, report generator, 100 target accounts and first PoC proposal.", "Budget: JPY 3M-8M"], ["3-6 months", "PoC delivery", "3-5 pilots across Tokenity Monitor, Trust Score, AI Risk Intelligence and AI Staffing Studio.", "Budget: JPY 8M-18M cumulative"], ["6-12 months", "Commercial launch", "Convert pilots into MRR, package BCA Japan, expand AI staffing and publish case studies.", "Budget: JPY 12M-60M annual range"], ["12-24 months", "Scale", "10-20 enterprise customers, reseller network, Trust Score API beta and advanced evidence workflows.", "Target: JPY 150M-300M revenue"]],
    budgets: [["Lean launch", "JPY 12M-25M / 12 months", "Best for market validation with AI agents and external contractors."], ["Attack plan", "JPY 30M-60M / 12 months", "Best for parallel product MVP, sales, AI staffing and events."], ["Scale plan", "JPY 80M-150M / 12 months", "Best after strategic capital, LOIs or signed enterprise pilots."]],
    markets: [["Narrow SAM", "JPY 30B-80B", "Crypto-asset crime visualization, Web3 compliance, BCA audit and on-chain investigation reports."], ["Core SAM", "JPY 100B-300B", "AI fraud intelligence, public-opinion risk, compliance reports, Trust Evidence and AI staffing."], ["Expanded SAM", "JPY 500B-1T+", "Enterprise AI DX, security automation, supply-chain evidence, public-sector DX and managed AI ops."]],
    chart: [["Y1", "30-80M", "18%"], ["Y2", "150-300M", "34%"], ["Y3", "500M-1B", "58%"], ["Y5", "1B-3B+", "82%"]],
    peerFilters: [["all", "All"], ["chain", "On-chain"], ["audit", "Audit"], ["ai", "AI / Data"], ["staffing", "Staffing"]],
    lesson: "Lesson",
    peers: [["chain", "Chainalysis", "Global benchmark for blockchain investigation and compliance intelligence.", "Enterprise trust requires case workflow, labels, reports and regulator-friendly language."], ["chain", "TRM Labs", "Risk intelligence platform used by financial institutions, crypto companies and public agencies.", "Position crypto intelligence as financial-crime infrastructure, not Web3 speculation."], ["chain", "Elliptic", "Blockchain analytics and wallet risk scoring with compliance-oriented API products.", "Trust Score API can become a partner distribution channel if packaged simply."], ["audit", "CertiK", "Smart-contract audit, security ratings and Web3 project monitoring.", "BCA Japan should sell audit plus monitoring, not a one-time PDF only."], ["audit", "OpenZeppelin", "Security tooling, contract libraries and audit credibility for blockchain teams.", "Developer trust comes from standards, repeatable methodology and clear remediation."], ["ai", "Palantir", "Enterprise data operations, intelligence workflows and decision dashboards.", "The board-level story is operational intelligence and decision support."], ["ai", "PKSHA Technology", "Japan AI solutions across algorithms, automation and enterprise AI deployment.", "Localization and Japan enterprise sales motion matter as much as model capability."], ["ai", "Abeja", "Japan AI implementation, data platform and digital transformation support.", "AI transformation must be tied to practical client operations and measurable KPIs."], ["staffing", "Recruit / Persol", "Large-scale staffing and HR platforms with deep Japanese employer relationships.", "Tokenity Japan should avoid commodity staffing and sell AI-enabled specialist operations."]],
    risks: [["Corporate authority", "Obtain Tokenity Japan official registry certificate before major contracts."], ["Crypto regulation", "Avoid exchange, custody, brokerage, token-sale or investment-advice activity unless licensed."], ["AI staffing law", "Japanese labor dispatch and outsourcing structure must be reviewed by a labor specialist."], ["False positives", "Wallet labels and risk scores need confidence levels, human review and appeal workflows."], ["Data privacy", "Client, wallet, inquiry and public-opinion datasets require retention, access and audit policies."]],
    actions: ["Confirm Tokenity technology rights and Japan sales authority.", "Obtain official Japanese registry certificate and verify representative, capital and business purposes.", "Publish a password-protected shareholder version of this page.", "Prepare Japanese one-pagers for Tokenity Monitor, Trust Score API, BCA Japan and AI Staffing Studio.", "Create 100-target account list across finance, law, Web3, logistics, tourism and AI DX.", "Launch first 50 outbound emails and schedule 5-10 executive briefings.", "Build a paid discovery proposal and three PoC packages with fixed scope.", "Retain Japanese legal, tax and labor-dispatch reviewers before signing customers."],
  },
  ja: {
    metaTitle: "Tokenity Japan 株主向け Wave ルーム",
    brandSub: "株主向け Wave ルーム",
    navThesis: "投資論点",
    navProducts: "製品",
    navRoadmap: "ロードマップ",
    navMarket: "市場",
    navPeers: "競合分析",
    navNext: "次の一手",
    heroImageAlt: "日本の金融都市上に広がるフィンテック信頼基盤ネットワークの抽象ビジュアル",
    heroEyebrow: "機密株主ブリーフィング | V1 | 2026-06-16",
    heroTitle: "日本向け AI + Web3 信頼テクノロジー基盤",
    heroCopy:
      "Tokenity Japan は、AI agents、外部専門家、Tokenity 技術スタックを組み合わせた高レバレッジな一人会社モデルで始動する。対象は Tokenity Monitor、Tokenity Verify、BCA、AI リスクインテリジェンス、信頼証跡検証、AI 人材派遣である。",
    heroPrimary: "90 日ローンチ計画",
    heroSecondary: "競合分析を見る",
    noticeTitle: "開示注記",
    noticeText:
      "本ページは事業計画および株主コミュニケーション用の草案であり、法律、労働者派遣、証券、暗号資産、税務、投資助言ではない。実行前に日本の弁護士、税理士、社労士、セキュリティ顧問による確認が必要である。",
    thesisEyebrow: "投資論点",
    thesisTitle: "AI チャットボット会社ではなく、信頼レイヤー企業である。",
    thesisText:
      "主軸は不正対策、コンプライアンス、オンチェーン分析、スマートコントラクト監査、信頼証跡、AI 業務運用である。AI カスタマーサポートは有効だが、中心となるエクイティストーリーではない。",
    evidenceEyebrow: "公開根拠",
    evidenceTitle: "Tokenity 法人と製品計画",
    productsEyebrow: "製品体系",
    productsTitle: "計画中の全事業ライン",
    productsText: "初年度は重いプラットフォーム開発より先に、パッケージ化した PoC と月額インテリジェンスサービスを販売する。",
    agentsEyebrow: "一人会社",
    agentsTitle: "AI agents が部門を置き換える。",
    agentsText:
      "CEO が意思決定者として残り、agents が反復可能な調査、文書作成、分析、QA、フォローアップ、計画業務を担う。規制・高リスク領域は人間の専門家がレビューする。",
    roadmapEyebrow: "実行ロードマップ",
    roadmapTitle: "開発進捗と予算",
    marketEyebrow: "日本市場価値",
    marketTitle: "商業価値の推計",
    marketText:
      "機会領域は、日本の AI、サイバーセキュリティ、DX、ブロックチェーン、暗号資産コンプライアンス、RegTech、IT 人材市場の交差部分である。本モデルは全 TAM を単純加算せず、サービス可能市場レンジを採用する。",
    peersEyebrow: "他社分析",
    peersTitle: "競合マップと戦略的余白",
    peersText:
      "Tokenity Japan は単一の競合を模倣すべきではない。日本市場でオンチェーン信頼、AI リスクインテリジェンス、スマートコントラクト監査、信頼証跡、AI 人材を組み合わせる点に戦略的余白がある。",
    riskEyebrow: "リスク管理",
    riskTitle: "実行ガードレール",
    actionsEyebrow: "即時アクション",
    actionsTitle: "初月オペレーションスプリント",
    footerLeft: "Tokenity Japan Shareholder Wave Room | 内部計画草案",
    footerRight: "情報源には、日本市場の公開資料、OSAKA フィンテックイベント事例、Tokenity 計画資料、計画書内の市場調査基準が含まれる。",
    metrics: [["初年度売上目標", "JPY 30M-80M"], ["リーン予算", "JPY 12M-25M"], ["中核 SAM", "JPY 100B-300B"], ["運営モデル", "1 CEO + 12 Agents"]],
    thesisCards: [["01", "信頼テクノロジー SaaS", "Tokenity Monitor Japan、Tokenity Verify、Trust Score API、AI リスクダッシュボード、信頼証跡検証を金融、法律、コンプライアンス、物流、公共 DX 向けに提供する。"], ["02", "AI Agent 運営", "一人 CEO モデルを、調査、営業、製品、財務、コンプライアンス、コンテンツ、CS、分析レポート用 agents が支える。"], ["03", "AI 人材スタジオ", "AI operators、業務設計者、データアナリスト、Web3 リスクアナリストを顧客業務に組み込み、技術対応型サービスとして提供する。"]],
    evidence: [["法人ステータス", "Tokenity Japan", "Tokenity は本計画で使用するブランド名であり、日本の法人番号、所在地、事業目的は正式な設立または登記書類で確認する必要がある。"], ["製品計画", "Tokenity Monitor", "ブロックチェーン技術を活用した暗号資産犯罪可視化、ウォレットリスク分析、オンチェーン資金流追跡ツールとして計画する。"], ["確認事項", "登記と権利", "代表者、資本金、事業目的、製品権利、日本販売権限は契約または外部資金調達の前に確認する。"]],
    productHeaders: ["事業ライン", "日本向け提供内容", "対象顧客", "収益モデル"],
    products: [["Tokenity Monitor Japan", "暗号資産犯罪の可視化、ウォレットグラフ、資金流追跡レポート", "金融機関、取引所、法律事務所、コンプライアンス顧問", "JPY 3M-8M PoC、SaaS シート、企業ライセンス"], ["Tokenity Verify / Trust Score API", "ウォレット、プロジェクト、加盟店、資産の信頼スコアと AI 説明", "プラットフォーム、Web3 プロジェクト、フィンテック、企業リスク部門", "API call、バッチ照会、ホワイトラベル"], ["BCA Japan", "スマートコントラクト監査デスク、日本語レポート、修正提案、認証", "Web3、NFT、RWA、ロイヤルティ、tokenization プロジェクト", "1 件 JPY 1.5M-5M、retainer、再監査"], ["AI Risk Intelligence", "世論監視、詐欺ナラティブ検知、顧客問い合わせ分析", "ブランド、観光、金融、政府、リテール、宿泊", "JPY 500K-2M 月額"], ["Trust Evidence Platform", "文書、画像、物流イベントの hash、QR 検証、監査証跡", "高額商品、物流、製造、保険、金融", "JPY 3M-10M PoC、検証件数課金、企業プラン"], ["AI Staffing Studio", "AI operators、業務設計者、リスクアナリスト、日中バイリンガル PM", "中小企業、越境商取引、リテール、宿泊、企業 DX", "JPY 600K-1.5M / 人月"]],
    agents: [["戦略", "CEO Strategy、Finance、Market Research"], ["構築", "Product Manager、UI/UX、Engineering、Analyst"], ["営業", "Sales、Content、Grant/Government、Customer Success"], ["統制", "Legal/Compliance、リスクメモ、契約草案、エスカレーションチェックリスト"]],
    timeline: [["0-90 日", "販売可能 MVP", "日本語 one-pager、landing page、demo dashboard、レポート生成、100 社ターゲットリスト、初回 PoC 提案。", "予算: JPY 3M-8M"], ["3-6 か月", "PoC 提供", "Tokenity Monitor、Trust Score、AI Risk Intelligence、AI Staffing Studio で合計 3-5 件の試験導入。", "累計予算: JPY 8M-18M"], ["6-12 か月", "商用ローンチ", "PoC を MRR へ転換し、BCA Japan を商品化、AI 人材を拡張し事例を公開する。", "年間予算レンジ: JPY 12M-60M"], ["12-24 か月", "拡張", "10-20 社の企業顧客、reseller network、Trust Score API beta、進化した信頼証跡フロー。", "目標: JPY 150M-300M revenue"]],
    budgets: [["リーンローンチ", "JPY 12M-25M / 12 か月", "AI agents と外部委託で市場検証する場合に最適。"], ["攻めのプラン", "JPY 30M-60M / 12 か月", "製品 MVP、営業、AI 人材、イベントを並行推進する場合に最適。"], ["拡張プラン", "JPY 80M-150M / 12 か月", "戦略資金、LOI、または契約済み企業 PoC がある場合に適する。"]],
    markets: [["Narrow SAM", "JPY 30B-80B", "暗号資産犯罪可視化、Web3 compliance、BCA audit、オンチェーン調査レポート。"], ["Core SAM", "JPY 100B-300B", "AI 不正対策インテリジェンス、世論リスク、コンプライアンスレポート、Trust Evidence、AI 人材。"], ["Expanded SAM", "JPY 500B-1T+", "企業 AI DX、セキュリティ自動化、サプライチェーン証跡、公共 DX、managed AI ops。"]],
    chart: [["Y1", "30-80M", "18%"], ["Y2", "150-300M", "34%"], ["Y3", "500M-1B", "58%"], ["Y5", "1B-3B+", "82%"]],
    peerFilters: [["all", "すべて"], ["chain", "オンチェーン"], ["audit", "監査"], ["ai", "AI / Data"], ["staffing", "人材"]],
    lesson: "示唆",
    peers: [["chain", "Chainalysis", "ブロックチェーン調査とコンプライアンスインテリジェンスの世界的ベンチマーク。", "企業信頼には案件ワークフロー、ラベル、レポート、規制当局に通じる言語が必要。"], ["chain", "TRM Labs", "金融機関、crypto 企業、公共機関向けのリスクインテリジェンスプラットフォーム。", "crypto intelligence は投機的 Web3 ではなく金融犯罪対策基盤として位置づける。"], ["chain", "Elliptic", "ブロックチェーン分析とウォレットリスクスコアを API として提供。", "Trust Score API は簡潔に包装すればパートナー流通チャネルになる。"], ["audit", "CertiK", "スマートコントラクト監査、セキュリティ評価、Web3 監視。", "BCA Japan は一回限りの PDF ではなく audit + monitoring として販売すべき。"], ["audit", "OpenZeppelin", "ブロックチェーンチーム向けのセキュリティツール、契約ライブラリ、監査ブランド。", "開発者の信頼は標準、再現可能な方法論、明確な修正提案から生まれる。"], ["ai", "Palantir", "企業データ運用、インテリジェンスワークフロー、意思決定ダッシュボード。", "取締役会向けの物語は業務インテリジェンスと意思決定支援である。"], ["ai", "PKSHA Technology", "日本の AI ソリューション、アルゴリズム、自動化、企業 AI 導入。", "ローカライズと日本企業向け営業モーションはモデル性能と同じくらい重要。"], ["ai", "Abeja", "日本の AI 導入、データプラットフォーム、DX 支援。", "AI transformation は実務運用と測定可能 KPI に結びつける必要がある。"], ["staffing", "Recruit / Persol", "日本の雇用主基盤を持つ大規模人材・HR プラットフォーム。", "Tokenity Japan は汎用派遣を避け、AI-enabled specialist operations を売るべき。"]],
    risks: [["法人権限", "大型契約前に Tokenity Japan の公式登記簿を取得する。"], ["暗号資産規制", "許認可なしに交換、保管、仲介、token sale、投資助言に見える行為を避ける。"], ["AI 人材派遣法", "労働者派遣と業務委託の構造は社労士/弁護士が確認する。"], ["誤判定", "ウォレットラベルとリスクスコアには信頼度、人手レビュー、異議申立て導線が必要。"], ["データプライバシー", "顧客、ウォレット、問い合わせ、世論データには保存、権限、監査ポリシーが必要。"]],
    actions: ["Tokenity 技術ライセンスと日本販売権限を確認する。", "日本の公式登記簿を取得し、代表者、資本金、事業目的を確認する。", "パスワード保護された株主版ページを公開する。", "Tokenity Monitor、Trust Score API、BCA Japan、AI Staffing Studio の日本語 one-pager を準備する。", "金融、法律、Web3、物流、観光、AI DX の 100 社ターゲットリストを作成する。", "初回 50 通の outbound email を送り、5-10 件の executive briefing を設定する。", "paid discovery proposal と 3 種類の固定範囲 PoC package を作成する。", "顧客契約前に日本の法務、税務、労働者派遣レビューを確保する。"],
  },
};

function getLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") || localStorage.getItem("tokenityLang") || "zh-Hant";
  return languages.includes(requested) ? requested : "zh-Hant";
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.replaceChildren();
  items.forEach(([index, title, text]) => {
    const article = createElement("article", "card");
    article.append(createElement("span", "card-index", index), createElement("h3", "", title), createElement("p", "", text));
    container.append(article);
  });
}

function renderRows(containerId, items, rowClass) {
  const container = document.getElementById(containerId);
  container.replaceChildren();
  items.forEach(([title, text]) => {
    const row = createElement("div", rowClass);
    row.append(createElement("strong", "", title), createElement("span", "", text));
    container.append(row);
  });
}

function renderPage(lang) {
  const t = i18n[lang];
  document.documentElement.lang = lang;
  document.title = t.metaTitle;
  localStorage.setItem("tokenityLang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t[key] || "";
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((item) => item.trim());
      if (attr && key && t[key]) element.setAttribute(attr, t[key]);
    });
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  const metrics = document.getElementById("metrics");
  metrics.replaceChildren();
  t.metrics.forEach(([label, value]) => {
    const item = createElement("div");
    item.append(createElement("dt", "", label), createElement("dd", "", value));
    metrics.append(item);
  });

  renderCards("thesisCards", t.thesisCards);

  const evidence = document.getElementById("evidenceGrid");
  evidence.replaceChildren();
  t.evidence.forEach(([label, value, text]) => {
    const item = createElement("div", "evidence-item");
    item.append(createElement("span", "", label), createElement("strong", "", value), createElement("p", "", text));
    evidence.append(item);
  });

  const productHead = document.getElementById("productHead");
  const productBody = document.getElementById("productBody");
  productHead.replaceChildren();
  productBody.replaceChildren();
  const headRow = createElement("tr");
  t.productHeaders.forEach((header) => headRow.append(createElement("th", "", header)));
  productHead.append(headRow);
  t.products.forEach((row) => {
    const tr = createElement("tr");
    row.forEach((cell) => tr.append(createElement("td", "", cell)));
    productBody.append(tr);
  });

  renderRows("agentList", t.agents, "agent-row");

  const timeline = document.getElementById("timeline");
  timeline.replaceChildren();
  t.timeline.forEach(([period, title, text, budget]) => {
    const article = createElement("article", "timeline-item");
    article.append(createElement("span", "", period), createElement("h3", "", title), createElement("p", "", text), createElement("strong", "", budget));
    timeline.append(article);
  });

  const budgetGrid = document.getElementById("budgetGrid");
  budgetGrid.replaceChildren();
  t.budgets.forEach(([title, value, text]) => {
    const article = createElement("article", "budget-panel");
    article.append(createElement("h3", "", title), createElement("p", "", value), createElement("span", "", text));
    budgetGrid.append(article);
  });

  const marketGrid = document.getElementById("marketGrid");
  marketGrid.replaceChildren();
  t.markets.forEach(([label, value, text]) => {
    const article = createElement("article");
    article.append(createElement("span", "", label), createElement("strong", "", value), createElement("p", "", text));
    marketGrid.append(article);
  });

  const chart = document.getElementById("revenueChart");
  chart.replaceChildren();
  chart.setAttribute("aria-label", lang === "en" ? "Revenue scenario chart from year one to year five" : "第一年至第五年的營收情境圖");
  t.chart.forEach(([year, value, height]) => {
    const bar = createElement("div");
    bar.style.setProperty("--h", height);
    bar.append(createElement("span", "", year), createElement("strong", "", value));
    chart.append(bar);
  });

  const peerControls = document.getElementById("peerControls");
  const peerGrid = document.getElementById("peerGrid");
  peerControls.replaceChildren();
  peerGrid.replaceChildren();
  t.peerFilters.forEach(([filter, label], index) => {
    const button = createElement("button", `peer-filter ${index === 0 ? "active" : ""}`, label);
    button.type = "button";
    button.dataset.filter = filter;
    button.addEventListener("click", () => filterPeers(filter));
    peerControls.append(button);
  });
  t.peers.forEach(([category, company, description, lesson]) => {
    const article = createElement("article", "peer-card");
    article.dataset.category = category;
    article.append(createElement("h3", "", company), createElement("p", "", description), createElement("strong", "", t.lesson), createElement("span", "", lesson));
    peerGrid.append(article);
  });

  renderRows("riskList", t.risks, "");

  const actionList = document.getElementById("actionList");
  actionList.replaceChildren();
  t.actions.forEach((action) => actionList.append(createElement("li", "", action)));
}

function filterPeers(filter) {
  document.querySelectorAll(".peer-filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  document.querySelectorAll(".peer-card").forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("hidden", !shouldShow);
  });
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    renderPage(lang);
  });
});

renderPage(getLanguage());
