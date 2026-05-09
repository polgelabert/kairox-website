"use client";

import { Component, ReactNode } from "react";

// Wraps interactive client components so a render-time exception
// (e.g. in HeroVisual or ServiceVisual) doesn't crash the whole page.
// In dev we still log to the console so we can fix it.

type Props = { children: ReactNode; fallback?: ReactNode };
type State = { hasError: boolean };

export class SafeBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[SafeBoundary]", error);
    }
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
