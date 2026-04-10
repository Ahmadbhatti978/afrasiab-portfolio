import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };

type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
          <div className="max-w-md text-center space-y-3">
            <h1 className="font-heading text-xl font-semibold">Something went wrong</h1>
            <p className="text-sm text-muted-foreground">
              Open the browser developer console (F12) for details, then refresh. If this is the live site, check that the
              GitHub Actions build used the correct <code className="text-primary">VITE_BASE</code> for your repository.
            </p>
            <pre className="text-left text-xs bg-card p-3 rounded-lg overflow-auto border border-border">
              {this.state.error.message}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
