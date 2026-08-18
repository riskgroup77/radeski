import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, HandCoins, Landmark, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Locale } from '../types';
import type { DaavlinModelId } from '../routing/paths';
import { daavlinSectionPath } from '../routing/paths';
import {
  DAAVLIN_FINANCE_UI,
  USD_UZS_REFERENCE,
  calcLeaseMonthly,
  formatUsd,
  formatUzs,
  getModelFinance,
} from '../data/daavlinEquipmentFinanceCatalog';

interface DaavlinFinanceCalculatorProps {
  locale: Locale;
  modelId: DaavlinModelId;
}

type Tab = 'rent' | 'lease';

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 ${
        highlight
          ? 'border-brand-gold/40 bg-gradient-to-br from-brand-gold-light/20 to-brand-white shadow-sm'
          : 'border-brand-sectiongray bg-brand-offwhite/80'
      }`}
    >
      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">{label}</p>
      <p
        className={`mt-1 text-lg font-extrabold tracking-tight sm:text-xl ${
          highlight ? 'text-brand-gold-dark' : 'text-brand-text-primary'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default function DaavlinFinanceCalculator({ locale, modelId }: DaavlinFinanceCalculatorProps) {
  const config = getModelFinance(modelId);
  const ui = DAAVLIN_FINANCE_UI[locale];

  const [tab, setTab] = useState<Tab>('rent');
  const [variantIndex, setVariantIndex] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(USD_UZS_REFERENCE);
  const [rentMonths, setRentMonths] = useState(12);
  const [leaseDownPct, setLeaseDownPct] = useState(20);
  const [leaseTermMonths, setLeaseTermMonths] = useState(36);
  const [leaseRatePct, setLeaseRatePct] = useState(20);

  useEffect(() => {
    if (!config) return;
    setVariantIndex(0);
    setLeaseDownPct(config.leaseMinDownPct);
    setLeaseTermMonths(config.leaseTermsMonths[1] ?? config.leaseTermsMonths[0] ?? 36);
    setLeaseRatePct(Math.round(config.leaseAnnualRate * 1000) / 10);
    setRentMonths(12);
  }, [modelId, config]);

  const variant = config?.variants[variantIndex] ?? config?.variants[0];
  const purchaseUzs = (variant?.purchaseUsd ?? 0) * exchangeRate;

  const rentTotal = useMemo(
    () => (variant ? variant.rentalMonthlyUzs * rentMonths : 0),
    [variant, rentMonths],
  );

  const leasePrincipal = useMemo(() => {
    const down = purchaseUzs * (leaseDownPct / 100);
    return Math.max(0, purchaseUzs - down);
  }, [purchaseUzs, leaseDownPct]);

  const leaseMonthly = useMemo(
    () => calcLeaseMonthly(leasePrincipal, leaseRatePct / 100, leaseTermMonths),
    [leasePrincipal, leaseRatePct, leaseTermMonths],
  );

  const leaseTotal = useMemo(() => {
    const down = purchaseUzs * (leaseDownPct / 100);
    return down + leaseMonthly * leaseTermMonths;
  }, [purchaseUzs, leaseDownPct, leaseMonthly, leaseTermMonths]);

  if (!config || !variant) return null;

  const effectiveLeaseMin = config.leaseMinDownPct;
  const effectiveLeaseTerms = config.leaseTermsMonths;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-md sm:mb-14"
      id="daavlin-finance-calculator"
    >
      <div className="border-b border-brand-sectiongray bg-gradient-to-r from-brand-dark-navy via-brand-dark-navy/95 to-brand-dark-navy/90 px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/20">
            <Calculator className="h-6 w-6 text-brand-gold" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">{ui.sectionTitle}</h2>
            <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-white/75">{ui.sectionDesc}</p>
          </div>
        </div>

        <div className="mt-6 inline-flex rounded-xl border border-white/15 bg-white/10 p-1">
          <button
            type="button"
            onClick={() => setTab('rent')}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer sm:text-sm ${
              tab === 'rent' ? 'bg-brand-gold text-white shadow-sm' : 'text-white/80 hover:text-white'
            }`}
          >
            <HandCoins className="h-4 w-4" />
            {ui.tabRent}
          </button>
          <button
            type="button"
            onClick={() => setTab('lease')}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer sm:text-sm ${
              tab === 'lease' ? 'bg-brand-gold text-white shadow-sm' : 'text-white/80 hover:text-white'
            }`}
          >
            <Landmark className="h-4 w-4" />
            {ui.tabLease}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_minmax(0,340px)]">
        <div className="border-b border-brand-sectiongray p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-brand-text-muted">
            {ui.variantLabel}
          </label>
          <select
            value={variantIndex}
            onChange={(e) => setVariantIndex(Number(e.target.value))}
            className="mb-6 w-full rounded-xl border border-brand-sectiongray bg-brand-offwhite px-4 py-3 text-sm font-medium text-brand-text-primary focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
          >
            {config.variants.map((v, i) => (
              <option key={v.id} value={i}>
                {v.label[locale]}
                {v.catalogSku ? ` · ${v.catalogSku}` : ''}
              </option>
            ))}
          </select>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-sectiongray bg-brand-offwhite/60 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-brand-text-muted">{ui.purchaseLabel}</p>
              <p className="mt-1 text-base font-extrabold text-brand-text-primary">{formatUsd(variant.purchaseUsd)}</p>
              <p className="mt-0.5 text-[10px] text-brand-text-muted">{ui.purchaseNote}</p>
            </div>
            <div className="rounded-xl border border-brand-gold/25 bg-brand-gold-light/10 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-brand-gold">{ui.leasePurchase}</p>
              <p className="mt-1 text-base font-extrabold text-brand-text-primary">{formatUzs(purchaseUzs, locale)}</p>
            </div>
          </div>

          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-brand-text-muted">
            {ui.exchangeRate}
          </label>
          <input
            type="range"
            min={11000}
            max={15000}
            step={100}
            value={exchangeRate}
            onChange={(e) => setExchangeRate(Number(e.target.value))}
            className="mb-1 w-full accent-brand-gold"
          />
          <p className="mb-6 text-sm font-semibold text-brand-text-secondary">
            1 USD = {new Intl.NumberFormat('uz-UZ').format(exchangeRate)} so'm
          </p>

          {tab === 'rent' ? (
            <div className="space-y-5">
              <div>
                <label className="mb-2 flex justify-between text-xs font-bold uppercase tracking-wide text-brand-text-muted">
                  <span>{ui.rentDuration}</span>
                  <span className="text-brand-gold">
                    {rentMonths} {ui.monthUnit}
                  </span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={36}
                  value={rentMonths}
                  onChange={(e) => setRentMonths(Number(e.target.value))}
                  className="w-full accent-brand-gold"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="mb-2 flex justify-between text-xs font-bold uppercase tracking-wide text-brand-text-muted">
                  <span>{ui.leaseDown}</span>
                  <span className="text-brand-gold">{leaseDownPct}%</span>
                </label>
                <input
                  type="range"
                  min={effectiveLeaseMin}
                  max={config.leaseMaxDownPct}
                  value={leaseDownPct}
                  onChange={(e) => setLeaseDownPct(Number(e.target.value))}
                  className="w-full accent-brand-gold"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-brand-text-muted">
                  {ui.leaseTerm}
                </label>
                <div className="flex flex-wrap gap-2">
                  {effectiveLeaseTerms.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setLeaseTermMonths(m)}
                      className={`rounded-lg px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                        leaseTermMonths === m
                          ? 'bg-brand-gold text-white'
                          : 'border border-brand-sectiongray bg-brand-offwhite text-brand-text-secondary hover:border-brand-gold/40'
                      }`}
                    >
                      {m} {ui.monthUnit}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 flex justify-between text-xs font-bold uppercase tracking-wide text-brand-text-muted">
                  <span>{ui.leaseRate}</span>
                  <span className="text-brand-gold">{leaseRatePct}%</span>
                </label>
                <input
                  type="range"
                  min={12}
                  max={28}
                  step={0.5}
                  value={leaseRatePct}
                  onChange={(e) => setLeaseRatePct(Number(e.target.value))}
                  className="w-full accent-brand-gold"
                />
              </div>
            </div>
          )}

          <p className="mt-6 flex items-start gap-2 rounded-xl border border-brand-sectiongray bg-brand-offwhite/50 px-4 py-3 text-xs font-light leading-relaxed text-brand-text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
            {config.notes[locale]}
          </p>
        </div>

        <div className="flex flex-col justify-between bg-gradient-to-b from-brand-offwhite to-brand-white p-6 sm:p-8">
          {tab === 'rent' ? (
            <div className="space-y-4">
              <ResultCard label={ui.rentMonthly} value={formatUzs(variant.rentalMonthlyUzs, locale)} />
              <ResultCard
                label={ui.rentTotal}
                value={formatUzs(rentTotal, locale)}
                highlight
              />
            </div>
          ) : (
            <div className="space-y-4">
              <ResultCard
                label={ui.leaseMonthly}
                value={formatUzs(leaseMonthly, locale)}
                highlight
              />
              <ResultCard label={ui.leaseTotal} value={formatUzs(leaseTotal, locale)} />
              <ResultCard
                label={locale === 'uz' ? 'Boshlang‘ich to‘lov' : locale === 'ru' ? 'Первый взнос' : 'Down payment'}
                value={formatUzs(purchaseUzs * (leaseDownPct / 100), locale)}
              />
            </div>
          )}

          <div className="mt-8 space-y-3">
            <p className="text-[10px] font-light leading-relaxed text-brand-text-muted">{ui.disclaimer}</p>
            <Link
              to={daavlinSectionPath(locale, 'contacts')}
              className="flex w-full items-center justify-center rounded-xl bg-brand-gold px-5 py-3.5 text-sm font-bold text-white no-underline transition-colors hover:bg-brand-gold-dark"
            >
              {ui.cta}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
