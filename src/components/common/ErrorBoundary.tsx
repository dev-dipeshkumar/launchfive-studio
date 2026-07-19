"use client";

import { Component, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Optional custom fallback renderer. */
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Production-grade error boundary.
 *
 * Wraps the app (or individual sections) so a single component crash never
 * blanks the whole page. On error it shows a branded, recoverable fallback
 * instead of the React "white screen of death".
 */
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Surface the error for monitoring without crashing the app.
    if (process.env.NODE_ENV !== "production") {
      console.error("ErrorBoundary caught an error:", error);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          role="alert"
          className="min-h-[40vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-section-light-bg text-section-light-foreground"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20 mb-4">
            <span className="text-2xl font-bold gradient-text">!</span>
          </div>
          <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
          <p className="text-sm text-section-light-foreground/60 max-w-sm mb-5">
            A part of this page failed to load. You can try again — the rest of
            the site is still available.
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
