'use client';

import React from 'react';

export function PrecisionProtocolDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Container - Tighter, more professional card */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-neutral-200 p-6 space-y-4">
        {/* Top Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-navy text-white rounded-full text-xs font-semibold tracking-wide">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            AUDIT-GRADE
          </div>
        </div>

        {/* Input */}
        <div className="flex justify-center">
          <div className="px-4 py-2 bg-neutral-100 rounded-lg text-center">
            <div className="text-xs font-semibold text-brand-navy tracking-wide">YOUR QUESTION</div>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="flex justify-center">
          <div className="w-px h-4 bg-neutral-300"></div>
        </div>

        {/* Protocol Section */}
        <div className="text-center space-y-3">
          <div className="text-[10px] font-mono text-neutral-500 tracking-wider">PRECISION PROTOCOL™</div>

          {/* AI Models Row - Compact */}
          <div className="grid grid-cols-3 gap-2">
            <div className="relative bg-white border border-neutral-300 rounded-lg p-2">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></div>
              <div className="text-[11px] font-bold text-brand-navy">OpenAI</div>
              <div className="text-[9px] text-neutral-500">GPT</div>
            </div>
            <div className="relative bg-white border border-neutral-300 rounded-lg p-2">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></div>
              <div className="text-[11px] font-bold text-brand-navy">Anthropic</div>
              <div className="text-[9px] text-neutral-500">Claude</div>
            </div>
            <div className="relative bg-white border border-neutral-300 rounded-lg p-2">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></div>
              <div className="text-[11px] font-bold text-brand-navy">Google</div>
              <div className="text-[9px] text-neutral-500">Gemini</div>
            </div>
          </div>

          {/* Analysis Layer - Compact */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 rounded-lg p-2">
              <div className="text-[11px] font-bold text-brand-navy">SparkData</div>
              <div className="text-[9px] text-neutral-600">Custom ML</div>
            </div>
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-2">
              <div className="text-[11px] font-bold text-brand-navy">Perplexity</div>
              <div className="text-[9px] text-neutral-600">Research</div>
            </div>
          </div>

          {/* Verification Label */}
          <div className="text-[10px] font-semibold text-neutral-600">Triangulation + Blind Review</div>

          {/* Evidence Anchor - Compact */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-xs font-bold text-brand-navy">Evidence Anchor</div>
            </div>
            <div className="text-[10px] text-neutral-600 leading-tight">
              PubMed · UpToDate · Domain Standards
            </div>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="flex justify-center">
          <div className="w-px h-4 bg-neutral-300"></div>
        </div>

        {/* Output - Compact */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200 rounded-lg">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-xs font-bold text-brand-navy tracking-wide">VERIFIED REPORT</div>
          </div>
        </div>

        {/* Bottom Stats - Compact */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-base font-bold text-brand-navy">5+</div>
            <div className="text-[9px] text-neutral-500 leading-tight">Models</div>
          </div>
          <div className="text-center">
            <div className="text-base font-bold text-brand-navy">3</div>
            <div className="text-[9px] text-neutral-500 leading-tight">QC Layers</div>
          </div>
          <div className="text-center">
            <div className="text-base font-bold text-brand-navy">100%</div>
            <div className="text-[9px] text-neutral-500 leading-tight">Audit Trail</div>
          </div>
        </div>
      </div>
    </div>
  );
}
