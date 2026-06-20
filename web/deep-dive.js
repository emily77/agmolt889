const deepLanguages = ["zh-Hant", "zh-Hans", "en", "ja"];

const deepCopy = {
  "zh-Hant": {
    navDeep: "深度",
    eyebrow: "深度營運藍圖",
    title: "從 STO/RWA 策略到可交付產品。",
    text:
      "本區把 Tokenity 的商業模式拆成可銷售、可審查、可交付、可擴張的營運系統，讓股東能看見公司如何從一人公司變成機構級信任科技平台。",
    map: [
      ["01", "市場切入點", "先從 STO/RWA readiness、鏈上調查報告、AI risk intelligence 三種高意願預算切入，再逐步擴成平台。"],
      ["02", "合規邊界", "不碰代客募資、投資建議、交易撮合或託管。Tokenity 提供技術、資料、監控與流程，不替客戶扮演持牌金融機構。"],
      ["03", "AI Agent OS", "用 agents 承接研究、報告、KYC 例外清單、銷售跟進與客戶成功，人類專家審核高風險輸出。"],
      ["04", "收入飛輪", "Discovery 產生 PoC，PoC 轉月費，月費推 API 與監控，監控再帶出審查、證據與人力派遣。"],
    ],
    stackTitle: "STO/RWA 交付堆疊",
    stack: [
      ["Asset Intake", "確認資產類型、現金流、權利文件、估值基準與可揭露資料。"],
      ["Legal Wrapper", "由日本律師/外部合規方確認是否涉及證券、集體投資計畫、金商法或跨境銷售限制。"],
      ["Investor Gate", "KYC/KYB、AML screening、適格投資人分類、資料室權限與申購流程。"],
      ["Token Lifecycle", "發行紀錄、白名單、轉讓限制、分紅/報告事件、二級流通限制與稽核軌跡。"],
      ["Monitoring", "錢包風險、異常轉移、輿情、詐騙敘事、合約變更與月度風險報告。"],
    ],
    kpiTitle: "12 個月 KPI",
    kpis: [
      ["100", "目標帳戶", "金融、法律、Web3、物流、觀光、製造。"],
      ["10", "高階簡報", "每月 CEO/董事會級 briefing。"],
      ["3-5", "付費 PoC", "Monitor、RWA readiness、AI risk。"],
      ["US$50K+", "單案門檻", "Launch Pack 作為主力成交包。"],
      ["US$12K+", "月費長約", "企業監控與 AI agent ops。"],
      ["2", "策略夥伴", "法務/稅務/資安或 KYC/AML 供應商。"],
    ],
  },
  "zh-Hans": {
    navDeep: "深度",
    eyebrow: "深度运营蓝图",
    title: "从 STO/RWA 战略到可交付产品。",
    text:
      "本区把 Tokenity 的商业模式拆成可销售、可审查、可交付、可扩张的运营系统，让股东看见公司如何从一人公司变成机构级信任科技平台。",
    map: [
      ["01", "市场切入口", "先从 STO/RWA readiness、链上调查报告、AI risk intelligence 三种高意愿预算切入，再逐步扩成平台。"],
      ["02", "合规边界", "不做代客募资、投资建议、交易撮合或托管。Tokenity 提供技术、数据、监控与流程，不替客户扮演持牌金融机构。"],
      ["03", "AI Agent OS", "用 agents 承接研究、报告、KYC 例外清单、销售跟进与客户成功，人类专家审核高风险输出。"],
      ["04", "收入飞轮", "Discovery 产生 PoC，PoC 转月费，月费推 API 与监控，监控再带出审查、证据与人力派遣。"],
    ],
    stackTitle: "STO/RWA 交付堆叠",
    stack: [
      ["Asset Intake", "确认资产类型、现金流、权利文件、估值基准与可披露资料。"],
      ["Legal Wrapper", "由日本律师/外部合规方确认是否涉及证券、集合投资计划、金商法或跨境销售限制。"],
      ["Investor Gate", "KYC/KYB、AML screening、适格投资人分类、资料室权限与申购流程。"],
      ["Token Lifecycle", "发行记录、白名单、转让限制、分红/报告事件、二级流通限制与稽核轨迹。"],
      ["Monitoring", "钱包风险、异常转移、舆情、诈骗叙事、合约变更与月度风险报告。"],
    ],
    kpiTitle: "12 个月 KPI",
    kpis: [
      ["100", "目标账户", "金融、法律、Web3、物流、观光、制造。"],
      ["10", "高阶简报", "每月 CEO/董事会级 briefing。"],
      ["3-5", "付费 PoC", "Monitor、RWA readiness、AI risk。"],
      ["US$50K+", "单案门槛", "Launch Pack 作为主力成交包。"],
      ["US$12K+", "月费长约", "企业监控与 AI agent ops。"],
      ["2", "策略伙伴", "法务/税务/资安或 KYC/AML 供应商。"],
    ],
  },
  en: {
    navDeep: "Deep Dive",
    eyebrow: "Operating blueprint",
    title: "From STO/RWA strategy to deliverable products.",
    text:
      "This layer decomposes Tokenity into a sellable, reviewable, deliverable and scalable operating system, showing shareholders how a one-person company can evolve into institutional trust infrastructure.",
    map: [
      ["01", "Market wedge", "Start with STO/RWA readiness, on-chain investigation reports and AI risk intelligence, then expand into a platform."],
      ["02", "Compliance boundary", "Avoid fundraising, investment advice, matching, custody and brokerage. Tokenity provides technology, data, monitoring and workflows, not licensed financial intermediation."],
      ["03", "AI Agent OS", "Agents handle research, reports, KYC exception lists, sales follow-up and customer success while expert humans review high-risk outputs."],
      ["04", "Revenue loop", "Discovery creates PoCs, PoCs convert into retainers, retainers drive API and monitoring, and monitoring expands into audits, evidence and staffing."],
    ],
    stackTitle: "STO/RWA delivery stack",
    stack: [
      ["Asset Intake", "Confirm asset type, cash flow, rights documents, valuation basis and disclosure-ready materials."],
      ["Legal Wrapper", "Japanese counsel or external compliance partners review securities, fund, FIEA and cross-border distribution constraints."],
      ["Investor Gate", "KYC/KYB, AML screening, qualified investor classification, data-room permissions and subscription workflow."],
      ["Token Lifecycle", "Issuance records, whitelist, transfer restrictions, distribution/reporting events, secondary constraints and audit trail."],
      ["Monitoring", "Wallet risk, abnormal transfer, public narratives, fraud signals, contract changes and monthly risk reports."],
    ],
    kpiTitle: "12-month KPIs",
    kpis: [
      ["100", "Target accounts", "Finance, law, Web3, logistics, tourism and manufacturing."],
      ["10", "Executive briefings", "Monthly CEO or board-level briefings."],
      ["3-5", "Paid PoCs", "Monitor, RWA readiness and AI risk."],
      ["US$50K+", "Project floor", "Launch Pack as the core closing package."],
      ["US$12K+", "Monthly retainer", "Enterprise monitoring and AI agent ops."],
      ["2", "Strategic partners", "Legal, tax, security or KYC/AML providers."],
    ],
  },
  ja: {
    navDeep: "深掘り",
    eyebrow: "運営ブループリント",
    title: "STO/RWA 戦略から提供可能な製品へ。",
    text:
      "本セクションでは Tokenity を、販売可能、審査可能、提供可能、拡張可能な運営システムに分解し、一人会社が機関投資家レベルの信頼基盤へ進化する道筋を示す。",
    map: [
      ["01", "市場の入口", "STO/RWA readiness、オンチェーン調査レポート、AI risk intelligence から始め、段階的にプラットフォーム化する。"],
      ["02", "コンプライアンス境界", "資金調達代行、投資助言、取引マッチング、カストディは行わない。Tokenity は技術、データ、監視、業務フローを提供する。"],
      ["03", "AI Agent OS", "agents が調査、レポート、KYC 例外リスト、営業フォロー、CS を担い、高リスク出力は人間の専門家が確認する。"],
      ["04", "収益ループ", "Discovery が PoC を生み、PoC が月額契約へ、月額契約が API と監視へ、監視が監査、証跡、人材へ広がる。"],
    ],
    stackTitle: "STO/RWA 提供スタック",
    stack: [
      ["Asset Intake", "資産タイプ、キャッシュフロー、権利書類、評価基準、開示可能資料を確認する。"],
      ["Legal Wrapper", "日本の弁護士または外部コンプライアンス担当が、証券、ファンド、金商法、越境販売制限を確認する。"],
      ["Investor Gate", "KYC/KYB、AML screening、適格投資家分類、データルーム権限、申込ワークフロー。"],
      ["Token Lifecycle", "発行記録、ホワイトリスト、移転制限、分配/報告イベント、二次流通制限、監査証跡。"],
      ["Monitoring", "ウォレットリスク、異常移転、世論、詐欺シグナル、契約変更、月次リスクレポート。"],
    ],
    kpiTitle: "12 か月 KPI",
    kpis: [
      ["100", "ターゲットアカウント", "金融、法律、Web3、物流、観光、製造。"],
      ["10", "経営層 briefing", "毎月 CEO/取締役会レベルで実施。"],
      ["3-5", "有償 PoC", "Monitor、RWA readiness、AI risk。"],
      ["US$50K+", "案件下限", "Launch Pack を主力成約パッケージにする。"],
      ["US$12K+", "月額契約", "企業監視と AI agent ops。"],
      ["2", "戦略パートナー", "法務、税務、セキュリティ、KYC/AML 事業者。"],
    ],
  },
};

function deepElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function currentDeepLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") || localStorage.getItem("tokenityLang") || document.documentElement.lang || "zh-Hant";
  return deepLanguages.includes(requested) ? requested : "zh-Hant";
}

function renderDeepDive(lang = currentDeepLanguage()) {
  const copy = deepCopy[lang];
  document.querySelector('[data-i18n="navDeep"]').textContent = copy.navDeep;
  document.querySelector('[data-i18n="deepEyebrow"]').textContent = copy.eyebrow;
  document.querySelector('[data-i18n="deepTitle"]').textContent = copy.title;
  document.querySelector('[data-i18n="deepText"]').textContent = copy.text;
  document.querySelector('[data-i18n="deepStackTitle"]').textContent = copy.stackTitle;
  document.querySelector('[data-i18n="deepKpiTitle"]').textContent = copy.kpiTitle;

  const map = document.getElementById("deepMap");
  map.replaceChildren();
  copy.map.forEach(([index, title, text]) => {
    const card = deepElement("article", "deep-card");
    card.append(deepElement("span", "", index), deepElement("h3", "", title), deepElement("p", "", text));
    map.append(card);
  });

  const stack = document.getElementById("deepStack");
  stack.replaceChildren();
  copy.stack.forEach(([label, text]) => {
    const row = deepElement("div", "deep-row");
    row.append(deepElement("strong", "", label), deepElement("p", "", text));
    stack.append(row);
  });

  const kpis = document.getElementById("deepKpis");
  kpis.className = "kpi-board";
  kpis.replaceChildren();
  copy.kpis.forEach(([value, label, text]) => {
    const item = deepElement("article", "kpi-item");
    item.append(deepElement("span", "", label), deepElement("strong", "", value), deepElement("p", "", text));
    kpis.append(item);
  });
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => window.setTimeout(() => renderDeepDive(button.dataset.lang), 0));
});

renderDeepDive();
