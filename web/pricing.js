const pricingLanguages = ["zh-Hant", "zh-Hans", "en", "ja"];

const pricingCopy = {
  "zh-Hant": {
    navPricing: "收費",
    pricingEyebrow: "美金收費模型",
    pricingTitle: "用海外股東看得懂的方式定價。",
    pricingText:
      "Tokenity 採 B2B enterprise、PoC、月費與用量費混合制。STO/RWA 與鏈上合規服務應以專案價與長約為主，不以低價 SaaS 競爭。",
    packages: [
      ["Discovery", "初次診斷與董事會提案", "US$5K", "2 週內完成 STO/RWA、鏈上風險、AI agent 導入路線圖。"],
      ["Launch Pack", "90 天可展示 PoC", "US$50K-95K", "建立可銷售 demo、資料室、報告模板、客戶簡報與合規工作流。"],
      ["Trust Infrastructure", "企業長約", "US$12K-31K / 月", "包含監控、API、月報、AI agent、顧問與營運支援。"],
    ],
    headers: ["營業項目", "收費方式", "建議價格"],
    rows: [
      ["STO/RWA 可行性診斷", "專案價", "US$3K-10K"],
      ["STO/RWA 專案建置", "專案價", "US$30K-155K"],
      ["Tokenity Monitor 調查報告", "案件價", "US$2K-12.5K"],
      ["Tokenity Monitor 企業版", "月費", "US$5K-31K / month"],
      ["Trust Score API", "月費 + 用量", "US$2K-9K / month + usage"],
      ["KYC/KYB Orchestration", "建置費 + 月費", "US$3K-19K setup + US$600-5K / month"],
      ["BCA 智能合約審查", "審查案", "US$9K-50K / audit"],
      ["BCA 監控型方案", "月費", "US$3K-12.5K / month"],
      ["Trust Evidence Platform", "PoC + 月費", "US$19K-62K PoC + US$3K-19K / month"],
      ["AI Risk Intelligence", "月費", "US$3K-12.5K / month"],
      ["AI Agent 業務自動化", "建置費 + 月費", "US$6K-31K setup + US$2K-9K / month"],
      ["AI 人力派遣 / AI Operator", "人月", "US$5K-11K / person-month"],
      ["高階顧問 Retainer", "月費", "US$2K-9K / month"],
    ],
    note: "定價以 US$1 約 JPY 160 做初步換算。正式報價須依客戶範圍、法規風險、資料量、API 用量與第三方 KYC/AML 成本調整。",
  },
  "zh-Hans": {
    navPricing: "收费",
    pricingEyebrow: "美元收费模型",
    pricingTitle: "用海外股东看得懂的方式定价。",
    pricingText:
      "Tokenity 采用 B2B enterprise、PoC、月费与用量费混合制。STO/RWA 与链上合规服务应以项目价与长约为主，不以低价 SaaS 竞争。",
    packages: [
      ["Discovery", "初次诊断与董事会提案", "US$5K", "2 周内完成 STO/RWA、链上风险、AI agent 导入路线图。"],
      ["Launch Pack", "90 天可展示 PoC", "US$50K-95K", "建立可销售 demo、资料室、报告模板、客户简报与合规工作流。"],
      ["Trust Infrastructure", "企业长约", "US$12K-31K / 月", "包含监控、API、月报、AI agent、顾问与运营支持。"],
    ],
    headers: ["营业项目", "收费方式", "建议价格"],
    rows: [
      ["STO/RWA 可行性诊断", "项目价", "US$3K-10K"],
      ["STO/RWA 项目建置", "项目价", "US$30K-155K"],
      ["Tokenity Monitor 调查报告", "案件价", "US$2K-12.5K"],
      ["Tokenity Monitor 企业版", "月费", "US$5K-31K / month"],
      ["Trust Score API", "月费 + 用量", "US$2K-9K / month + usage"],
      ["KYC/KYB Orchestration", "建置费 + 月费", "US$3K-19K setup + US$600-5K / month"],
      ["BCA 智能合约审查", "审查案", "US$9K-50K / audit"],
      ["BCA 监控型方案", "月费", "US$3K-12.5K / month"],
      ["Trust Evidence Platform", "PoC + 月费", "US$19K-62K PoC + US$3K-19K / month"],
      ["AI Risk Intelligence", "月费", "US$3K-12.5K / month"],
      ["AI Agent 业务自动化", "建置费 + 月费", "US$6K-31K setup + US$2K-9K / month"],
      ["AI 人力派遣 / AI Operator", "人月", "US$5K-11K / person-month"],
      ["高阶顾问 Retainer", "月费", "US$2K-9K / month"],
    ],
    note: "定价以 US$1 约 JPY 160 做初步换算。正式报价须依客户范围、法规风险、资料量、API 用量与第三方 KYC/AML 成本调整。",
  },
  en: {
    navPricing: "Pricing",
    pricingEyebrow: "USD pricing model",
    pricingTitle: "Pricing shareholders can understand at a glance.",
    pricingText:
      "Tokenity uses a B2B enterprise model combining project fees, PoCs, subscriptions and usage. STO/RWA and on-chain compliance should be priced as strategic projects and retainers, not low-cost SaaS.",
    packages: [
      ["Discovery", "Initial diagnosis and board proposal", "US$5K", "Two-week STO/RWA, on-chain risk and AI-agent adoption roadmap."],
      ["Launch Pack", "90-day demonstrable PoC", "US$50K-95K", "Sellable demo, data room, report templates, client briefing and compliance workflow."],
      ["Trust Infrastructure", "Enterprise retainer", "US$12K-31K / month", "Monitoring, API, monthly reports, AI agents, advisory and operating support."],
    ],
    headers: ["Business item", "Billing model", "Recommended price"],
    rows: [
      ["STO/RWA feasibility diagnosis", "Project fee", "US$3K-10K"],
      ["STO/RWA project build", "Project fee", "US$30K-155K"],
      ["Tokenity Monitor investigation report", "Case fee", "US$2K-12.5K"],
      ["Tokenity Monitor enterprise", "Subscription", "US$5K-31K / month"],
      ["Trust Score API", "Subscription + usage", "US$2K-9K / month + usage"],
      ["KYC/KYB Orchestration", "Setup + subscription", "US$3K-19K setup + US$600-5K / month"],
      ["BCA smart-contract audit", "Audit fee", "US$9K-50K / audit"],
      ["BCA monitoring plan", "Subscription", "US$3K-12.5K / month"],
      ["Trust Evidence Platform", "PoC + subscription", "US$19K-62K PoC + US$3K-19K / month"],
      ["AI Risk Intelligence", "Subscription", "US$3K-12.5K / month"],
      ["AI Agent automation", "Setup + subscription", "US$6K-31K setup + US$2K-9K / month"],
      ["AI staffing / AI Operator", "Person-month", "US$5K-11K / person-month"],
      ["Executive advisory retainer", "Subscription", "US$2K-9K / month"],
    ],
    note: "Ranges use a planning exchange rate of US$1 = JPY 160. Final quotes should adjust for client scope, regulatory risk, data volume, API usage and third-party KYC/AML costs.",
  },
  ja: {
    navPricing: "料金",
    pricingEyebrow: "米ドル料金モデル",
    pricingTitle: "海外株主が一目で理解できる料金体系。",
    pricingText:
      "Tokenity は B2B enterprise、PoC、月額、従量課金を組み合わせる。STO/RWA とオンチェーンコンプライアンスは低価格 SaaS ではなく、戦略プロジェクトと長期契約として設計する。",
    packages: [
      ["Discovery", "初期診断と取締役会向け提案", "US$5K", "2 週間で STO/RWA、オンチェーンリスク、AI agent 導入ロードマップを作成。"],
      ["Launch Pack", "90 日で提示可能な PoC", "US$50K-95K", "販売可能な demo、データルーム、報告テンプレート、顧客説明資料、コンプライアンスフローを構築。"],
      ["Trust Infrastructure", "企業向け長期契約", "US$12K-31K / 月", "監視、API、月次レポート、AI agents、アドバイザリー、運用支援を含む。"],
    ],
    headers: ["営業項目", "課金方式", "推奨価格"],
    rows: [
      ["STO/RWA 実現可能性診断", "プロジェクト", "US$3K-10K"],
      ["STO/RWA プロジェクト構築", "プロジェクト", "US$30K-155K"],
      ["Tokenity Monitor 調査報告", "案件単位", "US$2K-12.5K"],
      ["Tokenity Monitor 企業版", "月額", "US$5K-31K / month"],
      ["Trust Score API", "月額 + 従量", "US$2K-9K / month + usage"],
      ["KYC/KYB Orchestration", "初期費 + 月額", "US$3K-19K setup + US$600-5K / month"],
      ["BCA スマートコントラクト監査", "監査単位", "US$9K-50K / audit"],
      ["BCA 監視プラン", "月額", "US$3K-12.5K / month"],
      ["Trust Evidence Platform", "PoC + 月額", "US$19K-62K PoC + US$3K-19K / month"],
      ["AI Risk Intelligence", "月額", "US$3K-12.5K / month"],
      ["AI Agent 業務自動化", "初期費 + 月額", "US$6K-31K setup + US$2K-9K / month"],
      ["AI 人材派遣 / AI Operator", "人月", "US$5K-11K / person-month"],
      ["エグゼクティブ顧問 Retainer", "月額", "US$2K-9K / month"],
    ],
    note: "US$1 = JPY 160 の計画レートで概算。正式見積は顧客範囲、規制リスク、データ量、API 使用量、第三者 KYC/AML コストに応じて調整する。",
  },
};

function pricingElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function currentPricingLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") || localStorage.getItem("tokenityLang") || document.documentElement.lang || "zh-Hant";
  return pricingLanguages.includes(requested) ? requested : "zh-Hant";
}

function renderPricing(lang = currentPricingLanguage()) {
  const copy = pricingCopy[lang];
  document.querySelector('[data-i18n="navPricing"]').textContent = copy.navPricing;
  document.querySelector('[data-i18n="pricingEyebrow"]').textContent = copy.pricingEyebrow;
  document.querySelector('[data-i18n="pricingTitle"]').textContent = copy.pricingTitle;
  document.querySelector('[data-i18n="pricingText"]').textContent = copy.pricingText;

  const packages = document.getElementById("pricingPackages");
  packages.replaceChildren();
  copy.packages.forEach(([name, label, price, text]) => {
    const card = pricingElement("article", "pricing-card");
    card.append(pricingElement("span", "", label), pricingElement("h3", "", name), pricingElement("strong", "", price), pricingElement("p", "", text));
    packages.append(card);
  });

  const head = document.getElementById("pricingHead");
  const body = document.getElementById("pricingBody");
  head.replaceChildren();
  body.replaceChildren();
  const headRow = pricingElement("tr");
  copy.headers.forEach((header) => headRow.append(pricingElement("th", "", header)));
  head.append(headRow);
  copy.rows.forEach((row) => {
    const tableRow = pricingElement("tr");
    row.forEach((cell, index) => tableRow.append(pricingElement(index === 2 ? "th" : "td", "", cell)));
    body.append(tableRow);
  });

  document.getElementById("pricingNote").textContent = copy.note;
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => window.setTimeout(() => renderPricing(button.dataset.lang), 0));
});

renderPricing();
