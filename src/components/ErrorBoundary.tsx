import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import DrawOutlineButton from "./DrawOutlineButton";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error rendering the app:", error, info.componentStack);
    window.gtag?.("event", "exception", {
      description: error.message,
      fatal: true,
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center px-5 py-20 text-center">
        <div className="mx-auto max-w-md">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-8 w-8 text-red-500" strokeWidth={1.5} />
          </span>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">
            Something went wrong
          </h1>
          <p className="mt-3 text-gray-500">
            We hit an unexpected error loading this page. Try reloading, or
            head back to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={this.handleReload}
              className="rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >
              Reload page
            </button>
            <DrawOutlineButton
              href="/"
              lineClassName="bg-[#0E8FFB]"
              className="rounded-md border border-[#0E8FFB] px-6 py-3 font-semibold text-[#0E8FFB] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB] hover:text-white"
            >
              Back to homepage
            </DrawOutlineButton>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
