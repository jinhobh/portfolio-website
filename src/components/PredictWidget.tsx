"use client";

import { useState } from "react";

interface PredictResponse {
    prediction: number;
    confidence: number;
    model_version: string;
}

interface PredictError {
    detail: string;
}

export default function PredictWidget() {
    const [input, setInput] = useState("1.0, 2.0, 3.0, 4.0");
    const [result, setResult] = useState<PredictResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handlePredict() {
        setError(null);
        setResult(null);
        setLoading(true);

        const features = input
            .split(",")
            .map((s) => parseFloat(s.trim()))
            .filter((n) => !isNaN(n));

        if (features.length === 0) {
            setError("Enter at least one numeric feature.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("http://localhost:8000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ features }),
            });

            if (!res.ok) {
                const body: PredictError = await res.json().catch(() => ({
                    detail: `HTTP ${res.status}`,
                }));
                throw new Error(body.detail);
            }

            const data: PredictResponse = await res.json();
            setResult(data);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Failed to reach the server."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-lavender-400/10 bg-gradient-to-br from-twilight-800/60 to-twilight-900/60 p-6">
            <h3 className="text-gradient-gold font-mono text-sm tracking-widest">
                Live Inference
            </h3>
            <p className="mt-1 text-xs text-lavender-300/30">
                Send features to the model via POST /predict
            </p>

            <div className="mt-4 flex gap-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="1.0, 2.0, 3.0, 4.0"
                    className="flex-1 rounded-xl border border-lavender-400/10 bg-twilight-950/50 px-4 py-2.5 font-mono text-sm text-white/80 placeholder-lavender-400/20 outline-none transition-all focus:border-gold-400/40 focus:shadow-[0_0_20px_-5px_rgba(245,197,66,0.15)]"
                />
                <button
                    onClick={handlePredict}
                    disabled={loading}
                    className="rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-5 py-2.5 text-sm font-semibold text-twilight-950 transition-all hover:shadow-[0_0_25px_-5px_rgba(245,197,66,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? (
                        <span className="inline-flex items-center gap-2">
                            <svg
                                className="h-4 w-4 animate-spin"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="opacity-25"
                                />
                                <path
                                    d="M4 12a8 8 0 018-8"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="opacity-75"
                                />
                            </svg>
                            Running…
                        </span>
                    ) : (
                        "Predict"
                    )}
                </button>
            </div>

            {error && (
                <div className="mt-4 rounded-xl border border-sunset-500/20 bg-sunset-500/5 px-4 py-3 text-sm text-sunset-400">
                    {error}
                </div>
            )}

            {result && (
                <table className="mt-5 w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-lavender-400/10 text-lavender-400/40">
                            <th className="pb-2 font-medium">Metric</th>
                            <th className="pb-2 text-right font-medium">Value</th>
                        </tr>
                    </thead>
                    <tbody className="text-white/70">
                        <tr className="border-b border-lavender-400/5">
                            <td className="py-2.5">Prediction</td>
                            <td className="py-2.5 text-right font-mono text-gold-400">
                                {result.prediction.toFixed(4)}
                            </td>
                        </tr>
                        <tr className="border-b border-lavender-400/5">
                            <td className="py-2.5">Confidence</td>
                            <td className="py-2.5 text-right font-mono">
                                <span className="inline-flex items-center gap-2">
                                    <span className="inline-block h-1.5 w-16 overflow-hidden rounded-full bg-lavender-400/10">
                                        <span
                                            className="block h-full rounded-full bg-gradient-to-r from-gold-400 to-sunset-400 transition-all duration-500"
                                            style={{ width: `${result.confidence * 100}%` }}
                                        />
                                    </span>
                                    <span className="text-gold-300">
                                        {(result.confidence * 100).toFixed(1)}%
                                    </span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2.5">Model Version</td>
                            <td className="py-2.5 text-right font-mono text-lavender-400/30">
                                {result.model_version}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}
