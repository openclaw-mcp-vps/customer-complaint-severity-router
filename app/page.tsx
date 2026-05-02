export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Support Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route Support Tickets by{" "}
          <span className="text-[#58a6ff]">Complaint Severity</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          AI instantly classifies incoming tickets by urgency and sentiment — escalating high-severity complaints to senior staff before customers churn.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No setup fees. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { label: "Severity Classification", desc: "AI scores every ticket: low, medium, critical — in seconds." },
            { label: "Auto-Escalation", desc: "Critical tickets route instantly to senior staff via Slack or email." },
            { label: "Escalation Dashboard", desc: "Track patterns, response times, and resolution rates in one view." }
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold mb-2">{f.label}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited ticket analysis",
              "AI severity classification",
              "Auto-escalation to senior staff",
              "Slack & email integrations",
              "Escalation pattern dashboard",
              "Webhook & API access"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors text-center"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI classify ticket severity?",
              a: "Our model analyzes sentiment, urgency keywords, customer tier, and historical patterns to assign a severity score from 1–10, then buckets tickets into low, medium, or critical."
            },
            {
              q: "Which support platforms do you integrate with?",
              a: "We support Zendesk, Intercom, Freshdesk, and any platform that can send webhooks. You can also push tickets via our REST API."
            },
            {
              q: "Can I customize escalation rules?",
              a: "Yes. You define which severity thresholds trigger escalation, which team members receive alerts, and whether notifications go via Slack, email, or both."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Complaint Severity Router. All rights reserved.
      </footer>
    </main>
  );
}
